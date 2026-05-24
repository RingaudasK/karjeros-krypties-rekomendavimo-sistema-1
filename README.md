# Karjeros krypties rekomendavimo sistema

Baigiamojo darbo projekto metu sukurta internetinė sistema, kuri pagal vartotojo atsakymus pateikia tris labiausiai tinkančias karjeros kryptis.

Sistema skirta padėti vartotojui geriau įvertinti savo interesus, gebėjimus ir stipriąsias savybes bei gauti aiškias karjeros krypčių rekomendacijas.

## Vieša demonstracija

Sistemą galima išbandyti čia:

[Atidaryti karjeros krypties rekomendavimo sistemą](https://karjeros-krypties-rekomendavimo-puslapis.onrender.com/)

Backend API klausimų nuoroda:

[Peržiūrėti API klausimus](https://karjeros-krypties-rekomendavimo-sistema.onrender.com/api/questions)

> Pastaba: naudojant nemokamą „Render“ planą, pirmas sistemos paleidimas po ilgesnio nenaudojimo gali užtrukti, kol serveris automatiškai pasileidžia.

## Pagrindinės funkcijos

- Vartotojui pateikiamas 12 klausimų klausimynas.
- Vertinami šeši kriterijai: analitinis mąstymas, kūrybiškumas, bendravimas, organizuotumas, domėjimasis technologijomis ir problemų sprendimas.
- Pagal pateiktus atsakymus apskaičiuojamos tinkamiausios karjeros kryptys.
- Rezultatų lange parodomos trys rekomenduojamos kryptys.
- Prie rekomendacijų pateikiamas trumpas paaiškinimas ir atitikimo įvertinimas.

## Naudotos technologijos

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Python
- Flask
- Flask-CORS
- Gunicorn

### Duomenų bazė

- SQLite

### Publikavimas

- GitHub – projekto kodo saugojimui
- Render – viešam sistemos publikavimui

## Projekto struktūra

```text
karjeros-krypties-rekomendavimo-sistema
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app.py
│   ├── requirements.txt
│   └── career.db
│
├── .gitignore
└── README.md
```

## Sistemos veikimo principas

1. Vartotojas pradeda testą ir atsako į pateiktus klausimus.
2. Atsakymai perduodami į backend dalį.
3. Sistema apskaičiuoja kriterijų balus.
4. Kriterijų balai palyginami su karjeros kryptims priskirtais svoriais.
5. Vartotojui pateikiamos trys aukščiausią įvertinimą gavusios karjeros kryptys.

## Paleidimas lokaliai

### Backend paleidimas

Terminale pereinama į `backend` aplanką:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate.fish
pip install -r requirements.txt
python app.py
```

Backend lokaliai bus pasiekiamas adresu:

```text
http://127.0.0.1:5000
```

### Frontend paleidimas

Kitame terminalo lange pereinama į `frontend` aplanką:

```bash
cd frontend
npm install
npm run dev
```

Frontend lokaliai bus pasiekiamas terminale nurodytu adresu, dažniausiai:

```text
http://localhost:5173
```

## Autorius

**Ringaudas Kebedys**

SMK Aukštoji mokykla  
Studijų programa: Programavimas ir multimedija  
Baigiamasis darbas: *Karjeros krypties rekomendavimo sistemos kūrimas*  
2026 m.
