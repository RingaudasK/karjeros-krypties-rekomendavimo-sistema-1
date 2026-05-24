from pathlib import Path
from datetime import datetime
import sqlite3

from flask import Flask, jsonify, request
from flask_cors import CORS

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "career.db"

app = Flask(__name__)
CORS(app)

CRITERION_LABELS = {
    "AN": "analitinis mąstymas",
    "CR": "kūrybiškumas",
    "CM": "bendravimas",
    "OR": "organizuotumas",
    "TE": "domėjimasis technologijomis",
    "PS": "problemų sprendimas",
}


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/api/questions", methods=["GET"])
def get_questions():
    conn = get_db()
    rows = conn.execute(
        "SELECT id, text, criterion_code FROM questions ORDER BY id"
    ).fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])


@app.route("/api/recommend", methods=["POST"])
def recommend():
    data = request.get_json(silent=True) or {}
    answers = data.get("answers", {})

    conn = get_db()

    questions = conn.execute(
        "SELECT id, criterion_code FROM questions"
    ).fetchall()

    criteria_scores = {
        "AN": 0,
        "CR": 0,
        "CM": 0,
        "OR": 0,
        "TE": 0,
        "PS": 0,
    }

    for q in questions:
        qid = str(q["id"])
        value = int(answers.get(qid, 0))
        criteria_scores[q["criterion_code"]] += value

    career_paths = conn.execute(
        "SELECT id, name, description FROM career_paths"
    ).fetchall()

    all_scores = []

    for cp in career_paths:
        weights = conn.execute(
            """
            SELECT criterion_code, weight
            FROM career_path_criteria
            WHERE career_path_id = ?
            """,
            (cp["id"],)
        ).fetchall()

        score = 0
        contributions = []

        for w in weights:
            criterion_code = w["criterion_code"]
            weight = w["weight"]
            contribution = criteria_scores[criterion_code] * weight
            score += contribution
            contributions.append({
                "code": criterion_code,
                "label": CRITERION_LABELS[criterion_code],
                "weight": weight,
                "value": criteria_scores[criterion_code],
                "contribution": contribution,
            })

        contributions.sort(key=lambda x: x["contribution"], reverse=True)
        strongest = contributions[:2]

        criterion_max = {
            "AN": 6,
            "CR": 6,
            "CM": 6,
            "OR": 6,
            "TE": 6,
            "PS": 6,
        }

        max_possible = sum(
            criterion_max[item["code"]] * item["weight"]
            for item in contributions
        )
        percent = round((score / max_possible) * 100) if max_possible > 0 else 0

        reason = (
            f"Ši kryptis rekomenduojama todėl, kad pagal tavo atsakymus ji gerai "
            f"atitinka tokius kriterijus kaip {strongest[0]['label']} ir {strongest[1]['label']}."
        )

        all_scores.append({
            "id": cp["id"],
            "name": cp["name"],
            "description": cp["description"],
            "score": score,
            "percent": percent,
            "reason": reason,
            "strongestCriteria": strongest,
        })

    all_scores.sort(key=lambda x: x["score"], reverse=True)
    results = all_scores[:3]

    sorted_user_criteria = sorted(
        criteria_scores.items(),
        key=lambda x: x[1],
        reverse=True
    )

    user_top_strengths = [
        {
            "code": code,
            "label": CRITERION_LABELS[code],
            "value": value
        }
        for code, value in sorted_user_criteria[:3]
    ]

    conn.execute(
        """
        INSERT INTO results (created_at, top1_name, top2_name, top3_name)
        VALUES (?, ?, ?, ?)
        """,
        (
            datetime.now().isoformat(timespec="seconds"),
            results[0]["name"],
            results[1]["name"],
            results[2]["name"],
        )
    )
    conn.commit()
    conn.close()

    return jsonify({
        "criteriaScores": criteria_scores,
        "topStrengths": user_top_strengths,
        "results": results
    })


if __name__ == "__main__":
    app.run(debug=True)