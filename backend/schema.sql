DROP TABLE IF EXISTS results;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS criteria;
DROP TABLE IF EXISTS career_paths;
DROP TABLE IF EXISTS career_path_criteria;

CREATE TABLE criteria (
    code TEXT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    criterion_code TEXT NOT NULL,
    FOREIGN KEY (criterion_code) REFERENCES criteria(code)
);

CREATE TABLE career_paths (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE career_path_criteria (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    career_path_id INTEGER NOT NULL,
    criterion_code TEXT NOT NULL,
    weight INTEGER NOT NULL,
    FOREIGN KEY (career_path_id) REFERENCES career_paths(id),
    FOREIGN KEY (criterion_code) REFERENCES criteria(code)
);

CREATE TABLE results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    top1_name TEXT NOT NULL,
    top2_name TEXT NOT NULL,
    top3_name TEXT NOT NULL
);