INSERT INTO criteria (code, name) VALUES
('AN', 'Analitinis mąstymas'),
('CR', 'Kūrybiškumas'),
('CM', 'Bendravimas'),
('OR', 'Organizuotumas'),
('TE', 'Domėjimasis technologijomis'),
('PS', 'Problemų sprendimas');

INSERT INTO questions (text, criterion_code) VALUES
('Man patinka spręsti logines ir aiškios struktūros užduotis.', 'AN'),
('Mėgstu kurti naujas idėjas, vizualinius sprendimus ar originalius projektus.', 'CR'),
('Jaučiuosi gerai bendraudamas su žmonėmis ir aiškindamas savo mintis.', 'CM'),
('Man patinka planuoti darbus, dėlioti eigą ir laikytis tvarkos.', 'OR'),
('Dažnai domiuosi technologijomis, programomis ar naujais skaitmeniniais įrankiais.', 'TE'),
('Man įdomu ieškoti klaidų ir rasti, kodėl kažkas neveikia.', 'PS'),
('Man patinka dirbti su skaičiais, duomenimis ir jų analize.', 'AN'),
('Man svarbu, kad rezultatas būtų ne tik naudingas, bet ir patrauklus vartotojui.', 'CR'),
('Man patinka derinti žmonių darbą ir padėti komandai siekti bendro tikslo.', 'CM'),
('Man svarbu, kad darbai būtų atlikti laiku ir pagal planą.', 'OR'),
('Man įdomu išbandyti naujas programas, sistemas ar technologinius sprendimus.', 'TE'),
('Susidūręs su problema dažniausiai bandau pats ieškoti sprendimo būdo.', 'PS');

INSERT INTO career_paths (name, description) VALUES
('Programinės įrangos kūrimas', 'Tinka žmonėms, kuriems patinka kurti sistemas, spręsti problemas ir dirbti su technologijomis.'),
('Duomenų analitika', 'Tinka žmonėms, kuriems patinka analizuoti informaciją, ieškoti dėsningumų ir dirbti su skaičiais.'),
('Sistemų administravimas', 'Tinka žmonėms, kurie domisi IT infrastruktūra, sistemų priežiūra ir techninių problemų sprendimu.'),
('UI/UX dizainas', 'Tinka žmonėms, kuriems svarbi vartotojo patirtis, kūryba ir patrauklus sprendimų pateikimas.'),
('Projektų valdymas', 'Tinka žmonėms, kurie mėgsta planuoti, organizuoti darbus ir koordinuoti komandas.'),
('Skaitmeninė rinkodara', 'Tinka žmonėms, kurie domisi komunikacija, auditorijų pasiekimu ir kūrybiniais sprendimais skaitmeninėje erdvėje.');

INSERT INTO career_path_criteria (career_path_id, criterion_code, weight) VALUES
(1, 'AN', 5), (1, 'CR', 2), (1, 'CM', 2), (1, 'OR', 3), (1, 'TE', 5), (1, 'PS', 5),
(2, 'AN', 5), (2, 'CR', 1), (2, 'CM', 2), (2, 'OR', 4), (2, 'TE', 4), (2, 'PS', 4),
(3, 'AN', 4), (3, 'CR', 1), (3, 'CM', 2), (3, 'OR', 4), (3, 'TE', 5), (3, 'PS', 5),
(4, 'AN', 2), (4, 'CR', 5), (4, 'CM', 3), (4, 'OR', 3), (4, 'TE', 3), (4, 'PS', 2),
(5, 'AN', 3), (5, 'CR', 2), (5, 'CM', 5), (5, 'OR', 5), (5, 'TE', 2), (5, 'PS', 3),
(6, 'AN', 2), (6, 'CR', 4), (6, 'CM', 5), (6, 'OR', 3), (6, 'TE', 3), (6, 'PS', 2);