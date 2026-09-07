from pathlib import Path
import math, json, re
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from PIL import Image

ROOT=Path(__file__).resolve().parents[3]
OUT=ROOT/'output/pdf'; A=OUT/'assets'; W,H=450,675; M=30; CW=390
NAVY='#203260'; TEAL='#10b8c0'; PAPER='#fff9ef'; PERI='#c6d0f6'; PINK='#ffb8c7'; YELLOW='#ffe074'; SOFT='#515e7f'; DARKTEAL='#087d86'
TRIAL='https://t.me/giadacare_bot?start=ad_creatorsb2b_t7d'
MAIL='andrea@vivariumai.co'
for name in ['BricolageBold','BricolageMedium','Geist','GeistBold','Arapey']:
 pdfmetrics.registerFont(TTFont(name,str(A/(name+'.ttf'))))
pdfmetrics.registerFontFamily('Geist',normal='Geist',bold='GeistBold',italic='Arapey',boldItalic='Arapey')
C=canvas.Canvas(str(OUT/'GiadaCreators_ManualeDiVolo.pdf'),pagesize=(W,H),pageCompression=1)
C.setTitle('Giada Creators - Manuale di volo'); C.setAuthor('Andrea | Vivarium'); C.setSubject('Idee, esempi e strumenti per creare video con Giada'); C.setCreator('Giada Creator Program')
TOTAL=18
page=0; alltext=[]; checks=[]

def color(v): return HexColor(v)
def box(x,y,w,h,fill=PAPER,r=14,stroke=NAVY,sw=1.5,shadow=0):
 if shadow:
  C.setFillColor(color(NAVY)); C.roundRect(x+shadow,H-y-h-shadow,w,h,r,stroke=0,fill=1)
 C.setFillColor(color(fill)); C.setStrokeColor(color(stroke or fill));C.setLineWidth(sw)
 C.roundRect(x,H-y-h,w,h,r,stroke=bool(stroke),fill=1)
def line(x,y,x2,y2,c=NAVY,width=1):
 C.setStrokeColor(color(c));C.setLineWidth(width);C.line(x,H-y,x2,H-y2)
def text(s,x,y,size=15,font='Geist',c=NAVY):
 C.setFillColor(color(c));C.setFont(font,size);C.drawString(x,H-y-size*.8,s)
 alltext.append((page,s))
def para(s,x,y,w=CW,size=14.4,leading=None,font='Geist',c=NAVY,maxh=None):
 style=ParagraphStyle('p',fontName=font,fontSize=size,leading=leading or size*1.33,textColor=color(c),spaceAfter=0,splitLongWords=False,allowWidows=0,allowOrphans=0)
 obj=Paragraph(s.replace('\n','<br/>'),style);aw,ah=obj.wrap(w,2000)
 if maxh is not None and ah>maxh+0.1:checks.append({'page':page,'problem':'text exceeds box','height':ah,'limit':maxh,'text':s})
 if y+ah>629:checks.append({'page':page,'problem':'footer intrusion','bottom':y+ah,'text':s})
 obj.drawOn(C,x,H-y-ah);alltext.append((page,re.sub('<[^>]+>','',s)))
 return y+ah

def title(s,y=72,size=42,x=M,w=CW,c=NAVY):
 lines=s.split('\n')
 longest=max(pdfmetrics.stringWidth(l,'BricolageBold',size) for l in lines)
 if longest>w:size*=w/longest
 for i,l in enumerate(lines):text(l,x,y+i*size*.97,size,'BricolageBold',c)
 return y+len(lines)*size*.97

def tag(s,x,y,fill=YELLOW,angle=0,size=11.2,w=None):
 w=w or pdfmetrics.stringWidth(s,'GeistBold',size)+23
 C.saveState();C.translate(x,H-y);C.rotate(angle)
 C.setFillColor(color(NAVY));C.roundRect(3,-28,w,25,7,stroke=0,fill=1)
 C.setFillColor(color(fill));C.setStrokeColor(color(NAVY));C.setLineWidth(1.3);C.roundRect(0,-25,w,25,7,stroke=1,fill=1)
 C.setFillColor(color(NAVY));C.setFont('GeistBold',size);C.drawString(11,-17,s);C.restoreState();alltext.append((page,s))
 return w

def dots(x,y,w,h,c=NAVY,step=9,r=.9):
 C.saveState();C.setFillColor(color(c));C.setFillAlpha(.18)
 for i in range(int(w/step)):
  for j in range(int(h/step)): C.circle(x+i*step,H-y-j*step,r,stroke=0,fill=1)
 C.restoreState()

