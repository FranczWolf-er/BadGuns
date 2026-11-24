// Střelecká cvičení: teorie a způsob hodnocení.
// primary: 'time' = hlavní výsledek je čas v sekundách (méně je lépe),
//          'score' = hlavní výsledek je číslo (zásahy, body, metry); better: 'high' | 'low'.
// scoreLabel / scoreMax: doplňkové nebo hlavní číselné pole.
// classes: hranice výkonnostních tříd podle času (od nejlepší).
// Zdroj a další cvičení: https://gun.4fan.cz
const DRILLS = [
  {
    id: 'bill', name: 'Bill Drill', primary: 'time', scoreLabel: 'Zásahy v zóně A', scoreMax: 6,
    summary: '6 ran z pouzdra na jeden terč, co nejrychleji a vše do A.',
    facts: { 'Vzdálenost': '6,5 m', 'Terč': 'IPSC (případně IDPA nebo LOS)', 'Výchozí pozice': 'zbraň v pouzdře, ruce volně podél těla', 'Náboje': '6' },
    steps: ['Na signál tasíte.', 'Vystřelíte 6 ran rychle za sebou na jeden terč.'],
    scoring: 'Platí jen pokus, kdy jsou všech 6 zásahů v zóně A. Výsledkem je čas. Kolem 3,5 s je dobrý výkon. Pokud jde zásah mimo A, zpomalte.',
    purpose: 'Zvládnutí zpětného rázu, sledování mušky mezi ranami a stabilní postoj a úchop, aby poslední rána byla stejně kontrolovaná jako první.',
    variants: 'Delší vzdálenost (10 a 15 m), vynucené přebití se dvěma zásobníky po 6 ranách, střelba v pohybu nebo z krytého nošení.',
    source: 'https://gun.4fan.cz/2021/01/bill-drill/'
  },
  {
    id: 'elpres', name: 'El Presidente', primary: 'time', scoreLabel: 'Zásahy v zóně A', scoreMax: 12,
    summary: 'Otočka, 3 terče po 2 ranách, přebití a znovu. Klasika od Jeffa Coopera.',
    facts: { 'Vzdálenost': '9,1 m', 'Terč': '3 postavové terče 1 m od sebe', 'Výchozí pozice': 'zády k terčům, ruce nad rameny, zbraň v pouzdře', 'Náboje': '12 (2 zásobníky po 6)' },
    steps: ['Na signál se otočíte a tasíte.', 'Dvě rány do každého ze tří terčů.', 'Vynucené přebití.', 'Znovu dvě rány do každého terče.'],
    scoring: 'Hodnotí se čas, pokus platí jen se všemi 12 zásahy v A. Cílem je dostat se pod 10 s.',
    classes: [['GM', 4.75], ['M', 5.3], ['A', 6], ['B', 7.5], ['C', 11.25], ['D', 15]],
    purpose: 'Otočka, tasení, přesnost v rychlosti, přebití a přenášení palby mezi více cíli. Doporučuje se plynulý rytmus 6 ran, přebití, 6 ran, ne rychlé dvojice.',
    source: 'https://gun.4fan.cz/2021/01/el-presidente/'
  },
  {
    id: 'fast', name: 'F.A.S.T.', primary: 'time', scoreLabel: 'Počet chyb (mimo cíl)', scoreMax: 6, scoreBetter: 'low',
    summary: 'Fundamentals, Accuracy & Speed Test: 2 rány do hlavy, přebití, 4 do těla.',
    facts: { 'Vzdálenost': '6,4 m', 'Terč': 'hlava = kartička 7,6 × 12,7 cm, tělo = kruh ⌀ 20 cm', 'Výchozí pozice': 'čelem k terči, ruce volně, zbraň v pouzdře', 'Náboje': '6 (ve zbrani 2, v náhradním zásobníku 4)' },
    steps: ['Na signál tasíte a dáte 2 rány na hlavu.', 'Vynucené přebití.', '4 rány na tělo.'],
    scoring: 'Výsledný čas = naměřený čas + 2 s za každou chybu na hlavě + 1 s za každou chybu na těle. Do výsledku zapisujte čas už i s penalizací.',
    classes: [['Expert', 5], ['Pokročilý', 7], ['Středně pokročilý', 10]],
    classOver: 'Začátečník',
    purpose: 'Rychlý test základů: tasení, přesná střelba na malý cíl, přebití a rychlá střelba na větší cíl. Autor Todd Louis Green.',
    source: 'https://gun.4fan.cz/2021/12/f-a-s-t-fundamentals-accuracy-speed-test/'
  },
  {
    id: 'dot', name: 'Dot Torture', primary: 'score', scoreLabel: 'Zásahy (z 50)', scoreMax: 50, better: 'high',
    summary: '50 ran na 10 malých kruhů. Bez časového limitu, jen přesnost.',
    facts: { 'Vzdálenost': '3,7 m (po čistém průchodu prodlužujte)', 'Terč': 'speciální terč s 10 kruhy ⌀ 5 cm', 'Náboje': '50', 'Čas': 'neměří se, nespěchejte' },
    steps: [
      'Kruh 1: tasení a 5 ran za sebou, co nejtěsnější skupina.',
      'Kruh 2: tasení, 1 rána, zbraň do pouzdra. Celkem 5×.',
      'Kruhy 3 a 4: tasení, 1 rána na 3, 1 rána na 4, do pouzdra. Celkem 4×.',
      'Kruh 5: tasení a 5 ran jen silnou rukou.',
      'Kruhy 6 a 7: tasení, 2 rány na 6, 2 rány na 7, do pouzdra. Celkem 4×.',
      'Kruh 8: z pohotovostní polohy 5 ran jen slabou rukou.',
      'Kruhy 9 a 10: tasení, 1 rána na 9, přebití, 1 rána na 10, do pouzdra. Celkem 3×.'
    ],
    scoring: 'Splněno jen se všemi 50 zásahy v kruzích. Výsledkem je počet zásahů. Teprve po čistém průchodu přidejte vzdálenost nebo čas (např. celé cvičení do 5 minut).',
    purpose: 'Maximální přesnost při různých manipulacích: tasení, střelba silnou i slabou rukou, přebíjení a přenášení mezi cíli.',
    source: 'https://gun.4fan.cz/2021/01/dot-torture/'
  },
  {
    id: 'card', name: '3×5 Card Drill', primary: 'score', scoreLabel: 'Nejdelší splněná vzdálenost (m)', better: 'high',
    summary: '6 ran na kartičku 7,6 × 12,7 cm, postupně až do 13,7 m.',
    facts: { 'Vzdálenosti': '2,7 · 4,5 · 6,4 · 9,1 · 13,7 m', 'Terč': 'kartička 7,6 × 12,7 cm (3 × 5 palců)', 'Náboje': '6 na každou vzdálenost', 'Čas': 'bez limitu, vlastním tempem' },
    steps: ['Začnete na nejkratší vzdálenosti.', 'Vystřelíte 6 ran s důrazem na přesnost.', 'Když jsou všechny zásahy na kartičce, posunete se na další vzdálenost.', 'U zbraně SA/DA střídejte DA, SA, DA, SA, DA, SA.'],
    scoring: 'Na nejbližší vzdálenosti mají být díry co nejblíž u sebe. Na dalších musí být všech 6 ran na kartičce. Výsledkem je nejdelší vzdálenost, kterou jste splnili.',
    purpose: 'Přesnost a práce se spouští. Ztížení: jedna vzdálenost silnou rukou, další slabou.',
    source: 'https://gun.4fan.cz/2021/01/3x5-card-drill/'
  },
  {
    id: 'onefive', name: '1-to-5 Drill', primary: 'time', scoreLabel: 'Zásahy v zóně A', scoreMax: 15,
    summary: '3 terče, 1-2-3-4-5 ran, převážně pro pušku.',
    facts: { 'Vzdálenost': '5 m', 'Terč': '3 postavové terče asi 1 m od sebe', 'Výchozí pozice': 'pohotovostní, pažba v rameni, ústí k zemi', 'Náboje': '15' },
    steps: ['1 rána na levý terč.', '2 rány na prostřední.', '3 rány na pravý.', '4 rány na prostřední.', '5 ran na levý.'],
    scoring: 'Počítají se jen zásahy v A. Pod 3,5 s je velmi dobré, pod 3 s výborné.',
    purpose: 'Opakované zásahy do cíle, dokud není zneškodněn, a udržení stability a úchopu přes sérii ran. Jde střílet i s pistolí.',
    source: 'https://gun.4fan.cz/2021/02/1-to-5-drill/'
  },
  {
    id: 'reload1', name: '1-Reload-1', primary: 'time', scoreLabel: 'Zásahy v zóně A', scoreMax: 2,
    summary: 'Tasení, 1 rána, vynucené přebití, 1 rána. Trénink přebíjení.',
    facts: { 'Vzdálenost': '6 m', 'Terč': 'libovolný, ideálně kovový gong ⌀ asi 20 cm', 'Výchozí pozice': 'zbraň v pouzdře s 1 nábojem, 1 náboj v náhradním zásobníku', 'Náboje': '2' },
    steps: ['Na signál tasíte a vystřelíte 1 ránu.', 'Vynucené přebití.', 'Druhá rána.'],
    scoring: 'U zónových terčů platí jen zásahy v A. Výsledkem je čas.',
    purpose: 'Tasení, úchop, míření, přebití a znovunalezení mířidel.',
    variants: 'Z krytého nošení, z pohotovostní polohy, celé jen silnou nebo jen slabou rukou (nejdřív natrénovat nasucho).',
    source: 'https://gun.4fan.cz/2021/01/1-reload-1/'
  },
  {
    id: 'moz', name: 'Mozambique Drill', primary: 'time', scoreLabel: 'Platné zásahy (z 3)', scoreMax: 3,
    summary: '2 rány na tělo a 1 na hlavu, technika na blízkou vzdálenost.',
    facts: { 'Vzdálenost': 'asi 5 m (pistole 5–10 m, puška 15–25 m)', 'Terč': 'figura IPSC, IDPA nebo LOS', 'Výchozí pozice': 'zbraň v pouzdře', 'Náboje': '3' },
    steps: ['Na signál tasíte.', 'Dvě rány na tělo.', 'Jedna rána na hlavu.'],
    scoring: 'Výsledkem je čas. Počítejte jen pokus, kdy obě rány jsou v zóně A těla a třetí v hlavě. Pro srovnání: špičkoví střelci to zvládnou pod 1 s.',
    purpose: 'Střelecká technika na blízkou vzdálenost: přechod z rychlých ran na velký cíl k přesné ráně na malý cíl. Vyzkoušejte i kratší a delší vzdálenosti.',
    source: 'https://gun.4fan.cz/2021/02/mozambique-drill/'
  },
  {
    id: 'test', name: 'The Test (10-10-10)', primary: 'score', scoreLabel: 'Body (ze 100)', scoreMax: 100, better: 'high',
    summary: '10 ran, 10 yardů, 10 sekund na terčový kruh.',
    facts: { 'Vzdálenost': '9,14 m (10 yardů)', 'Terč': 'NRA B8 oříznutý na A4', 'Výchozí pozice': 'nabitá zbraň v nízké pohotovostní poloze (pokročilí z pouzdra nebo krytého nošení)', 'Náboje': '10', 'Čas': 'limit 10 s' },
    steps: ['Na signál vystřelíte všech 10 ran na terč během 10 sekund.'],
    scoring: 'Body podle Hackathorna: X a 10 = 10 bodů, 9 = 9 bodů atd. Pro splnění je potřeba aspoň 90 bodů. Varianta podle Vickerse: vše v černé, +1 s za ránu mimo černou, +3 s za ránu mimo terč a celkový čas musí být pod 10 s. Se zbraní na méně než 10 nábojů zkraťte limit podle kapacity a pro splnění stačí 90 % maxima (např. 7 ran: 7 s a 63 bodů).',
    purpose: 'Kombinace rychlosti a přesnosti na střední vzdálenosti.',
    source: 'https://gun.4fan.cz/2021/03/the-test/'
  },
  {
    id: 'dummy', name: 'Ball & Dummy', primary: 'score', scoreLabel: 'Počet cuknutí', better: 'low',
    summary: 'Cvičné náboje namíchané mezi ostré odhalí cukání a předvídání výstřelu.',
    facts: { 'Vzdálenost': 'asi 3–5 m', 'Terč': 'libovolný malý, např. kartička 7,6 × 12,7 cm', 'Náboje': 'libovolně, asi 2/3 ostré a 1/3 cvičné', 'Potřeba': 'parťák, který nabije zásobník' },
    steps: ['Parťák náhodně namíchá ostré a cvičné náboje (u revolveru nechá 1–3 komory prázdné).', 'Střílíte na malý blízký terč.', 'Při cvičném náboji musí zbraň zůstat úplně v klidu.'],
    scoring: 'Zapište, kolikrát zbraň při cvičném náboji cukla. Po cuknutí vybijte, udělejte 10 ran nasucho bez cuknutí a cvičení zopakujte.',
    purpose: 'Diagnostika předvídání zpětného rázu a trhání spouště. Instruktoři ho používají k nalezení chyb.',
    source: 'https://gun.4fan.cz/2021/01/ball-dummy-drill/'
  }
];
