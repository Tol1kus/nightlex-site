// Лендінг NightLex (22.11.2026): мова сторінки (UA / EN), колір дня, зоряне небо, вікторина, читання з перекладом,
// «як це працює» з липким телефоном, кольори дня, темп, вкладки iPhone / Android, поява при прокрутці. Без зовнішніх бібліотек.
(function(){
'use strict';
var doc=document,root=doc.documentElement;root.classList.add('js');
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,c){return (c||doc).querySelector(s)}function $$(s,c){return Array.prototype.slice.call((c||doc).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}

/* ---------- мова ---------- */
var EN={st1:'words and phrases',st2:'texts to read',st3:'grammar lessons',st4:'six levels',e_nat:'For native speakers',h_nat:'Are you a native speaker of Danish or English?',p_nat:'Help us check the game’s words and sentences — 10 minutes, no sign-up. Your answers are saved automatically.',n1:'Try it',n2:'How it works',n3:'Testers',n4:'FAQ',open:'Open',kick:'Beta · A1 → C2',
h1:'Learn Danish.<br><span class="grad">A little every day.</span>',lead:'A language game with English explanations: new words, sentences, real texts and dialogues. Every word comes back right when you start to forget it.',
start:'Start learning',tryit:'Try it here ↓',pl1:'No ads',pl2:'No tracking',pl3:'No sign-up',pl4:'iPhone · Android · PC',ch1:'→ cat',ch2:'Correct!',ch3:'new words today',
e_try:'Try it right here',h_try:'One minute, and you’re learning Danish',q_tag:'New word · A1',q_ask:'What does it mean?',r_tag:'Reading · tap a word',r_hint:'Tap any word to see its translation.',r_note:'Every text in the game reads like this: everyday stories and texts about the country, from A1 to C2.',
e_how:'How it works',h_how:'Your plan for every day',s1:'Choose your level and pace',s1p:'A short test shows where to start. The pace is yours: 10, 15 or 20 new words a day.',s2:'Open today’s plan',s2p:'Review, new words, practice, a text or a dialogue. Step by step — no need to decide what’s next.',s3:'Learn new words',s3p:'A picture, an example sentence and a natural voice. Swipe right — I know it; left — not yet.',s4:'Make a mistake, learn why',s4p:'A short rule and an example right away. The word comes back exactly when it’s time to review it.',
e_col:'A new color every day',h_col:'A new mood every day',sub_col:'Every day has its own color: lavender, sage, sand or rose. Keep your favorite, or switch to the light theme during the day. Try it:',pal1:'Lavender',pal2:'Sage',pal3:'Sand',pal4:'Rose',m_dark:'Night',m_light:'Day',
e_feat:'What’s inside',h_feat:'Everything you need to start speaking',f1:'Natural-sounding voices',f1p:'Danish words, sentences and texts are read aloud by natural-sounding AI voices. You can slow them down.',f2:'Smart review',f2p:'The FSRS algorithm works out when to bring each word back, so it sticks for good.',f2c:'each review makes it stick longer',f3:'Real texts',f3p:'Everyday stories and texts about the country, by level — tap any word to translate it.',f4:'Real-life dialogues',f4p:'The shop, the doctor, the kommune office, work. You answer yourself and learn why it’s said that way.',f5:'Mistakes explained',f5p:'A short rule right after a mistake. Words you miss go to “My mistakes”.',f6:'From A1 to C2',f6p:'Thousands of words in everyday topics, grammar and texts for every level.',
e_pace:'You choose the pace',h_pace:'How many words a day?',p1:'Relaxed',p2:'Fast',p3:'Intensive',pace_note:'You can change it any time in the game’s settings.',po1:'new words a day',po2:'minutes a day',po3:'months for level A1',
e_hon:'Full transparency',h_hon:'We’re still testing — and we say so',h1c:'No ads, no tracking',h1cp:'Your progress is stored on your device. No ad trackers, no analytics.',h2c:'Checked by native speakers',h2cp:'Translations, sentences and texts were prepared with AI and double-checked by AI. Native speakers are checking them now.',h3c:'Spotted a mistake?',h3cp:'In the game: “Me” → “Report a problem”. You can attach a screenshot — we read everything.',
e_tst:'For testers',h_tst:'Put NightLex on your phone’s home screen',sub_tst:'Then the game opens like a normal app — full screen, with its own icon. It takes 20 seconds.',
i1:'Open <u>app.nightlex.com</u> in Safari and tap Share <span class="kbd">⬆︎</span> at the bottom.',ms1:'Copy',ms2:'Add Bookmark',ms3:'Add to Home Screen',ms4:'Print',i2:'Scroll the list, choose “Add to Home Screen”, then “Add”.',i3:'Done! The NightLex icon is on your screen — open it from there every day.',
a1:'Open <u>app.nightlex.com</u> in Chrome and tap the menu <span class="kbd">⋮</span> at the top right.',am1:'New tab',am2:'History',am3:'Add to Home screen',am4:'Settings',a2:'Choose “Add to Home screen” (or “Install app”), then “Add”.',a3:'Done! Open NightLex from your home screen.',inst_note:'Menu names may differ slightly depending on your phone.',
tl1:'Instructions for testers →',tl1p:'A 7-day plan, a short survey, how to send a screenshot',tl2:'Native speaker of Danish or English? →',tl2p:'Help us check sentences — 10 minutes, answers are saved automatically',
e_faq:'FAQ',h_faq:'What people usually ask',q1:'Is it free?',a1x:'Yes — during testing everything is free and ad-free.',q2:'Do I need to sign up?',a2x:'No. Open it and learn — your progress is stored on your device.',q3:'I’m a complete beginner. Is it for me?',a3x:'Yes. Choose “I’m a complete beginner” and start from the very first word. If you already know some, the level test counts the words you know.',q4:'Which languages can I learn?',a4x:'Danish and US English with a Ukrainian interface. Danish can also be learned with an English interface.',q5:'Why is the content made with AI?',a5x:'That’s how we could prepare thousands of words, sentences and texts for every level. Everything was double-checked by AI, and native speakers are now checking it line by line — we fix every mistake.',q6:'How much time does it take a day?',a6x:'About 20 minutes on Relaxed, 30 on Fast and about an hour on Intensive. You can change the pace any time.',
h_final:'Your first word —<br><span class="grad">tonight.</span>',sub_final:'Start with the level test or with your very first word.',ft1:'For testers',ft2:'Help check translations',ft4:'Privacy',ns_t:'Native speaker of Danish or English? Help us check the game’s words — 10 min.',e_ab:'Who makes NightLex',h_ab:'An independent project for people who really want to learn',p_ab:'NightLex is a small independent project: no investors, no ads, no selling of data. We are building a game that makes it easy for Ukrainians to learn Danish and English every day — with explanations in their own language, real texts and a pace they choose. Write to us right from the game: “Me” → “Report a problem”.',ab_priv:'How we handle your data →',ft3:'Sources and licences'};
var DA={st1:'ord og udtryk',st2:'tekster at læse',st3:'grammatiklektioner',st4:'seks niveauer',e_nat:'For modersmålstalere',h_nat:'Har du dansk eller engelsk som modersmål?',p_nat:'Hjælp os med at tjekke spillets ord og sætninger — 10 minutter, uden login. Dine svar gemmes automatisk.',
n1:'Prøv det',n2:'Sådan virker det',n3:'Testere',n4:'Spørgsmål',open:'Åbn',kick:'Betaversion · A1 → C2',
h1:'Dansk for ukrainere.<br><span class="grad">Lidt hver dag.</span>',lead:'Et sprogspil, hvor ukrainere lærer dansk og engelsk: nye ord, sætninger, tekster og dialoger. Har du dansk som modersmål? Hjælp os med at tjekke sætningerne — knappen øverst på siden.',
start:'Kom i gang',tryit:'Prøv det her ↓',pl1:'Ingen reklamer',pl2:'Ingen sporing',pl3:'Uden login',pl4:'iPhone · Android · PC',ch1:'→ cat',ch2:'Rigtigt!',ch3:'nye ord i dag',
e_try:'Prøv det lige her',h_try:'Ét minut — og du er i gang med dansk',q_tag:'Nyt ord · A1',q_ask:'Hvad betyder det?',r_tag:'Læsning · tryk på et ord',r_hint:'Tryk på et ord for at se oversættelsen.',r_note:'Sådan læses alle tekster i spillet: hverdagshistorier og tekster om landet, fra A1 til C2.',
e_how:'Sådan virker det',h_how:'Din plan for hver dag',s1:'Vælg niveau og tempo',s1p:'En kort test viser, hvor du skal starte. Tempoet er dit: 10, 15 eller 20 nye ord om dagen.',s2:'Åbn dagens plan',s2p:'Repetition, nye ord, øvelser, en tekst eller en dialog. Trin for trin — du skal ikke selv finde ud af, hvad der kommer nu.',s3:'Lær nye ord',s3p:'Et billede, en eksempelsætning og en naturlig stemme. Swipe til højre — det kan jeg; til venstre — ikke endnu.',s4:'Lav en fejl — og forstå den',s4p:'En kort regel og et eksempel med det samme. Ordet kommer tilbage, præcis når det er tid til at repetere det.',
e_col:'En ny farve hver dag',h_col:'Spillet skifter stemning sammen med dig',sub_col:'Hver dag har sin egen farve: lavendel, salvie, sand eller rosa. Behold din favorit, eller skift til lyst tema om dagen. Prøv selv:',pal1:'Lavendel',pal2:'Salvie',pal3:'Sand',pal4:'Rosa',m_dark:'Nat',m_light:'Dag',
e_feat:'Det får du',h_feat:'Alt, hvad du skal bruge for at komme til at tale',f1:'Naturlige stemmer',f1p:'Danske ord, sætninger og tekster læses op af naturligt klingende AI-stemmer. Du kan sætte farten ned.',f2:'Smart repetition',f2p:'FSRS-algoritmen regner ud, hvornår hvert ord skal komme tilbage, så det bliver husket længe.',f2c:'hver repetition styrker hukommelsen',f3:'Rigtige tekster',f3p:'Hverdagshistorier og tekster om landet, efter niveau — tryk på et ord, og se oversættelsen.',f4:'Dialoger fra hverdagen',f4p:'Butikken, lægen, kommunen, arbejdet. Du svarer selv og lærer, hvorfor man siger det sådan.',f5:'Fejl forklaret',f5p:'En kort regel lige efter en fejl. Ord, du laver fejl i, havner i »Mine fejl«.',f6:'Fra A1 til C2',f6p:'Tusindvis af ord i hverdagsemner, grammatik og tekster til hvert niveau.',
e_pace:'Du vælger selv tempoet',h_pace:'Hvor mange ord om dagen?',p1:'Roligt',p2:'Hurtigt',p3:'Intensivt',pace_note:'Du kan altid ændre det i spillets indstillinger.',po1:'nye ord om dagen',po2:'minutter om dagen',po3:'måneder til niveau A1',
e_hon:'Ærligt talt',h_hon:'Vi tester stadig — og det siger vi ligeud',h1c:'Ingen reklamer og ingen sporing',h1cp:'Dine fremskridt gemmes på din enhed. Ingen annoncesporing og ingen analyseværktøjer.',h2c:'Tjekket af modersmålstalere',h2cp:'Oversættelser, sætninger og tekster er lavet med AI og tjekket igen af AI. Lige nu tjekker modersmålstalere dem.',h3c:'Har du fundet en fejl?',h3cp:'I spillet: »Me« → »Report a problem«. Du kan vedhæfte et skærmbillede — vi læser alt.',
e_tst:'For testere',h_tst:'Læg NightLex på telefonens hjemmeskærm',sub_tst:'Så åbner spillet som en almindelig app — i fuld skærm og med sit eget ikon. Det tager 20 sekunder.',
i1:'Åbn <u>app.nightlex.com</u> i Safari, og tryk på Del <span class="kbd">⬆︎</span> nederst.',ms1:'Kopiér',ms2:'Tilføj bogmærke',ms3:'Føj til hjemmeskærm',ms4:'Udskriv',i2:'Rul ned, vælg »Føj til hjemmeskærm« og derefter »Tilføj«.',i3:'Færdig! NightLex-ikonet ligger på skærmen — åbn det derfra hver dag.',
a1:'Åbn <u>app.nightlex.com</u> i Chrome, og tryk på menuen <span class="kbd">⋮</span> øverst til højre.',am1:'Ny fane',am2:'Historik',am3:'Føj til startskærm',am4:'Indstillinger',a2:'Vælg »Føj til startskærm« (eller »Installer app«) og derefter »Tilføj«.',a3:'Færdig! Åbn NightLex fra startskærmen.',inst_note:'Navnene i menuen kan variere lidt fra telefon til telefon.',
tl1:'Vejledning til testere →',tl1p:'En plan for 7 dage, et kort spørgeskema, sådan sender du et skærmbillede',tl2:'Har du dansk eller engelsk som modersmål? →',tl2p:'Hjælp os med at tjekke sætninger — 10 minutter, svarene gemmes automatisk',
e_faq:'Spørgsmål',h_faq:'Det, folk tit spørger om',q1:'Er det gratis?',a1x:'Ja — mens vi tester, er alt gratis og uden reklamer.',q2:'Skal jeg oprette en konto?',a2x:'Nej. Åbn spillet og lær — dine fremskridt gemmes på din enhed.',q3:'Jeg er helt nybegynder. Passer det til mig?',a3x:'Ja. Vælg »helt nybegynder«, og start fra det allerførste ord. Kan du allerede noget, tæller niveautesten de ord, du kender.',q4:'Hvilke sprog kan jeg lære?',a4x:'Dansk og amerikansk engelsk med ukrainsk brugerflade. Dansk kan også læres med engelsk brugerflade.',q5:'Hvorfor er indholdet lavet med AI?',a5x:'Sådan kunne vi lave tusindvis af ord, sætninger og tekster til alle niveauer. Alt er tjekket igen af AI, og nu tjekker modersmålstalere det linje for linje — vi retter hver fejl.',q6:'Hvor lang tid tager det om dagen?',a6x:'Cirka 20 minutter i tempoet »Roligt«, 30 i »Hurtigt« og omkring en time i »Intensivt«. Du kan altid skifte tempo.',
h_final:'Dit første ord —<br><span class="grad">i aften.</span>',sub_final:'Start med niveautesten eller med dit allerførste ord.',ft1:'For testere',ft2:'Tjek af modersmålstalere',ft3:'Kilder og licenser',ft4:'Privatliv',ns_t:'Har du dansk eller engelsk som modersmål? Hjælp os med at tjekke spillets ord — 10 min.',e_ab:'Hvem står bag NightLex',h_ab:'Et uafhængigt projekt for dem, der vil lære sproget for alvor',p_ab:'NightLex er et lille uafhængigt projekt: ingen investorer, ingen reklamer, intet salg af data. Vi laver et spil, der gør det let for ukrainere at lære dansk og engelsk hver dag — med forklaringer på deres eget sprog, rigtige tekster og et tempo, de selv vælger. Skriv til os direkte fra spillet: »Me« → »Report a problem«.',ab_priv:'Sådan behandler vi dine data →'};
var UK={};$$('[data-t]').forEach(function(e){var k=e.getAttribute('data-t');if(!(k in UK))UK[k]=e.hasAttribute('data-html')?e.innerHTML:e.textContent});
var TITLE={uk:doc.title,en:'NightLex — learn Danish and English, a little every day',da:'NightLex — lær dansk og engelsk, lidt hver dag'};
var LANG='uk';function L3(u,e,d){return LANG==='en'?e:LANG==='da'?d:u}
function setLang(l){LANG=l;var d=l==='en'?EN:l==='da'?DA:UK;root.lang=l;
 $$('[data-t]').forEach(function(e){var v=d[e.getAttribute('data-t')];if(v==null)return;if(e.hasAttribute('data-html'))e.innerHTML=v;else e.textContent=v});
 doc.title=TITLE[l]||TITLE.uk;$$('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-set')===l?'true':'false')});
 buildTicker();quizRender();readerBuild();paceSet(PACE,true);try{shotsRecolor()}catch(e){}
 try{var u=new URL(location.href);if(l==='uk')u.searchParams.delete('lang');else u.searchParams.set('lang',l);history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){}}
