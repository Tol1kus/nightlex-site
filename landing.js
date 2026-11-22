// Мова лендінгу: українська за замовчуванням, англійська — для тих, у кого браузер не українською, або за кнопкою EN (запам'ятовується).
(function(){
var EN={kick:'Beta · from A1 to C2',h1:'Danish and English — <em>at your own pace</em>',lead:'A language game: new words, sentences, listening, reading and conversation every day. Words come back right when you start to forget them.',start:'Start learning',how:'How it works',note:'Works in the browser on iPhone, Android and computers — no sign-up.',da:'Danish',en:'English (US)',
h_feat:'What’s inside',sub_feat:'Every day you get a short plan made for you. Open it, go step by step and watch your level grow.',
f1:'Level test',f1p:'A few minutes, and the game knows where to start: from zero or from A2, B1… No need to relearn words you know.',
f2:'Smart review',f2p:'The FSRS algorithm works out when to bring each word back, so it sticks for good, not just until tomorrow.',
f3:'Natural voices',f3p:'Danish words, sentences and texts are voiced with natural voices (English coming soon). Tap “slow” to slow them down.',
f4:'Real texts',f4p:'Short everyday stories and texts about the country. Tap a word to see its translation.',
f5:'Dialogues and phrases',f5p:'Real-life situations: the shop, the doctor, the town hall, work. You answer yourself and learn why it’s said that way.',
f6:'Mistakes explained',f6p:'Got it wrong? A short rule and an example right away. Words you miss go to “My mistakes” automatically.',
h_pace:'You choose the pace',sub_pace:'Some people have 30 minutes in the evening, others an hour. You can change the pace any time in Settings.',
p1:'Relaxed',p2:'Fast',p3:'Intensive',rec:'recommended',pw:'new words a day',p1p:'about 30 min a day · level A1 in roughly 4–5 months',p2p:'about 30 min a day · level A1 in roughly 3 months',p3p:'about 60 min a day · level A1 in roughly 2 months, plus pronunciation and sentence building',
h_steps:'How to start',s1:'Open the game',s1p:'On a phone you can add it to your home screen — it opens like a normal app.',s2:'Take the test or start from zero',s2p:'Choose the language, level and pace, and your daily plan is built for you.',s3:'Practise every day',s3p:'In small steps: review, new words, practice, a text or a dialogue.',
h_shots:'What it looks like',c1:'Today’s plan',c2:'A new word with an example',c3:'A mistake, explained right away',c4:'Texts by level',
h_honest:'Honestly',h1c:'No ads, no tracking',h1cp:'Your progress is stored on your device. No ad trackers, no analytics.',h2c:'Beta version',h2cp:'Translations, sentences and texts were prepared with AI and proofread by a model; native speakers are checking them now. Spotted a mistake? Tell us via “Me” → “Report a problem”.',
h_final:'Your first lesson — today',sub_final:'Start with the level test or with your very first word.',ft1:'For testers',ft2:'Native speaker check',ft3:'Sources and licences'};
var ALT_EN={a1:'Home screen: today’s plan',a2:'New word card with an example',a3:'Exercise with an explanation of the mistake',a4:'Reading: texts by level'};
var UK={};document.querySelectorAll('[data-t]').forEach(function(e){var k=e.getAttribute('data-t');if(!(k in UK))UK[k]=e.hasAttribute('data-html')?e.innerHTML:e.textContent});
var ALT_UK={};document.querySelectorAll('[data-alt]').forEach(function(e){ALT_UK[e.getAttribute('data-alt')]=e.alt});
var TITLE_UK=document.title;
function set(l){var d=l==='en'?EN:UK;document.documentElement.lang=l==='en'?'en':'uk';
 document.querySelectorAll('[data-t]').forEach(function(e){var v=d[e.getAttribute('data-t')];if(v==null)return;if(e.hasAttribute('data-html'))e.innerHTML=v;else e.textContent=v});
 document.querySelectorAll('[data-alt]').forEach(function(e){e.alt=(l==='en'?ALT_EN:ALT_UK)[e.getAttribute('data-alt')]});
 document.title=l==='en'?'NightLex — learn Danish and English at your own pace':TITLE_UK;
 document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-set')===l?'true':'false')})}
var saved=null;try{saved=localStorage.getItem('nx-landing-lang')}catch(e){}
var q=/[?&]lang=(en|uk)/.exec(location.search);
var l=q?q[1]:saved||(/^(uk|ru)/i.test(navigator.language||'uk')?'uk':'en');
if(l!=='uk')set(l);
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-set');set(v);try{localStorage.setItem('nx-landing-lang',v)}catch(e){}})});
})();
