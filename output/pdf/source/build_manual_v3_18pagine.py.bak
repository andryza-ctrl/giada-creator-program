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
TRIAL='https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d'
MAIL='andrea@vivariumai.co'
COVER='giada-selfie-scene.png' if (A/'giada-selfie-scene.png').exists() else 'giada-welcome-scene.png'
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
 if maxh is not None and ah>maxh+0.1:checks.append({'page':page,'problem':'text exceeds box','height':round(ah,1),'limit':maxh,'text':s[:70]})
 if y+ah>629:checks.append({'page':page,'problem':'footer intrusion','bottom':round(y+ah,1),'text':s[:70]})
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

def checkbox(x,y,s=22,fill=YELLOW):
 box(x,y,s,s,fill,r=6,sw=1.4)
 C.setStrokeColor(color(NAVY));C.setLineWidth(2.3);C.setLineCap(1)
 line(x+5.5,y+s*.55,x+s*.42,y+s*.74,width=2.3);line(x+s*.42,y+s*.74,x+s-5,y+s*.28,width=2.3)
 C.setLineCap(0)

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

def lead(s,y,size=14.5,w=CW,x=M):
 return para(s,x,y,w,size=size,leading=size*1.36)

def smallnote(s,y=600,fill=PERI):
 style=ParagraphStyle('sn',fontName='Geist',fontSize=10.6,leading=12.6)
 _,ah=Paragraph(s.replace('\n','<br/>'),style).wrap(CW-22,2000)
 h=ah+16
 box(M,y,CW,h,fill,7,stroke=None);para(s,M+11,y+8,CW-22,size=10.6,leading=12.6,maxh=ah+.5)

def row(n,head,body,y,fill=PERI,h=92):
 box(M,y,CW,h,fill,12,shadow=3)
 text(n,M+15,y+15,26,'BricolageBold');text(head,M+57,y+15,18,'BricolageBold')
 para(body,M+57,y+41,CW-73,size=13.4,leading=17.5,maxh=h-49)

# ============================================================ 01 COPERTINA
start('Giada Creator Program',key='cover')
text('giada',30,26,25,'BricolageBold');text('CREATORS',102,36,10,'GeistBold')
tag('TUTTO PARTE DA UN’IDEA TUA',214,28,PERI,angle=-3,size=9.2)
title('Facciamo un\nvideo insieme.',y=88,size=57)
text('La tua giornata, le tue parole, e Giada che risponde.',32,222,14.1,'Geist')
box(31,258,388,342,PERI,r=22,shadow=6)
image(COVER,158,268,232,322,cover=True,r=15)
dots(42,432,100,158,step=8)
bubble('Ciao! Sono Giada.\nCom’è andata oggi?',44,300,190,96,PAPER,17)
star(103,489,47,YELLOW);text('CIAO!',70,477,23,'BricolageBold')
tag('PROVA. GIOCA. RACCONTA.',52,556,TEAL,angle=4,size=10.4)
C.linkRect('','indice',(30,0,420,655),relative=0,thickness=0)

# ============================================================ 02 CIAO
y=start('Ciao','Ciao, sono Andrea.',key='indice',size=40)
y=lead('In Vivarium mi occupo di marketing e contenuti. <b>Giada</b> la conosci fra due pagine: vive su Telegram e risponde davvero. Questo programma nasce da una cosa semplice: i video migliori li fa chi la usa e ha qualcosa da dire.',y+22,15.2)
y=lead('<b>Non è un contest e non è UGC a cottimo.</b> Un video alla volta, con calma. Io ti porto obiettivi, riferimenti e i pochi limiti che abbiamo; l’idea, le parole e il taglio restano tuoi.',y+16,15.2)
y=lead('Le idee le leggo io, una per una. Qui dentro c’è quello che darei a me stesso per cominciare.',y+16,15.2)
my=max(y+28,364)
text('La tua mappa',M,my,25,'BricolageBold');text('TOCCA UNA TAPPA',294,my+11,9,'GeistBold')
for i,(lab,pg,dest) in enumerate([('Conosci e prova Giada','03','giada'),('Trova la tua storia','05','personas'),('Esempi e come si gira','06','esempi'),('Regole e consegna','13','regole')]):
 yy=my+40+i*39
 if i<3: line(M,yy+31,W-M,yy+31,width=.7);text(lab,M,yy+5,14,'GeistBold');text(pg,W-M-40,yy+4,15,'BricolageBold');arrow(W-M-15,yy+13,W-M,yy+13,width=1.6)
 C.linkRect('',dest,(M,H-yy-33,W-M,H-yy),relative=0,thickness=0)
