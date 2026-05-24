export default function HomePage({ onStart }) {
  return (
    <div className="container hero-card">
      <div className="hero-badge">Prototipas</div>

      <h1>Karjeros krypties rekomendavimo sistema</h1>

      <p className="hero-text">
        Šis prototipas padeda įvertinti tavo interesus, gebėjimus ir stipriąsias
        puses. Atsakyk į klausimus, o sistema pateiks tris labiausiai tau
        tinkančias karjeros kryptis.
      </p>

      <div className="hero-grid">
        <div className="hero-item">
          <h3>Kas vertinama?</h3>
          <p>
            Interesai, gebėjimai, domėjimasis technologijomis, bendravimas ir
            organizuotumas.
          </p>
        </div>

        <div className="hero-item">
          <h3>Koks rezultatas?</h3>
          <p>
            Pamatysi rekomenduojamas kryptis, atitikimo procentą ir trumpą
            paaiškinimą.
          </p>
        </div>

        <div className="hero-item">
          <h3>Kam tai skirta?</h3>
          <p>
            Mokiniams, studentams ir žmonėms, kurie ieško aiškesnės karjeros
            krypties.
          </p>
        </div>
      </div>

      <button onClick={onStart}>Pradėti testą</button>
    </div>
  );
}