var saved=null;try{saved=localStorage.getItem('nx-landing-lang')}catch(e){}
var q=/[?&]lang=(en|uk|da)/.exec(location.search);
// мова браузера: українська (і російська) → UA, данська (і норвезька) → DA, решта → EN; вибір кнопкою запам'ятовується
function browserLang(){var ls=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'uk']);for(var i=0;i<ls.length;i++){var c=String(ls[i]).toLowerCase().slice(0,2);if(c==='uk'||c==='ru')return 'uk';if(c==='da'||c==='nb'||c==='no'||c==='nn')return 'da';if(c==='en')return 'en'}return 'en'}
var startLang=q?q[1]:saved||browserLang();
$$('.lang button').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-set');setLang(v);try{localStorage.setItem('nx-landing-lang',v)}catch(e){}})});

/* ---------- колір дня (як у грі: 4 кольори по черзі) ---------- */
var PALS=['lavender','sage','sand','rose'];
var dayPal=PALS[Math.floor(Date.now()/864e5)%4];
root.setAttribute('data-accent',dayPal);

function shotSrc(n){return 'img/'+n+(LANG==='uk'?'':'_en')+'_'+(root.getAttribute('data-accent')||'rose')+'.webp'}
function shotsRecolor(){var ss=doc.getElementById('storyShot');if(ss)ss.setAttribute('src',ss.getAttribute('src').replace(/(_en)?_(lavender|sage|sand|rose)\.webp/,(LANG==='uk'?'':'_en')+'_'+(root.getAttribute('data-accent')||'rose')+'.webp'));$$('img[data-ps]').forEach(function(i){var s=shotSrc(i.getAttribute('data-ps'));if(i.getAttribute('src')!==s)i.setAttribute('src',s)})}
/* ---------- зоряне небо ---------- */
(function stars(){var svg=$('#stars');if(!svg)return;var n=window.innerWidth<700?55:110,h='';
 for(var i=0;i<n;i++){var x=(Math.random()*100).toFixed(2),y=(Math.random()*100).toFixed(2),r=(Math.random()*1.1+.3).toFixed(2),o=(Math.random()*.6+.25).toFixed(2);
  h+='<circle cx="'+x+'%" cy="'+y+'%" r="'+r+'" style="--o:'+o+';--d:'+(3+Math.random()*5).toFixed(1)+'s;--dl:-'+(Math.random()*6).toFixed(1)+'s;opacity:'+o+'"/>'}
 svg.innerHTML=h})();