tag('18 PAGINE. DIECI MINUTI.',M,606,YELLOW,angle=-2,size=10)

# ============================================================ 03 CONOSCI GIADA
y=start('Conosci Giada','Un’amica in chat.\nSempre a un messaggio\ndi distanza.',key='giada',size=31)
lead('Vive su <b>Telegram</b>. Le scrivi, le mandi la foto del piatto o un vocale mentre cammini. Le puoi raccontare anche acqua, movimento, sonno e peso: quello che le dici, se lo tiene.',y+26,14.5)
features=[('Capire il pasto','Le mandi la foto e ti dice cosa c’è dentro: calorie, macro e se va d’accordo con i tuoi obiettivi.'),
('Decidere cosa mangiare','«Ho questo in frigo, che faccio?» Lei tira fuori un’idea, non una lezione di cucina.'),
('Ricordarsi di te','Non riparte da zero ogni volta: sa com’è andata la settimana e ti aiuta a riprendere dopo uno sgarro, senza prediche.'),
('Uscire senza pensieri','Al ristorante le mandi il menù e sceglie con te. E se ti muovi, tiene il conto anche di quello.')]
y=266
for i,(h,b) in enumerate(features):
 icon(['chat','?','check','play'][i],M,y+4,34,[PERI,PINK,YELLOW,TEAL][i]);text(h,78,y,18,'BricolageBold');para(b,78,y+26,342,size=13.3,leading=17.2,maxh=58);y+=88

# ============================================================ 04 PROVA GIADA
y=start('Prova Giada','Prima la chat.\nPoi la scintilla.',bg=PERI,key='trial',size=41)
lead('Nei tuoi <b>14 giorni di prova</b> usala davvero: niente compiti da consegnare, scrivile come scriveresti a un’amica. La tua chat vera è il materiale del video.',y+20,14.3)
text('Quattro modi per rompere il ghiaccio',M,242,19,'BricolageBold')
for i,(s,col) in enumerate([('«Cosa preparo con quello che ho in frigo?»',PAPER),('«Stasera mangio qui: mi dai un’idea dal menù?»',YELLOW),('«Oggi è andata così. Come riprendo il filo?»',PAPER),('Una foto del piatto, senza scrivere niente.',TEAL)]):
 yy=274+i*56;box(M,yy,CW,46,col,13,shadow=3);para(s,M+15,yy+12,CW-34,size=13.6,leading=16,maxh=26)
button('Inizia i tuoi 14 giorni',M,510,266,TRIAL)
q=qr.QrCodeWidget(TRIAL);b=q.getBounds();d=Drawing(84,84,transform=[84/(b[2]-b[0]),0,0,84/(b[3]-b[1]),0,0]);d.add(q)
box(320,496,96,87,PAPER,7,stroke=None);renderPDF.draw(d,C,326,H-496-84);linkrect(320,496,96,87,TRIAL)
text('Tocca il bottone o inquadra il QR.',M,566,10.8,'Geist')
text(TRIAL,M,588,7.1,'Geist',DARKTEAL)
smallnote('Prenditi i primi due giorni per giocarci: le idee arrivano da lì.',596,PAPER)

