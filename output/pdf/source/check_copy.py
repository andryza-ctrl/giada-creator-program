# -*- coding: utf-8 -*-
"""Controlli di compliance sul copy generato da build_manual.py.

Si lancia dopo la build: legge copy.txt (tutto il testo del PDF, pagina per pagina) e
verifica le regole bloccanti del brief. Esce con codice 1 se una fallisce.

Aggiornato il 7 settembre 2026 con la revisione di Andrea (101 richieste): il tono è
più caldo, quindi le formulazioni sono cambiate. Le regole restano le stesse: qui si
controlla la SOSTANZA di ogni divieto, non la vecchia frase esatta.
"""
import re, sys, pathlib

HERE = pathlib.Path(__file__).resolve().parent
TRIAL = 'https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d'
t = (HERE / 'copy.txt').read_text()
low = t.lower()

TESTS = [
    ('URL trial esatto e presente', t.count(TRIAL) >= 1),
    ('nessun URL trial storpiato', len(re.findall(r't\.me/giadacare_bot\S*', t)) == t.count(TRIAL)),
    ('trial dichiarato a 14 giorni', '14 giorni' in low),
    ('nessun residuo del trial a 7 giorni', not re.search(r'7 giorni di prova|tuoi 7 giorni|_t7d', low)),
    ('nessuna promessa di mail al creator',
     not re.search(r'ti scriv|controlla la posta|ti mandiamo una mail|riceverai una mail', t, re.I)),
    ('nessun prezzo del prodotto Giada',
     not re.search(r'9,90|19,90|€\s?\d+[,.]\d\d|al mese|abbonamento', t)),
    ('divieto chili/taglie', 'niente chili, taglie o percentuali' in low),
    ('divieto primi piani sul corpo', 'niente primi piani su una parte del corpo' in low),
    ('divieto frasi sull’aspetto', 'il corpo di nessuno è un difetto' in low),
    ('divieto "sei sola"', 'sei sola' in low and 'solitudine non si usa' in low),
    ('trasparenza AI dichiarata al creator',
     'si capisce che giada è un’ai' in low and 'un’ai su telegram' in low),
    ('divieto nutrizionista', 'non è un medico né una nutrizionista' in low),
    ('disclaimer medico', 'non fa diagnosi' in low and 'stime sono indicative' in low),
    ('privacy: chat di terzi', 'lista chat' in low and 'notifiche' in low),
    ('marchi di terzi', 'Nessun altro marchio in campo' in t),
    ('minori', 'Niente minori' in t),
    ('audio trending', 'audio dei trend' in low and 'licenza' in low),
    ('mail di Andrea presente', t.count('andrea@vivariumai.co') >= 1),
    ('nessun claim di fondazione', not re.search(r'fondator|ho fondato|founder', t, re.I)),
    ('ruolo di Andrea corretto', 'In Vivarium mi occupo di marketing e contenuti' in t),
    ('compenso minimo dichiarato', '50€' in t),
    ('nessuna esclusiva dichiarata', 'nessuna esclusiva' in low),
    ('formato 9:16', '9:16' in t),
    ('durata 30-90', '30-90' in t),
]

bad = [n for n, ok in TESTS if not ok]
for n, ok in TESTS:
    print(('OK   ' if ok else 'FAIL '), n)
print(f'\n{len(TESTS) - len(bad)}/{len(TESTS)} · parole di copy: {len(t.split())}')
sys.exit(1 if bad else 0)