/* ---------- навігація: тло після прокрутки ---------- */
var nav=$('#nav');function onScroll(){nav.classList.toggle('solid',window.scrollY>20)}addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ---------- телефони в першому екрані: легкий паралакс ---------- */
if(!reduce){var stage=$('#stage'),tick=false;addEventListener('scroll',function(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;var y=Math.min(window.scrollY,700);
  if(stage){stage.style.setProperty('--py',(-y*.12)+'px');stage.style.setProperty('--py2',(y*.06)+'px')}})},{passive:true})}

/* ---------- бігучий рядок ---------- */
var TICK=[['hej','привіт','hi'],['tak','дякую','thank you'],['en kop kaffe','чашка кави','a cup of coffee'],['hygge','затишок','coziness'],['i dag','сьогодні','today'],['en ven','друг','a friend'],['at læse','читати','to read'],['godmorgen','доброго ранку','good morning'],
 ['friend','друг','—'],['to learn','вчити','—'],['tomorrow','завтра','—'],['beautiful','гарний','—'],['velkommen','ласкаво просимо','welcome'],['en cykel','велосипед','a bicycle'],['undskyld','вибачте','sorry'],['to travel','подорожувати','—']];
function buildTicker(){var t=$('#ticker');if(!t)return;var one=TICK.filter(function(w){return LANG==='uk'||w[2]!=='—'}).map(function(w){return '<span>'+esc(w[0])+'<em>'+esc(LANG!=='uk'?w[2]:w[1])+'</em></span>'}).join('');t.innerHTML=one+one}

