# -*- coding: utf-8 -*-
"""Controlli di compliance sul copy generato da build_manual.py.

Si lancia dopo la build: legge copy.txt (tutto il testo del PDF, pagina per pagina) e
verifica le regole bloccanti del brief. Esce con codice 1 se una fallisce.
"""
import re, sys, pathlib

HERE = pathlib.Path(__file__).resolve().parent
TRIAL = 'https://t.me/giadacare_bot?start=ad_creatorsb2b_t7d'
t = (HERE / 'copy.txt').read_text()

TESTS = [
    ('URL trial esatto e presente', t.count(TRIAL) >= 1),
    ('nessun URL trial storpiato', len(re.findall(r't\.me/giadacare_bot\S*', t)) == t.count(TRIAL)),
    ('qualifica "assistente AI su Telegram"', 'assistente AI su Telegram' in t),
    ('nessuna promessa di mail al creator',
     not re.search(r'ti scriv|controlla la posta|ti mandiamo una mail|riceverai una mail', t, re.I)),
    ('nessun prezzo del prodotto Giada',
     not re.search(r'9,90|19,90|€\s?\d+[,.]\d\d|al mese|abbonamento', t)),
    ('divieto chili/taglie', 'Niente promesse di chili' in t),
    ('divieto primi piani sul corpo', 'Niente primi piani su una parte del corpo' in t),
    ('divieto frasi sull’aspetto', 'Niente frasi che attaccano l’aspetto' in t),
    ('divieto "sei sola"', 'Non dire “sei sola”' in t),
    ('obbligo di qualifica AI', 'Dichiara: “assistente AI su Telegram”' in t),
    ('divieto nutrizionista', 'Non presentare Giada come nutrizionista' in t),
    ('privacy: chat di terzi', 'lista chat di Telegram' in t),
    ('marchi di terzi', 'Nessun altro marchio in campo' in t),
    ('minori', 'Niente minori' in t),
    ('audio trending', 'audio trending' in t),
    ('disclaimer medico', 'non fa diagnosi' in t),
    ('mail di Andrea in due punti', t.count('andrea@vivariumai.co') >= 2),
    ('nessun claim di fondazione', not re.search(r'fondator|ho fondato|founder', t, re.I)),
    ('ruolo di Andrea corretto', 'In Vivarium mi occupo di marketing e contenuti' in t),
    ('compenso minimo dichiarato', '50€' in t),
    ('formato 9:16', '9:16' in t),
    ('durata 30-90', '30-90' in t),
]

bad = [n for n, ok in TESTS if not ok]
for n, ok in TESTS:
    print(('OK   ' if ok else 'FAIL '), n)
print(f'\n{len(TESTS) - len(bad)}/{len(TESTS)} · parole di copy: {len(t.split())}')
sys.exit(1 if bad else 0)