def star(x,y,r=25,fill=YELLOW,points=10):
 p=C.beginPath()
 for i in range(points*2):
  a=math.pi*i/points;rr=r if i%2==0 else r*.76
  xx=x+math.cos(a)*rr;yy=H-y+math.sin(a)*rr
  p.moveTo(xx,yy) if i==0 else p.lineTo(xx,yy)
 p.close();C.setFillColor(color(fill));C.setStrokeColor(color(NAVY));C.setLineWidth(1.6);C.drawPath(p,fill=1,stroke=1)

def arrow(x,y,x2,y2,c=NAVY,width=2.5):
 line(x,y,x2,y2,c,width);a=math.atan2(y2-y,x2-x)
 for off in [-.55,.55]: line(x2,y2,x2-9*math.cos(a+off),y2-9*math.sin(a+off),c,width)

def image(name,x,y,w,h=None,cover=False,r=0):
 im=Image.open(A/name);iw,ih=im.size;h=h or w*ih/iw
 C.saveState()
 if r:
  p=C.beginPath();p.roundRect(x,H-y-h,w,h,r);C.clipPath(p,stroke=0)
 if cover:
  scale=max(w/iw,h/ih);dw,dh=iw*scale,ih*scale
  C.drawImage(ImageReader(im),x+(w-dw)/2,H-y-h+(h-dh)/2,dw,dh,mask='auto')
 else:C.drawImage(ImageReader(im),x,H-y-h,w,h,mask='auto')
 C.restoreState()

def linkrect(x,y,w,h,url):C.linkURL(url,(x,H-y-h,x+w,H-y),relative=0,thickness=0)
def button(s,x,y,w,url=None,dest=None,fill=TEAL,size=13):
 box(x,y,w,42,fill,12,shadow=3);text(s,x+14,y+14,size,'GeistBold');arrow(x+w-30,y+21,x+w-14,y+21,width=2)
 if url:linkrect(x,y,w,42,url)
 if dest:C.linkRect('',dest,(x,H-y-42,x+w,H-y),relative=0,thickness=0)
def bubble(s,x,y,w,h,fill=PAPER,size=17):
 box(x,y,w,h,fill,17,shadow=4);para(s,x+17,y+15,w-34,size=size,leading=size*1.18,font='BricolageMedium',maxh=h-26)
 p=C.beginPath();p.moveTo(x+28,H-y-h);p.lineTo(x+19,H-y-h-16);p.lineTo(x+53,H-y-h);C.setFillColor(color(fill));C.setStrokeColor(color(NAVY));C.setLineWidth(1.5);C.drawPath(p,fill=1,stroke=1)

def icon(kind,x,y,s=38,fill=TEAL):
 box(x,y,s,s,fill,r=10,sw=1.4)
 C.setStrokeColor(color(NAVY));C.setLineWidth(1.8)
 if kind=='chat':
  C.roundRect(x+8,H-y-25,22,16,5,stroke=1,fill=0);line(x+13,y+25,x+10,y+30,width=1.8)
  for z in [13,19,25]:C.circle(x+z,H-y-17,1,fill=1,stroke=0)
 elif kind=='play':
  p=C.beginPath();p.moveTo(x+15,H-y-10);p.lineTo(x+28,H-y-19);p.lineTo(x+15,H-y-28);p.close();C.setFillColor(color(NAVY));C.drawPath(p,fill=1,stroke=0)
 elif kind=='check':line(x+9,y+20,x+16,y+27,width=2.5);line(x+16,y+27,x+29,y+11,width=2.5)
 elif kind=='mic':
  C.roundRect(x+15,H-y-24,8,17,4,fill=0,stroke=1);p=C.beginPath();p.moveTo(x+10,H-y-18);p.curveTo(x+10,H-y-34,x+28,H-y-34,x+28,H-y-18);C.drawPath(p,stroke=1);line(x+19,y+30,x+19,y+34,width=1.8)
 else:
  text(kind,x+8,y+10,18,'BricolageBold')

def start(section,heading=None,bg=PAPER,key=None,size=42):
 global page
 if page:C.showPage()
 page+=1
 C.setFillColor(color(bg));C.rect(0,0,W,H,stroke=0,fill=1)
 C.bookmarkPage(key or f'p{page}')
 C.addOutlineEntry(section+' / '+(heading or 'Copertina').replace('\n',' '),key or f'p{page}',level=0,closed=False)
 if page!=1:
  text('giada',M,26,20,'BricolageBold');text('CREATORS',88,32,9.2,'GeistBold')
  tw=pdfmetrics.stringWidth(section.upper(),'GeistBold',9.2)+20
  box(W-M-tw,25,tw,23,NAVY,6,stroke=None);text(section.upper(),W-M-tw+10,32,9.2,'GeistBold',PAPER)
  line(M,641,W-M,641,width=.65)
  text('MANUALE DI VOLO',M,651,8.4,'GeistBold');text('INDICE',W-124,651,8.4,'GeistBold')
  C.linkRect('','indice',(W-130,10,W-78,32),relative=0,thickness=0)
  text(f'{page:02d} / {TOTAL:02d}',W-72,650,10,'GeistBold')
 if heading:return title(heading,size=size)
 return 72