/* ---------- вікторина ---------- */
var QZ=[{w:'en kat',pic:'img/cat.webp',uk:['кіт','собака','книжка'],en:['cat','dog','book'],why:{uk:'<b>en kat</b> — кіт. «en» — артикль: рід en, як у більшості данських іменників.',en:'<b>en kat</b> means cat. “en” is the article: most Danish nouns are “en” words.',da:'<b>en kat</b> betyder „cat“. „en“ er artiklen — de fleste danske navneord er en-ord.'}},
 {w:'en cykel',pic:'img/bicycle.webp',uk:['автобус','велосипед','потяг'],en:['bus','bicycle','train'],why:{uk:'<b>en cykel</b> — велосипед. У Данії на велосипеді їздять щодня — навіть узимку.',en:'<b>en cykel</b> means bicycle. In Denmark people cycle every day — even in winter.',da:'<b>en cykel</b> betyder „bicycle“. I Danmark cykler mange hver dag — også om vinteren.'}},
 {w:'et æble',pic:'img/apple.webp',uk:['груша','хліб','яблуко'],en:['pear','bread','apple'],why:{uk:'<b>et æble</b> — яблуко. «et» — другий рід. Літера æ звучить приблизно як «е».',en:'<b>et æble</b> means apple. “et” is the second gender. The letter æ sounds roughly like “e” in “bed”.',da:'<b>et æble</b> betyder „apple“. „et“ er det andet køn i dansk.'}}];