# ============================================================ 05 A CHI PARLI
y=start('A chi parli','A chi stai parlando?\nScegline una sola.',key='personas',size=38)
lead('Queste sono le persone che scrivono a Giada ogni giorno. Non sono caselle: servono a darti un volto preciso in testa mentre scrivi.',y+18,13.8)
personas=[('01','La testa già piena','«Non ho voglia di pensarci anche a questo.»','Le arrivi se le mostri che bastano dieci secondi e una foto.',PINK),
('02','Il piano c’è, la costanza no','«So cosa fare. Il difficile è farlo ogni giorno.»','Le arrivi se fai vedere una giornata storta che si raddrizza.',PERI),
('03','Vuole una risposta, non una lezione','«Chiedo una cosa e mi ritrovo un trattato.»','Le arrivi se mostri Giada che risponde corta e chiara.',YELLOW),
('04','I passi sì, il pranzo no','«Misuro tutto, tranne quello che mangio.»','Le arrivi se colleghi il movimento a quello che c’è nel piatto.',TEAL),
('05','Il solito «da lunedì»','«Non voglio ricominciare da capo un’altra volta.»','Le arrivi se il tuo video non parte da una colpa.',PERI)]
for i,(n,h,quote,hint,col) in enumerate(personas):
 yy=212+i*76
 box(M,yy,CW,72,col,12,shadow=3)
 text(n,M+13,yy+9,25,'BricolageBold');para(h,M+52,yy+8,CW-70,size=16.2,leading=18,font='BricolageBold',maxh=20)
 para(quote,M+52,yy+32,CW-70,size=13.2,leading=16,font='GeistBold',maxh=18)
 para(hint,M+52,yy+51,CW-70,size=10.8,leading=13.5,maxh=15)
smallnote('Sono spunti, non recinti: scegli quella che conosci meglio e parla solo a lei.',594,YELLOW)

