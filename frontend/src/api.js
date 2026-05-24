const API_URL = "http://127.0.0.1:5000/api";

export async function fetchQuestions() {
  const res = await fetch(`${API_URL}/questions`);
  if (!res.ok) throw new Error("Nepavyko gauti klausimu");
  return res.json();
}

export async function submitAnswers(answers) {
  const res = await fetch(`${API_URL}/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answers }),
  });

  if (!res.ok) throw new Error("Nepavyko gauti rekomendaciju");
  return res.json();
}