var QA=[0,1,2],qi=0,score=0,answered=false;
function qCorrect(i){return QZ[i].uk.indexOf({0:'кіт',1:'велосипед',2:'яблуко'}[i])}
function quizRender(){var box=$('#qOpts');if(!box)return;var fb=$('#qFb');
 if(qi>=QZ.length){$('#quiz').querySelector('.q-pic').style.display='none';$('#qWord').innerHTML='';$('.q-ask').style.display='none';
  box.innerHTML='<div class="q-done"><b>'+score+' / 3</b>'+(score===0?L3('Нічого страшного — у грі слово повернеться, доки не запам’ятаєш.','No worries — in the game a word keeps coming back until it sticks.','Helt i orden — i spillet kommer ordet igen, til du kan det.'):L3('Так починається урок у NightLex.','That’s how a lesson starts in NightLex.','Sådan starter en lektion i NightLex.'))+'</div>';
  fb.innerHTML='<a class="next" href="https://app.nightlex.com/">'+L3('Продовжити в грі →','Continue in the game →','Fortsæt i spillet →')+'</a>';$('#qN').textContent='3 / 3';return}
 var it=QZ[qi],opts=it[LANG!=='uk'?'en':'uk'];$('#qN').textContent=(qi+1)+' / 3';$('#qWord').textContent=it.w;var p=$('#qPic');p.src=it.pic;
 box.innerHTML=opts.map(function(o,i){return '<button type="button" data-i="'+i+'">'+esc(o)+'</button>'}).join('');fb.innerHTML='';answered=false}
