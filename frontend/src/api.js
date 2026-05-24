const API_URL = "https://karjeros-krypties-rekomendavimo-sistema.onrender.com/api";

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
