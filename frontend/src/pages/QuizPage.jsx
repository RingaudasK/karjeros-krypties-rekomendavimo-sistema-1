import { useEffect, useState } from "react";
import { fetchQuestions, submitAnswers } from "../api";

const options = [
  { label: "Visai netinka", value: 0 },
  { label: "Labiau netinka", value: 1 },
  { label: "Labiau tinka", value: 2 },
  { label: "Labai tinka", value: 3 },
];

export default function QuizPage({ onComplete, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        alert("Nepavyko užkrauti klausimų.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const completedCount = Object.keys(answers).length;
  const progress = questions.length
    ? Math.round((completedCount / questions.length) * 100)
    : 0;

  const handleSubmit = async () => {
    if (questions.length !== Object.keys(answers).length) {
      alert("Atsakyk į visus klausimus.");
      return;
    }

    setSubmitting(true);

    try {
      const data = await submitAnswers(answers);
      onComplete(data);
    } catch (error) {
      alert("Nepavyko gauti rekomendacijų.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p>Kraunami klausimai...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="quiz-header">
        <div>
          <h2>Klausimynas</h2>
          <p className="muted-text">
            Pažymėk, kiek kiekvienas teiginys tau tinka.
          </p>
        </div>

        <div className="progress-box">
          <span>
            Užpildyta: {completedCount}/{questions.length}
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <p className="question-number">Klausimas {q.id}</p>
          <p className="question-text">{q.text}</p>

          <div className="options">
            {options.map((option) => (
              <label
                key={option.value}
                className={`option-label ${
                  String(answers[q.id]) === String(option.value)
                    ? "selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option.value}
                  checked={String(answers[q.id]) === String(option.value)}
                  onChange={() => handleChange(q.id, option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="button-row">
        <button type="button" className="secondary-button" onClick={onBack}>
          Atgal
        </button>

        <button onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Skaičiuojama..." : "Gauti rekomendacijas"}
        </button>
      </div>
    </div>
  );
}