function quizAnswer(i){if(answered)return;answered=true;var ok=qCorrect(qi),bs=$$('#qOpts button');bs[ok].classList.add('ok');if(i!==ok)bs[i].classList.add('bad');else{score++;var pic=$('.q-pic');pic.classList.remove('pop');void pic.offsetWidth;pic.classList.add('pop')}
 var it=QZ[qi];$('#qFb').innerHTML=(i===ok?'<span style="color:var(--ok);font-weight:700">'+L3('Правильно! ','Correct! ','Rigtigt! ')+'</span>':'')+(it.why[LANG]||it.why.en)+'<button type="button" class="next">'+L3('Далі','Next','Næste')+'</button>'}
doc.addEventListener('click',function(e){var b=e.target.closest('#qOpts button');if(b){quizAnswer(+b.getAttribute('data-i'));return}
 var n=e.target.closest('#qFb button.next');if(n){qi++;quizRender()}});

/* ---------- читання: торкнись слова ---------- */
var RD=[['Hej!','привіт','hi'],['Jeg','я','I'],['hedder','звуся (мене звати)','am called'],['Anna.','Анна (ім’я)','Anna (a name)'],['Jeg','я','I'],['bor','живу','live'],['i','в','in'],['København.','Копенгаген','Copenhagen'],
 ['Om morgenen','вранці','in the morning'],['cykler','їжджу на велосипеді','cycle'],['jeg','я','I'],['på arbejde.','на роботу','to work'],['Om aftenen','увечері','in the evening'],['læser','читаю','read'],['jeg','я','I'],['en bog.','книжку','a book']];