def smallnote(s,y=603,fill=PERI):
 box(M,y,CW,27,fill,7,stroke=None);para(s,M+10,y+7,CW-20,size=10.4,leading=12,maxh=16)

def row(n,head,body,y,fill=PERI,h=92):
 box(M,y,CW,h,fill,12,shadow=3)
 text(n,M+15,y+15,26,'BricolageBold');text(head,M+57,y+15,18,'BricolageBold')
 para(body,M+57,y+41,CW-73,size=13.4,leading=17.5,maxh=h-49)

# ============================================================ 01 COPERTINA
start('Giada Creator Program',key='cover')
text('giada',30,26,25,'BricolageBold');text('CREATORS',102,36,10,'GeistBold');tag('SI PARTE DA UN’IDEA',250,28,PERI,angle=-3,size=9.7)
title('Manuale\ndi volo.',y=86,size=67)
text('La tua voce. Una chat. Un video da ricordare.',32,227,14.1,'Geist')
box(31,267,388,330,PERI,r=22,shadow=6)
image('giada-welcome-scene.png',157,277,234,310,cover=True,r=15)
dots(42,435,102,152,step=8)
bubble('Il tuo punto\ndi vista conta.',46,302,177,91,PAPER,22)
star(105,481,48,YELLOW);text('CIAO!',72,469,23,'BricolageBold')
tag('PROVA. IMMAGINA. CREA.',55,552,TEAL,angle=4,size=10.4)
text('Il manuale per creare con Giada',32,624,15,'BricolageMedium')
text('VIVARIUM  /  SETTEMBRE 2026',32,651,9.1,'GeistBold')
C.linkRect('','indice',(30,0,420,655),relative=0,thickness=0)

# ============================================================ 02 CIAO
start('Ciao','Sono Andrea.',key='indice',size=43)
y=para('In Vivarium mi occupo di marketing e contenuti. <b>Giada</b> è la nostra assistente AI su Telegram: questo programma nasce da una cosa semplice, i video migliori li fa chi la usa e ha qualcosa da dire.',M,136,size=15.2)
y=para('<b>Non è un contest, né UGC a cottimo.</b> Un video alla volta, pagato. Io porto obiettivi, riferimenti e limiti: idea, parole e taglio sono tuoi.',M,y+17,size=15.2)
para('Le idee le leggo io, una per una. Qui c’è quello che darei a me stesso per cominciare.',M,y+17,size=15.2)
text('La tua mappa',M,383,25,'BricolageBold');text('TOCCA UNA TAPPA',294,394,9,'GeistBold')
for i,(lab,pg,dest) in enumerate([('Conosci e prova Giada','03','giada'),('Trova la tua storia','05','personas'),('Esempi e mestiere','07','esempi'),('Regole e consegna','13','regole')]):
 yy=423+i*39
 line(M,yy+31,W-M,yy+31,width=.7);text(lab,M,yy+5,14,'GeistBold');text(pg,W-M-40,yy+4,15,'BricolageBold');arrow(W-M-15,yy+13,W-M,yy+13,width=1.6)
 C.linkRect('',dest,(M,H-yy-33,W-M,H-yy),relative=0,thickness=0)
tag('18 PAGINE. DIECI MINUTI.',M,608,YELLOW,angle=-2,size=10)

# ============================================================ 03 CONOSCI GIADA
start('Conosci Giada','Un’amica in chat.\nUn’assistente AI.',key='giada',size=38)
para('Vive su <b>Telegram</b>. Le mandi testo, foto del piatto o vocali. Le puoi raccontare anche acqua, movimento, sonno e peso.',M,167,size=14.5)
features=[('Capire il pasto','Calorie e macro stimati, commento del piatto, coerenza con i tuoi obiettivi.'),('Trovare cosa mangiare','Ricette con quello che hai in casa. Consigli pratici sulla dispensa.'),('Tenere il filo','Feedback nel tempo e aiuto a riprendere dopo uno sgarro, senza sensi di colpa.'),('Muoversi e uscire','Calorie attive e coaching. Al ristorante legge il menù che le mandi.')]
y=238
for i,(h,b) in enumerate(features):
 icon(['chat','?','check','play'][i],M,y+4,34,[PERI,PINK,YELLOW,TEAL][i]);text(h,78,y,18,'BricolageBold');para(b,78,y+26,342,size=13.3,leading=17.2,maxh=40);y+=84
