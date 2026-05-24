import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "career.db"
SCHEMA_PATH = BASE_DIR / "schema.sql"
SEED_PATH = BASE_DIR / "seed.sql"

def run_sql_file(cursor, path):
    with open(path, "r", encoding="utf-8") as f:
        cursor.executescript(f.read())

def main():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    run_sql_file(cur, SCHEMA_PATH)
    run_sql_file(cur, SEED_PATH)

    conn.commit()
    conn.close()
    print(f"Database created at: {DB_PATH}")

if __name__ == "__main__":
    main()