function readerBuild(){var t=$('#rdText');if(!t)return;t.innerHTML=RD.map(function(w,i){return '<button type="button" data-i="'+i+'">'+esc(w[0])+'</button>'}).join(' ');
 var tip=$('#rdTip');tip.innerHTML='<span>'+esc((LANG==='en'?EN:LANG==='da'?DA:UK).r_hint)+'</span>'}
doc.addEventListener('click',function(e){var b=e.target.closest('#rdText button');if(!b)return;$$('#rdText button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
 var w=RD[+b.getAttribute('data-i')],tip=$('#rdTip');tip.innerHTML='<b lang="da">'+esc(w[0].replace(/[.!]$/,''))+'</b>'+esc(LANG!=='uk'?w[2]:w[1]);tip.classList.remove('flash');void tip.offsetWidth;tip.classList.add('flash')});

/* ---------- «як це працює»: телефон показує екран поточного кроку ---------- */
var shot=$('#storyShot'),steps=$$('.step');
if('IntersectionObserver' in window&&shot){var cur='';var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;steps.forEach(function(s){s.classList.toggle('on',s===en.target)});
  var src=shotSrc(en.target.getAttribute('data-shot'));if(src&&src!==cur){cur=src;shot.classList.add('fade');setTimeout(function(){shot.src=src;shot.onload=function(){shot.classList.remove('fade')}},reduce?0:200)}})},{rootMargin:'-45% 0px -45% 0px'});
 steps.forEach(function(s){io.observe(s)})}

/* ---------- кольори дня ---------- */
var palShot=$('#palShot'),PAL=dayPal,MODE='dark';
function palApply(){$$('.sw').forEach(function(b){b.setAttribute('aria-checked',b.getAttribute('data-pal')===PAL?'true':'false')});
 $$('.daynight button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-mode')===MODE?'true':'false')});
 root.setAttribute('data-accent',PAL);shotsRecolor();if(!palShot)return;var src='img/pal_'+(MODE==='light'?'light_':'')+PAL+'.webp';palShot.classList.add('fade');var im=new Image();im.onload=function(){palShot.src=src;palShot.classList.remove('fade')};im.src=src}
$$('.sw').forEach(function(b){b.addEventListener('click',function(){PAL=b.getAttribute('data-pal');palApply()})});
$$('.daynight button').forEach(function(b){b.addEventListener('click',function(){MODE=b.getAttribute('data-mode');palApply()})});