box(M,570,CW,52,PERI,11,stroke=None)
para('<b>Le stime sono indicative.</b> Giada non è un medico né un nutrizionista: non fa diagnosi, non cura, non scrive diete.',M+12,580,CW-24,size=11.8,leading=15.5,maxh=34)

# ============================================================ 04 PROVA GIADA
start('Prova Giada','Prima la chat.\nPoi la scintilla.',bg=PERI,key='trial',size=41)
para('Nei tuoi <b>7 giorni di prova</b> usala davvero. Nessun compito da consegnare: tre spunti per scoprire quanto le puoi raccontare.',M,172,size=14.5)
for i,(s,col) in enumerate([('“Cosa preparo con quello che ho in frigo?”',PAPER),('“Stasera mangio qui: mi dai un’idea dal menù?”',YELLOW),('“Oggi è andata così. Come riprendo il filo?”',PAPER)]):
 yy=240+i*63;box(M+(i%2)*17,yy,CW-17,50,col,14,shadow=3);para(s,M+16+(i%2)*17,yy+12,CW-51,size=14.3,leading=17,maxh=33)
para('<b>Foto, vocale, testo: prova tutti e tre.</b> La tua chat vera è il materiale del video.',M,443,size=14.5)
button('Inizia i tuoi 7 giorni',M,522,266,TRIAL)
q=qr.QrCodeWidget(TRIAL);b=q.getBounds();d=Drawing(84,84,transform=[84/(b[2]-b[0]),0,0,84/(b[3]-b[1]),0,0]);d.add(q)
box(320,508,96,87,PAPER,7,stroke=None);renderPDF.draw(d,C,326,H-508-84);linkrect(320,508,96,87,TRIAL)
text('Tocca il bottone o inquadra il QR.',M,578,10.8,'Geist')
text(TRIAL,M,600,7.1,'Geist',DARKTEAL)

# ============================================================ 05 A CHI PARLI
start('A chi parli','Una persona.\nUn momento vero.',key='personas',size=39)
para('Cinque situazioni, non cinque recinti. Scegline una e riconoscila nella tua esperienza.',M,168,size=14.5)
personas=[('01','La testa già piena','“Non ho voglia di pensarci anche a questo.”','Evita “basta organizzarsi” e le lezioni di meal prep.',PINK),
('02','Il piano c’è. La costanza?','“So cosa fare. È farlo ogni giorno.”','Evita di spiegare le basi a chi le conosce già.',PERI),
('03','Una presenza, senza etichette','“Voglio una risposta, non una lezione.”','Mai “alla tua età”, mai “sei sola”.',YELLOW),
('04','I passi sì. E il pranzo?','“Misuro tutto, tranne quello che mangio.”','Niente promesse di performance sportive.',TEAL),
('05','Il solito “da lunedì”','“Non voglio ricominciare sempre da capo.”','Niente colpa, niente disciplina, niente chili.',PERI)]
for i,(n,h,quote,avoid,col) in enumerate(personas):
 yy=208+i*78
 box(M,yy,CW,72,col,12,shadow=3)
 text(n,M+13,yy+9,25,'BricolageBold');para(h,M+52,yy+8,CW-70,size=16.2,leading=18,font='BricolageBold',maxh=20)
 para(quote,M+52,yy+32,CW-70,size=13.2,leading=16,font='GeistBold',maxh=18)
 para(avoid,M+52,yy+51,CW-70,size=10.8,leading=13.5,maxh=15)
smallnote('Persona non è targeting: scegli una situazione e parla solo a quella.',600,YELLOW)

# ============================================================ 06 IL VIDEO
start('Il video','Fai pensare:\n“Voglio provarla”.',size=41)
para('Il tuo video ha <b>due vite</b>: inserzione e reel o TikTok organico. Gira quello che pubblicheresti sul tuo profilo.',M,172,size=14.5)
for n,h,b,y,col in [('1','Ferma lo scroll','Primi 3 secondi: una situazione precisa, un gesto, una domanda.',226,YELLOW),('2','Mostra il meccanismo','Giada in scena almeno un momento. Ingrandisci la chat: deve leggersi.',322,PERI),('3','Lascia un invito','Una CTA soft, una sola: “Provala gratuitamente dal link”.',418,PINK)]:
 row(n,h,b,y,col,88)
box(M,524,CW,102,NAVY,14,stroke=None)
text('Perché uno resta fino alla fine',M+15,538,19,'BricolageBold',PAPER)
tw=tag('SI RICONOSCE',M+15,592,PERI,size=9.6)
tag('VUOLE SAPERE COME FINISCE',M+23+tw,592,YELLOW,size=9.6)
tw2=tag('VUOLE TENERLO',M+15,620,PINK,size=9.6)
tag('RICONOSCE TE',M+23+tw2,620,TEAL,size=9.6)