# ============================================================ 06 ESEMPI 1
y=start('Esempi','Cosa abbiamo\ngià fatto.',key='esempi',size=39)
lead('Sei video girati con altre creator. Non devi rifarli: guardali per capire <b>cosa ha funzionato</b> e prendi l’idea che ti serve.',y+18,13.8)
cards=[('rosa-2-0.jpg','ROSA 2  ·  35,4 S','Poche scene, tanta luce','in trenta secondi si capisce tutto: colazione e chat grande.'),
('elena-2-0.jpg','ELENA 2  ·  78,1 S','Un elenco che tiene incollati','dice cosa farà e poi lo fa: sai sempre cosa sta per succedere.'),
('maria-1-0.jpg','MARIA 1  ·  55,1 S','Un dubbio vero, detto a voce','la domanda se la fanno tutti, e la risposta arriva in scena.'),
('maria-2-1.jpg','MARIA 2  ·  55,9 S','Si legge la conversazione','la chat riempie lo schermo: Giada si capisce senza spiegarla.')]
for i,(im,lab,hd,take) in enumerate(cards):
 x=M+(i%2)*201; y=200+(i//2)*200
 box(x,y,189,194,PAPER,13,shadow=3)
 image(im,x+8,y+8,173,90,cover=True,r=8)
 text(lab,x+10,y+104,8.8,'GeistBold')
 para(hd,x+10,y+117,169,size=14.6,leading=16.4,font='BricolageBold',maxh=34)
 para('<b>Ha funzionato perché</b> '+take,x+10,y+154,169,size=9.6,leading=12,maxh=38)
smallnote('Ispirazione, mai copia: prendi l’idea, non le stesse inquadrature.',602,YELLOW)

# ============================================================ 07 ESEMPI 2
y=start('Esempi','Altri due,\ngirati in modo\ndiverso.',size=33)
lead('Rosa porta la giornata dentro il video.',y+18,13.8)
for j,(im,lab,hd,desc,take) in enumerate([
('rosa-1-0.jpg','ROSA 1  ·  65,2 S','Una giornata raccontata','Allenamento, piatti, luoghi veri: Giada entra nella quotidianità senza essere annunciata.','la logica del vlog: scegli un momento vicino a chi ti guarda e falla entrare lì.'),
('elena-1-0.jpg','ELENA 1  ·  61,5 S','Una domanda in mano','Tiene il telefono con la domanda in vista e la legge ad alta voce, mentre cammina.','il gesto e le parole dicono la stessa cosa: si capisce anche senza audio.')]):
 y=210+j*192
 box(M,y,CW,182,PAPER,14,shadow=3)
 image(im,M+9,y+9,95,164,cover=True,r=8)
 text(lab,M+117,y+14,9,'GeistBold')
 para(hd,M+117,y+30,256,size=19,leading=20,font='BricolageBold',maxh=43)
 para(desc,M+117,y+78,255,size=12.4,leading=16,maxh=50)
 para('<b>Ha funzionato:</b> '+take,M+117,y+130,255,size=11.2,leading=14.4,maxh=40)
smallnote('Anche qui: ispirazione, mai copia. Il taglio è tuo.',600,YELLOW)

# ============================================================ 08 COSA DEVE FARE IL VIDEO
y=start('Scrivi l’idea','Cosa deve fare\nil tuo video.',size=41)
lead('Prima esce sul <b>tuo profilo</b>, come reel o TikTok. Se funziona, lo portiamo anche in campagna. Quindi gira quello che pubblicheresti comunque.',y+20,14.3)
for n,h,b,yy,col in [('1','Ferma lo scroll','Primi tre secondi: una situazione precisa, un gesto, una domanda.',240,YELLOW),('2','Fai vedere Giada','Falla entrare almeno una volta. Ingrandisci la chat: chi guarda deve poterla leggere.',330,PERI),('3','Lascia un invito','Uno solo, detto con calma: «Provala gratis dal link».',420,PINK)]:
 row(n,h,b,yy,col,84)
box(M,514,CW,112,NAVY,14,stroke=None)
text('Perché uno resta fino alla fine',M+15,528,19,'BricolageBold',PAPER)
tw=tag('SI RICONOSCE',M+15,582,PERI,size=9.6)
tag('VUOLE SAPERE COM’È FINITA',M+23+tw,582,YELLOW,size=9.6)
tw2=tag('SE LO SALVA',M+15,612,PINK,size=9.6)
tag('PIACE COME LO RACCONTI TU',M+23+tw2,612,TEAL,size=9.6)

# ============================================================ 09 SCRIVI L'IDEA
y=start('Scrivi l’idea','Uno script\nche respira.',key='mestiere',size=42)
lead('<b>Inizio, centro, fine.</b> In 30-90 secondi apri una domanda, fai arrivare la risposta e chiudi il cerchio. Scrivi a blocchi: per ogni frase scegli anche <b>cosa si vede</b>.',y+18,14)
for i,(n,lab,col) in enumerate([('01','Apri una domanda',YELLOW),('02','Fai arrivare la risposta',PERI),('03','Chiudi il cerchio',PINK)]):
 x=M+i*133;box(x,238,124,52,col,10,shadow=2)
 text(n,x+10,244,15,'BricolageBold');para(lab,x+10,261,104,size=10.6,leading=12.4,font='GeistBold',maxh=26)
script=[('HOOK','«Stasera ceno fuori: il menù lo apro prima.»','«Frigo mezzo vuoto e zero idee.»',YELLOW),
('COSTRUZIONE','«Mando il menù a Giada e le chiedo cosa prendo.»','«Le mando la foto di quello che c’è dentro.»',PERI),
('PAYOFF','Leggi ad alta voce la sua risposta sul menù.','Fai la ricetta che ti ha tirato fuori.',PINK),
('CTA','«La provi gratis dal link.»','«Se ti va, provala anche tu.»',TEAL)]
for i,(lab,a,b) in enumerate([(s[0],s[1],s[2]) for s in script]):
 col=script[i][3]
 yy=302+i*74;box(M,yy,CW,66,col,11,shadow=2)
 text(lab,M+12,yy+9,9.6,'GeistBold')
 text('A',M+12,yy+27,11,'BricolageBold');text('B',M+12,yy+45,11,'BricolageBold')
 para(a,M+34,yy+25,336,size=12.4,leading=15,maxh=17)
 para(b,M+34,yy+43,336,size=12.4,leading=15,maxh=17)
box(M,596,CW,28,PAPER,10,sw=1.2)
para('<b>Due strade, non due modelli.</b> La terza, la tua, è la migliore.',M+11,603,CW-22,size=11.4,leading=14,maxh=16)

# ============================================================ 10 IL PRIMO FOTOGRAMMA
y=start('Il primo fotogramma','Fermare lo scroll.\nSenza urlare.',size=39)
lead('Otto forme che funzionano. Una sola per video: scrivine tre su un foglio e tieni quella che regge.',y+16,13.6)
hooks=[('La domanda sul piatto','Inquadri il pranzo dall’alto: «Secondo te cosa manca?»','Chi guarda risponde nella testa, e resta.'),
('L’oggetto fuori posto','Il menù di un ristorante appoggiato tra i pesi in palestra.','Una cosa che non c’entra incuriosisce e apre la storia.'),
('Due cose a confronto','Da una parte i passi contati, dall’altra i pasti mai raccontati.','Il confronto è tra abitudini, mai tra corpi.'),
('La negazione','«Oggi non conto niente a mente.»','Dire cosa non farai incuriosisce: poi mostri subito il gesto al posto suo.'),
('Il quiz','«Secondo te cosa le ho chiesto?», e si vede solo la risposta.','Chi guarda vuole scoprire la domanda.'),
('La scena che conosci','Frigo aperto, sguardo dentro: «E adesso?»','Nessuna presentazione: si riconosce da sola.'),
('La parola gigante','«CENA?» scritto grande sopra una scena vera.','Una parola sola tiene lo sguardo, poi arriva la prova.'),
('L’immagine che spiega','La lista delle cose da fare che si allunga da sola.','Rende visibile un peso che di solito si racconta a parole.')]
for i,(h,ex,why) in enumerate(hooks):
 yy=216+i*50
 text(f'{i+1:02d}',M,yy,20,'BricolageBold');text(h,M+38,yy-1,15.4,'BricolageBold')
 para(ex,M+38,yy+18,352,size=11.6,leading=14,maxh=16);para(why,M+38,yy+32,352,size=9.7,leading=12,c=SOFT,maxh=13);line(M,yy+45,W-M,yy+45,width=.6)

# ============================================================ 11 FORMATO E MONTAGGIO
y=start('Formato e montaggio','Il tuo taglio.\nTre passate.',size=40)
lead('Volto e voce, voice-over, mani, cibo, schermo registrato: <b>il formato lo scegli tu.</b>',y+18,14)
formats=[('Chat protagonista',PERI),('Problema, poi soluzione',YELLOW),('Titolo da notizia',PINK),('Risposta a un commento',TEAL),('Esperienza personale',PINK),('Giornata / backstage',PERI)]
for i,(h,col) in enumerate(formats):
 x=M+(i%2)*198; yy=220+(i//2)*38
 box(x,yy,13,13,col,3);text(h,x+22,yy-1,12.6,'GeistBold')
line(M,318,W-M,318,width=.7)
for i,(n,h,b,col) in enumerate([('01','Niente vuoti','Dove non parli, di solito non serve: lascia respirare la voce e taglia il resto.',PAPER),
('02','Fidati della noia','Se ti annoi mentre lo riguardi, quel pezzo lo sente anche chi guarda: accorcia lì.',YELLOW),
('03','Cambia ogni 3-5 secondi','Uno zoom, un cambio di inquadratura, la chat che compare: sono questi a tenere su lo sguardo.',PERI)]):
 row(n,h,b,332+i*90,col,86)
smallnote('Riguardalo una volta col telefono in mano, come lo guarderebbe lei.',604,TEAL)

# ============================================================ 12 AUDIO E SOTTOTITOLI
y=start('Audio e sottotitoli','Prima si sente.\nPoi si legge.',size=39)
icon('mic',M,y+22,40,TEAL)
para('<b>L’audio conta più dell’immagine.</b><br/>Registra vicino al microfono, in una stanza che non rimbomba, e riascoltati prima di montare: se la voce è pulita, il resto si perdona.',86,y+18,334,size=13.8,leading=18,maxh=95)
box(M,272,CW,102,YELLOW,12,shadow=3)
text('La musica, libera davvero',M+13,286,17,'BricolageBold')
para('Meglio evitare gli audio di tendenza presi dai social: la licenza deve coprire anche la pubblicità e tutti i canali. Una libreria free va benissimo.',M+13,314,CW-26,size=12.7,leading=16.5,maxh=54)
text('Sottotitoli sempre. Lo stile è tuo.',M,392,21,'BricolageBold')
para('L’unica cosa che ti chiediamo: <b>due o tre parole per volta</b>, anche una sola. Servono a dare ritmo, non a trascrivere. Font, colore e animazione li scegli tu.',M,424,CW,size=12.8,leading=16.5,maxh=52)
for i,(s,col,c) in enumerate([('LA TUA',NAVY,PAPER),('CHAT',TEAL,NAVY),('SI LEGGE',NAVY,PAPER)]):
 x=M+i*132;box(x,486,120,50,col,9,stroke=None)
 sz=min(23,104/pdfmetrics.stringWidth(s,'BricolageBold',1))
 text(s,x+12,504,sz,'BricolageBold',c)
text('TRE BATTUTE, TRE RESPIRI: È QUELLO CHE TIENE IL RITMO.',M,552,9,'GeistBold',SOFT)
smallnote('Se il tuo montaggio le fa apparire una parola per volta, ancora meglio.',596,PERI)

# ============================================================ 13 LE REGOLE TECNICHE
y=start('Le regole tecniche','La scheda\nda tenere a vista.',key='regole',size=40)
box(M,178,188,88,TEAL,12,shadow=4);text('9:16',M+17,190,42,'BricolageBold');text('VERTICALE',M+18,240,10,'GeistBold')
box(232,178,188,88,YELLOW,12,shadow=4);text('30-90',249,192,36,'BricolageBold');text('SECONDI',250,240,10,'GeistBold')
items=[('Lingua','Italiano, il tuo.'),('Strumenti','Quelli che usi già, per girare e montare.'),('Audio','La voce prima di tutto.'),('Sottotitoli','Sempre, con lo stile che preferisci.'),('Giada','Almeno un momento, con la chat leggibile.'),('File','Finito, senza watermark dell’app di montaggio.'),('Invio','Drive o WeTransfer. Il grezzo tienilo tu.'),('Tempi','7-10 giorni dalla call, senza corse.'),('Revisione','Al massimo una. Se funziona, nessuna.')]
for i,(h,b) in enumerate(items):
 yy=292+i*33;line(M,yy+28,W-M,yy+28,width=.6);text(h,M,yy+4,13.2,'GeistBold');text(b,M+108,yy+4,12.3,'Geist')
smallnote('La prima volta è un video solo. Il resto lo decidiamo insieme.',598,PERI)

# ============================================================ 14 COSA NON SI PUÒ DIRE
y=start('Cosa non si può dire','Creatività sì.\nPromesse magiche no.',size=37)
rules=[('Niente chili, taglie o percentuali.','Non promettiamo risultati sul corpo. I numeri veri del percorso, quelli sì: giorni, pasti raccontati, abitudini.'),
('Niente primi piani su una parte del corpo.','Non pizzicare il grasso, non usare il corpo come il problema da correggere.'),
('Nessuno deve sentirsi sbagliato.','Vale anche per te: «ero uno schifo» non ci va, nemmeno detto ridendo.'),
('Mai «sei sola».','La solitudine non si usa come leva. Fai vedere che Giada risponde: basta quello.'),
('Si capisce che Giada è un’AI.','Dillo con le tue parole, dove ti viene meglio: chi guarda deve capire che è un’AI su Telegram, non una persona in carne e ossa.'),
('Giada non è un medico né una nutrizionista.','Non fa diagnosi, non cura, non scrive diete, e le sue stime sono indicative. Niente condizioni cliniche nel video.')]
for i,(h,b) in enumerate(rules):
 yy=168+i*72
 text('×',M,yy+1,23,'BricolageBold');para(h,M+28,yy,362,size=14,leading=17.5,font='GeistBold',maxh=36);para(b,M+28,yy+34,362,size=11.5,leading=14.2,maxh=32);line(M,yy+67,W-M,yy+67,width=.6)
smallnote('Il resto è tuo: racconta quello che hai provato davvero.',600,YELLOW)

# ============================================================ 15 COSA NON SI MOSTRA
y=start('Cosa non si mostra','Un ultimo sguardo\nprima di esportare.',size=38)
y=170
for n,h,b,col in [('01','Solo la chat con Giada','Prima di registrare lo schermo dai un’occhiata: niente lista chat, nomi o notifiche di altri.',PERI),
('02','Nessun altro marchio in campo','Maglietta, confezioni, sfondo. E niente watermark delle app di montaggio.',PINK),
('03','Niente minori','Se nel video c’è un altro adulto serve il suo ok, e te ne prendi la responsabilità.',YELLOW),
('04','Niente audio dei trend','Prendi la musica da una libreria libera, con licenza valida anche per la pubblicità.',PERI)]:
 row(n,h,b,y,col,98);y+=105
para('<b>E l’ordine, che aiuta tutti:</b> prima l’idea, poi ci sentiamo, poi si gira.',M,594,size=11.8,leading=15,maxh=31)

# ============================================================ 16 COME SI VA AVANTI
y=start('Come si va avanti','La tua idea\narriva qui.',key='percorso',size=42)
box(M,168,CW,52,TEAL,13,shadow=4)
msz=min(30,354/pdfmetrics.stringWidth(MAIL,'BricolageBold',1))
text(MAIL,M+16,182,msz,'BricolageBold');linkrect(M,168,CW,52,'mailto:'+MAIL)
lead('Mandami <b>lo script e due indicazioni visive</b> in un documento, oppure un <b>video-selfie</b>: dimmi a chi parli, che scena hai in testa, come apri e cosa si vede di Giada. Con calma, non c’è una scadenza.',238,14.3)
steps=[('01','Ti rispondo entro 72 ore','Un riscontro vero: cosa mi piace, cosa cambierei, e se serve ci facciamo una call breve.'),
('02','Se l’idea ci piace, ci parliamo','Mezz’ora per allineare taglio, compenso e dettagli. Poi hai mano libera.'),
('03','Giri, e poi mi mandi il video','Finito entro 7-10 giorni dalla call, via Drive o WeTransfer. Al massimo una revisione.')]
for i,(n,h,b) in enumerate(steps):
 yy=328+i*98;text(n,M,yy,24,'BricolageBold');para(h,M+44,yy,346,size=16.7,leading=20,font='BricolageBold',maxh=40);para(b,M+44,yy+29,346,size=12.5,leading=16.5,maxh=52)

# ============================================================ 17 IL COMPENSO
y=start('Il compenso','Facciamo i conti\ninsieme.',key='compenso',size=41)
box(M,178,CW,118,TEAL,17,shadow=5);text('da',M+20,198,20,'GeistBold');text('50€',M+63,186,74,'BricolageBold');para('per ogni video\nselezionato',271,207,126,size=17.5,leading=22,font='BricolageBold');text('È UN PAVIMENTO, NON UN TETTO.',M+20,272,10.6,'GeistBold')
lead('<b>Nessuna esclusiva:</b> continui a lavorare con chi vuoi, prima e dopo.',320,14.5)
text('Cosa può far salire la cifra',M,392,24,'BricolageBold')
lead('Un hook in più, un pacchetto di video, una collaborazione che va avanti nei mesi. E se hai numeri tuoi da mostrare, possiamo ragionare anche sui risultati.',428,14.1)
box(M,506,CW,88,PERI,13,shadow=3)
para('<b>Ne parliamo in call, prima che tu giri.</b><br/>Due hook vogliono dire due video finiti, con visivi diversi. Fattura o ritenuta d’acconto: vediamo lì cosa è più comodo per te.',M+14,518,CW-28,size=13,leading=17,maxh=70)

# ============================================================ 18 ULTIMO CHECK + CHIUSURA
y=start('Ora tocca a te','Ultimo check.\nPoi tocca a te.',key='fine',size=40)
checks2=['Parlo a una persona sola, e si sente.','L’apertura e il finale si tengono insieme.','Giada si vede e la chat si legge.','Si capisce che è un’AI.','Voce pulita, sottotitoli corti.','Nessuna promessa sul corpo.']
for i,s in enumerate(checks2):
 yy=170+i*33;checkbox(M,yy,24,[YELLOW,PERI,PINK,TEAL,PERI,PINK][i]);para(s,M+38,yy+4,352,size=13.4,leading=17,maxh=24)
button('Apri la tua prova da 14 giorni',M,382,262,TRIAL)
image('giada-director-scene.png',232,444,188,r=12)
para('Provala per due settimane.\nQuando ti viene in mente\nquella cosa che racconteresti\na un’amica, scrivimi.',M,452,192,size=14.6,leading=20)
tag('CI VEDIAMO NEL TUO VIDEO.',M,604,YELLOW,angle=-2,size=10)

C.save()
(OUT/'source/layout-checks.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2))
(OUT/'source/copy.txt').write_text('\n\n'.join(f'[{p:02d}] {s}' for p,s in alltext))
print(f'Created {page} pages; layout warnings: {len(checks)}')
for x in checks:print(x)