/* ---------- темп ---------- */
var PACE=15,PM={10:['≈ 20','≈ 4,5','≈ 4.5'],15:['≈ 30','≈ 3','≈ 3'],20:['≈ 60','≈ 2','≈ 2']};
function paceSet(n,quiet){PACE=n;$$('.seg button').forEach(function(b){b.setAttribute('aria-checked',+b.getAttribute('data-n')===n?'true':'false')});
 var m=PM[n];[['#pN',String(n)],['#pT',m[0]],['#pM',LANG==='en'?m[2]:m[1]]].forEach(function(x){var el=$(x[0]);if(!el)return;if(el.textContent!==x[1]){el.textContent=x[1];if(!quiet){el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump')}}});
 var mo=$('[data-t="po3"]');if(mo)mo.textContent=LANG==='en'?EN.po3:LANG==='da'?DA.po3:(n===10?'місяця на рівень A1':n===15?'місяці на рівень A1':'місяці на рівень A1')}
$$('.seg button').forEach(function(b){b.addEventListener('click',function(){paceSet(+b.getAttribute('data-n'))})});

/* ---------- вкладки iPhone / Android (за пристроєм) ---------- */
function tab(id){$$('.os-tabs [role=tab]').forEach(function(t){var on=t.id===id;t.setAttribute('aria-selected',on?'true':'false');var p=doc.getElementById(t.getAttribute('aria-controls'));if(p)p.hidden=!on})}
$$('.os-tabs [role=tab]').forEach(function(t){t.addEventListener('click',function(){tab(t.id)})});
if(/android/i.test(navigator.userAgent))tab('tab-and');

/* ---------- поява при прокрутці ---------- */
if('IntersectionObserver' in window&&!reduce){var ro=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');ro.unobserve(en.target)}})},{rootMargin:'0px 0px -8% 0px'});
 $$('.reveal').forEach(function(el){ro.observe(el)})}else $$('.reveal').forEach(function(el){el.classList.add('in')});

/* ---------- цифри: «набігають» при появі ---------- */
(function(){var els=$$('.stat b[data-count]');if(!els.length)return;
 function fmt(n){var t=String(n);if(n>=1000)t=t.slice(0,-3)+(LANG==='en'?',':LANG==='da'?'.':' ')+t.slice(-3);return t}
 function run(el){var to=+el.getAttribute('data-count'),suf=el.getAttribute('data-suf')||'',t0=null;if(reduce){el.textContent=fmt(to)+suf;return}
  function st(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);el.textContent=fmt(Math.round(to*e))+suf;if(k<1)requestAnimationFrame(st)}requestAnimationFrame(st)}
 if('IntersectionObserver' in window){var o=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){run(en.target);o.unobserve(en.target)}})},{threshold:.6});els.forEach(function(e){o.observe(e)})}else els.forEach(run)})();

/* ---------- кнопка внизу на телефоні: після першого екрана, ховається біля фінальної кнопки ---------- */
(function(){var c=$('#mCta'),h=$('.hero .ctas'),f=$('.final');if(!c||!h||!('IntersectionObserver' in window))return;var heroVis=true,finVis=false;
 function upd(){c.classList.toggle('show',!heroVis&&!finVis)}
 new IntersectionObserver(function(es){heroVis=es[0].isIntersecting;upd()}).observe(h);if(f)new IntersectionObserver(function(es){finVis=es[0].isIntersecting;upd()}).observe(f)})();

/* ---------- стрілки ←/→ у вкладках і групах перемикачів (доступність) ---------- */
$$('[role=tablist],[role=radiogroup]').forEach(function(g){g.addEventListener('keydown',function(e){if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].indexOf(e.key)<0)return;
 var bs=$$('[role=tab],[role=radio]',g),i=bs.indexOf(doc.activeElement);if(i<0)return;e.preventDefault();var n=bs[(i+(e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:1)+bs.length)%bs.length];n.focus();n.click()})});

/* старт */
setLang(startLang);palApply();shotsRecolor();
})();