# ============================================================ 07 ESEMPI 1
start('Esempi','Cosa abbiamo\ngià fatto.',key='esempi',size=39)
para('Sei video nostri, quattro qui e due dopo. Prendi un’idea di regia e portala altrove: <b>non cerco cloni.</b>',M,166,size=13.8)
cards=[('elena-1-0.jpg','ELENA 1  ·  61,5 S','Una domanda in mano','Fai coincidere le parole con un gesto visibile.'),
('elena-2-0.jpg','ELENA 2  ·  78,1 S','L’elenco tiene il filo','Il ritmo può stare nella struttura.'),
('maria-1-0.jpg','MARIA 1  ·  55,1 S','Un dubbio concreto','Mostra cosa succede dopo averle scritto.'),
('maria-2-1.jpg','MARIA 2  ·  55,9 S','Si vede la conversazione','Nascondi le altre conversazioni.')]
for i,(im,lab,hd,take) in enumerate(cards):
 x=M+(i%2)*201; y=206+(i//2)*198
 box(x,y,189,188,PAPER,13,shadow=3)
 image(im,x+8,y+8,173,92,cover=True,r=8)
 text(lab,x+10,y+106,8.8,'GeistBold')
 para(hd,x+10,y+119,169,size=15.4,leading=17,font='BricolageBold',maxh=35)
 para('<b>Da portare con te:</b> '+take,x+10,y+156,169,size=9.9,leading=12.6,maxh=28)
smallnote('Nella cartella materiali: elena 1 / elena 2 / maria 1 / maria 2 - 1080.mp4',598)

# ============================================================ 08 ESEMPI 2
start('Esempi','Altri due.\nAltra vita.',size=39)
para('Rosa porta la giornata dentro il video. Guarda il taglio, non il contenuto.',M,166,size=13.8)
for j,(im,lab,hd,desc,take) in enumerate([
('rosa-1-0.jpg','ROSA 1  ·  65,2 S','Una giornata raccontata','Allenamento, piatti, luoghi veri: Giada entra nella quotidianità.','Prendi la logica del vlog. Scegli un momento vicino a chi ti guarda.'),
('rosa-2-0.jpg','ROSA 2  ·  35,4 S','Poche scene, ben scelte','Colazione, luce, dettagli. Un racconto breve con un’estetica riconoscibile.','La chat deve leggersi. Trentacinque secondi bastano.')]):
 y=208+j*190
 box(M,y,CW,180,PAPER,14,shadow=3)
 image(im,M+9,y+9,95,162,cover=True,r=8)
 text(lab,M+117,y+14,9,'GeistBold')
 para(hd,M+117,y+30,256,size=19,leading=20,font='BricolageBold',maxh=43)
 para(desc,M+117,y+78,255,size=12.4,leading=16,maxh=50)
 para('<b>Da portare con te:</b> '+take,M+117,y+130,255,size=11.2,leading=14.4,maxh=36)
box(M,580,CW,48,YELLOW,8,stroke=None)
para('<b>Ispirazione, mai copia.</b> Alcuni di questi esempi mostrano chat di terzi, marchi o schermi illeggibili: oggi si evitano.<br/>Nella cartella materiali: rosa 1 / rosa 2 - 1080.mp4',M+11,586,CW-22,size=10.2,leading=12.4,maxh=38)

# ============================================================ 09 SCRIVI L'IDEA
start('Scrivi l’idea','Uno script\nche respira.',key='mestiere',size=42)
para('<b>Inizio, centro, fine.</b> In 30-90 secondi apri una tensione, fai arrivare la risposta e chiudi il cerchio. Scrivi in blocchi: per ogni frase decidi anche <b>cosa si vede</b>.',M,170,size=14.2)
for i,(n,lab,col) in enumerate([('01','Apri una tensione',YELLOW),('02','Fai arrivare la risposta',PERI),('03','Chiudi il cerchio',PINK)]):
 x=M+i*133;box(x,240,124,50,col,10,shadow=2)
 text(n,x+10,246,15,'BricolageBold');para(lab,x+10,264,104,size=10.6,leading=12.4,font='GeistBold',maxh=26)
script=[('HOOK','“Stasera ceno fuori. Il menù lo apro prima.”','Si vede: tavolo e menù.',YELLOW),('COSTRUZIONE','“Lo mando a Giada, l’assistente AI su Telegram.”','Si vede: il messaggio nella tua chat.',PERI),('PAYOFF','Mostra la risposta vera e cosa ti serve.','Si vede: la parte di chat che lo dimostra.',PINK),('CTA','“Puoi provarla gratuitamente dal link.”','Si vede: un invito breve e leggibile.',TEAL)]
for i,(lab,s,v,col) in enumerate(script):
 yy=308+i*70;box(M,yy,CW,62,col,11,shadow=2);text(lab,M+12,yy+9,9.6,'GeistBold');para(s,M+94,yy+8,282,size=13,leading=16,maxh=33);text(v,M+94,yy+42,10.3,'Geist')
box(M,588,CW,40,PAPER,10,sw=1.2)
para('<b>Prima di girare:</b> l’esempio è inventato, riscrivilo con la tua esperienza. E controlla: la risposta arriva troppo presto?',M+11,596,CW-22,size=11.6,leading=14.6,maxh=30)

# ============================================================ 10 IL PRIMO FOTOGRAMMA
start('Il primo fotogramma','Fermare lo scroll.\nSenza urlare.',size=39)
para('Forme da provare, non frasi da recitare. Una sola tensione per video: scrivine tre sulla carta e tieni quella che regge.',M,166,size=13.6)
hooks=[('Domanda sul piatto','“Cosa manca a questo pranzo?”','Cibo dall’alto, domanda in alto.'),
('Oggetto fuori posto','Un menù fra gli attrezzi della palestra.','Una piccola incongruenza apre la storia.'),
('Confronto di processo','Passi registrati / pasti ancora da raccontare.','Confronta abitudini, mai corpi o chili.'),
('Negazione','“Oggi niente conti a memoria.”','Mostra subito il gesto alternativo.'),
('Quiz','“Secondo te, cosa le ho chiesto?”','Un dettaglio da scoprire nella chat.'),
('Situazione riconoscibile','Frigo aperto. “E adesso?”','Entra in scena senza presentazioni.'),
('Parola gigante','“CENA?” sopra un’immagine vera.','Una parola forte, poi la dimostrazione.'),
('Metafora visiva','La lista delle cose da fare si allunga.','Una scena semplice rende visibile il carico.')]
for i,(h,ex,v) in enumerate(hooks):
 yy=212+i*50
 text(f'{i+1:02d}',M,yy,20,'BricolageBold');text(h,M+38,yy-1,15.4,'BricolageBold')
 para(ex,M+38,yy+18,352,size=12.1,leading=15,maxh=17);text(v,M+38,yy+33,9.7,'Geist',SOFT);line(M,yy+45,W-M,yy+45,width=.6)

# ============================================================ 11 FORMATO E MONTAGGIO
start('Formato e montaggio','Il tuo taglio.\nTre passate.',size=40)
para('Volto e voce, voice-over, mani, cibo, registrazione dello schermo: <b>il formato lo scegli tu.</b> Poi monta in tre giri.',M,170,size=14.2)
formats=[('Chat protagonista',PERI),('Problema → soluzione',YELLOW),('Titolo da notizia',PINK),('Risposta a un commento',TEAL),('Esperienza personale',PINK),('Giornata / backstage',PERI)]
for i,(h,col) in enumerate(formats):
 x=M+(i%2)*198; yy=222+(i//2)*38
 box(x,yy,13,13,col,3);text(h,x+22,yy-1,12.6,'GeistBold')
line(M,320,W-M,320,width=.7)
for i,(n,h,b,col) in enumerate([('01','Pulisci','Taglia partenze sbagliate e silenzi. Parti dal materiale che si può usare.',PAPER),('02','Tieni il punto','Se ti annoi guardandolo, accorcia proprio lì. Niente spazio morto.',YELLOW),('03','Dai enfasi','Un piccolo zoom, una chat in sovrimpressione. Gli effetti devono chiarire.',PERI)]):
 row(n,h,b,336+i*88,col,84)
smallnote('Il ritmo è un motivo per restare. Nient’altro.',600,TEAL)

# ============================================================ 12 AUDIO E SOTTOTITOLI
start('Audio e sottotitoli','Si deve sentire.\nSi deve leggere.',size=39)
icon('mic',M,176,40,TEAL);para('<b>L’audio conta più del video.</b><br/>Registra vicino al microfono, in una stanza senza rimbombo. Riascolta: voce chiara, niente rumori sopra.',86,172,334,size=13.8,leading=18,maxh=91)
box(M,272,CW,96,YELLOW,12,shadow=3)
text('Musica: solo free e usabile in ads.',M+13,286,17,'BricolageBold')
para('Niente audio trending preso dai social. La licenza deve coprire pubblicità e tutti i canali. Nel dubbio, solo la tua voce.',M+13,314,CW-26,size=12.7,leading=17,maxh=45)
text('Sottotitoli obbligatori. Stile libero.',M,390,22,'BricolageBold')
text('DUE MODI CHE FUNZIONANO. LO STILE È TUO.',M,420,8.8,'GeistBold',SOFT)
box(M,438,184,64,NAVY,10,stroke=None);text('LA TUA',M+13,453,19,'BricolageBold',PAPER);box(M+91,449,76,28,TEAL,4,stroke=None);text('CHAT',M+98,454,18,'BricolageBold')
box(235,438,185,64,NAVY,10,stroke=None);text('La tua',248,456,18,'Geist',PAPER);text('chat',308,456,18,'Geist',PINK)
text('MAIUSCOLO + BOX',M,514,10,'GeistBold');para('Più contrasto, più leggibilità.',M,531,184,size=12.6)
text('PAROLA ACCENTATA',235,514,10,'GeistBold');para('Leggero: controlla il contrasto.',235,531,185,size=12.6)
para('<b>Prova in muto sul telefono.</b> Tieni le parole lontane dal fondo e dai pulsanti laterali dei social.',M,572,size=12.2,leading=16,maxh=35)

# ============================================================ 13 LE REGOLE TECNICHE
start('Le regole tecniche','La scheda\nda tenere a vista.',key='regole',size=40)
box(M,174,188,90,TEAL,12,shadow=4);text('9:16',M+17,187,42,'BricolageBold');text('VERTICALE',M+18,239,10,'GeistBold')
box(232,174,188,90,YELLOW,12,shadow=4);text('30-90',249,189,36,'BricolageBold');text('SECONDI',250,239,10,'GeistBold')
items=[('Lingua','Italiano.'),('Strumenti','Qualsiasi, per ripresa e montaggio.'),('Audio','Perfetto. Prima di tutto, la voce.'),('Sottotitoli','Obbligatori, stile libero.'),('Giada','Almeno un momento, con chat leggibile.'),('File','Finito, senza watermark o loghi di editing.'),('Invio','Drive o WeTransfer. Niente girato grezzo.'),('Tempi','7-10 giorni dalla call.'),('Revisione','Massimo una; se funziona, nessuna.')]
for i,(h,b) in enumerate(items):
 yy=292+i*33;line(M,yy+28,W-M,yy+28,width=.6);text(h,M,yy+4,13.2,'GeistBold');text(b,M+108,yy+4,12.3,'Geist')
smallnote('Prima collaborazione: un video. Eventuali extra si concordano in call.',600,PERI)

# ============================================================ 14 COSA NON SI PUÒ DIRE
start('Cosa non si può dire','Creatività sì.\nPromesse magiche no.',size=37)
rules=[('Niente promesse di chili, taglie o percentuali.','Nessun risultato sul corpo garantito. Puoi mostrare numeri di processo reali.'),
('Niente primi piani su una parte del corpo.','Non pizzicare grasso, non usare il corpo come problema da correggere.'),
('Niente frasi che attaccano l’aspetto.','Anche il tuo. “Ero uno schifo” non va: nessuno deve sentirsi inferiore.'),
('Non dire “sei sola”.','Non sfruttare solitudine o vulnerabilità. Mostra che Giada risponde.'),
('Dichiara: “assistente AI su Telegram”.','In ogni contenuto. La relazione è amichevole, la natura del prodotto chiara.'),
('Non presentare Giada come nutrizionista.','Non è un medico, non fa diagnosi, non cura. Nessuna condizione clinica nel video.')]
for i,(h,b) in enumerate(rules):
 yy=170+i*72
 text('×',M,yy+1,23,'BricolageBold');para(h,M+28,yy,362,size=14.2,leading=17.5,font='GeistBold',maxh=36);para(b,M+28,yy+35,362,size=11.7,leading=14.6,maxh=30);line(M,yy+67,W-M,yy+67,width=.6)
smallnote('Resta dentro ciò che hai provato e che puoi mostrare nella tua chat.',604,YELLOW)

# ============================================================ 15 COSA NON SI MOSTRA
start('Cosa non si mostra','Un ultimo sguardo\nprima di esportare.',size=38)
y=170
for n,h,b,col in [('01','Solo la chat con Giada','Non mostrare la lista chat di Telegram, nomi, notifiche o dati di altre persone.',PERI),
('02','Nessun altro marchio in campo','Controlla vestiti, confezioni e sfondo. Niente watermark delle app di editing.',PINK),
('03','Niente minori','Se compare un altro adulto serve il suo consenso, e te ne assumi la responsabilità.',YELLOW),
('04','Niente audio trending','Prendilo da una libreria free con licenza valida per la pubblicità.',PERI)]:
 row(n,h,b,y,col,98);y+=105
para('<b>E ricorda l’ordine:</b> prima l’idea, poi l’approvazione e la call. Solo dopo si gira.',M,594,size=11.8,leading=15,maxh=31)

# ============================================================ 16 COME SI VA AVANTI
start('Come si va avanti','La tua idea\narriva qui.',key='percorso',size=42)
text(MAIL,M,166,26,'BricolageBold');linkrect(M,158,CW,41,'mailto:'+MAIL)
para('Mandami <b>script e indicazioni visive</b> in un documento, oppure un <b>video-selfie su Drive</b>. Dimmi persona, scena, apertura e cosa mostrerai di Giada. <b>Nessuna scadenza.</b>',M,212,size=14.3)
steps=[('01','Entro 72 ore dall’idea','Ti rispondo con un riscontro, eventuali modifiche o una proposta di call breve.'),('02','Idea approvata? Facciamo una call.','Allineiamo taglio, compenso e dettagli. Se passi questo step, estendo Giada di altri 14 giorni.'),('03','Ora si gira. Poi si consegna.','Video finito entro 7-10 giorni dalla call, via Drive o WeTransfer. Massimo una revisione.')]
for i,(n,h,b) in enumerate(steps):
 yy=300+i*88;text(n,M,yy,24,'BricolageBold');para(h,M+44,yy,346,size=16.7,leading=20,font='BricolageBold',maxh=40);para(b,M+44,yy+29,346,size=12.5,leading=16.5,maxh=50)
box(M,570,CW,46,YELLOW,10,shadow=3);para('<b>Non girare prima dell’ok e della call.</b><br/>Un video mai richiesto non entra nel compenso.',M+12,580,CW-24,size=11.5,leading=14,maxh=30)

# ============================================================ 17 I SOLDI
start('I soldi','Partiamo da qui.\nPoi ne parliamo.',key='compenso',size=41)
box(M,176,CW,115,TEAL,17,shadow=5);text('da',M+20,196,20,'GeistBold');text('50€',M+63,184,74,'BricolageBold');para('per ogni video\nselezionato',271,205,126,size=17.5,leading=22,font='BricolageBold');text('È UN PAVIMENTO, NON UN TETTO.',M+20,268,10.6,'GeistBold')
para('<b>L’uso è incluso:</b> campagne Giada e nostri canali, <b>senza limite di tempo</b>. Nessuna esclusiva: puoi lavorare con chi vuoi.',M,314,size=14.5)
text('Cosa può far salire la cifra',M,388,24,'BricolageBold')
para('Hook aggiuntivi, pacchetti di video, collaborazione mensile, inserzioni dal tuo profilo (whitelisting), oppure accordi sulla performance se hai risultati da mostrare.',M,424,size=14.1)
box(M,508,CW,92,PERI,13,shadow=3)
para('<b>Si concorda in call, prima di girare.</b><br/>Due hook = due video finiti, con visivi diversi. Fattura o ritenuta d’acconto: ne parliamo lì.',M+14,520,CW-28,size=13.2,leading=17.4,maxh=72)

# ============================================================ 18 ULTIMO CHECK + CHIUSURA
start('Ora tocca a te','Ultimo check.\nPoi tocca a te.',key='fine',size=40)
checks2=['La scena parla a una persona precisa.','Apertura e finale si tengono insieme.','Giada si vede e la chat si legge.','Dico “assistente AI su Telegram”.','Audio chiaro, sottotitoli leggibili.','Nessun divieto saltato.']
for i,s in enumerate(checks2):
 yy=166+i*31;icon('check',M,yy,24,[YELLOW,PERI,PINK,TEAL,PERI,PINK][i]);para(s,M+36,yy+3,354,size=13.4,leading=17,maxh=24)
button('Apri la prova creator',M,362,235,TRIAL)
box(M,420,CW,62,TEAL,13,shadow=5)
mail_size=min(30,352/pdfmetrics.stringWidth(MAIL,'BricolageBold',1))
text(MAIL,M+14,438,mail_size,'BricolageBold');linkrect(M,420,CW,62,'mailto:'+MAIL)
image('giada-director.png',272,486,148)
para('Provala per una settimana.\nQuando ti viene in mente\nla cosa che racconteresti,\nscrivimi.',M,498,size=15.4,leading=20)
tag('CI VEDIAMO NELLA TUA IDEA.',M,614,YELLOW,angle=-2,size=10)

C.save()
(OUT/'source/layout-checks.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2))
(OUT/'source/copy.txt').write_text('\n\n'.join(f'[{p:02d}] {s}' for p,s in alltext))
print(f'Created {page} pages; layout warnings: {len(checks)}')
for x in checks:print(x)
