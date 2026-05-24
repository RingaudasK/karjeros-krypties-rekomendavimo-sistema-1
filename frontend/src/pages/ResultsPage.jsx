export default function ResultsPage({ data, onRestart, onGoHome }) {
  if (!data) {
    return (
      <div className="container">
        <p>Nėra rezultatų.</p>
        <button onClick={onGoHome}>Grįžti</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Rekomenduojamos karjeros kryptys</h2>
      <p className="muted-text">
        Sistema įvertino tavo atsakymus ir atrinko tris labiausiai tinkančias
        kryptis.
      </p>

      <div className="top-strengths-box">
        <h3>Stipriausi tavo kriterijai</h3>
        <div className="strength-tags">
          {data.topStrengths.map((item) => (
            <span key={item.code} className="strength-tag">
              {item.label}: {item.value}
            </span>
          ))}
        </div>
      </div>

      {data.results.map((item, index) => (
        <div key={item.id} className="result-card">
          <div className="result-top">
            <div>
              <p className="result-rank">#{index + 1} rekomendacija</p>
              <h3>{item.name}</h3>
            </div>

            <div className="percent-badge">{item.percent}%</div>
          </div>

          <p>{item.description}</p>

          <p>
            <strong>Atitikimo balas:</strong> {item.score}
          </p>

          <p>
            <strong>Paaiškinimas:</strong> {item.reason}
          </p>

          <div className="strength-tags">
            {item.strongestCriteria.map((criterion) => (
              <span key={criterion.code} className="strength-tag">
                {criterion.label}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="button-row">
        <button type="button" className="secondary-button" onClick={onGoHome}>
          Į pradžią
        </button>

        <button onClick={onRestart}>Pildyti iš naujo</button>
      </div>
    </div>
  );
}
