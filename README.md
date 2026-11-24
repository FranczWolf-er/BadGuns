# BadGuns – evidence střelby

Jednoduchá webová aplikace pro evidenci tréninků na střelnici a počtu vystřelených ran.

- Každý trénink je jeden záznam (datum, místo, typ, poznámka).
- Jeden trénink může obsahovat více zbraní, každá s vlastním počtem ran.
- Evidence zbraní (název, druh, ráže, poznámka, vyřazení) s celkovým a letošním počtem ran.
- Přehledy: celkem ran za rok, graf po měsících barevně rozdělený podle ráže, přehled podle ráže a podle zbraně.
- Automatická záloha na OneDrive se synchronizací mezi zařízeními (nastavení viz `NAVOD.md`).
- Finance: nákupy nábojů, průměrná cena za náboj podle ráže a náklady na střelbu v Přehledech i u tréninků.
- Export a import dat ve formátu JSON.
- Záložka Výkony: přepínání Cvičení / Závody. Závody s vlastními typy, výsledky (body, čas, umístění, procenta) a grafem pokroku.
- Střelecká cvičení (Bill Drill, El Presidente, Dot Torture…) s teorií, zápisem výsledků, grafem pokroku a oblíbenými; typy cvičení s filtrem, lze přidat vlastní cvičení i vlastní typ.
- Ukázková data pro vyzkoušení (do exportu se nedostanou, jdou smazat jedním tlačítkem).
- Tmavý režim, instalace na plochu a upozornění na novou verzi.

## Použití

Aplikace je statická stránka bez závislostí (`index.html`, `config.js`, `drills.js`, `cloud.js`, `sw.js`, `manifest.webmanifest`, ikony). Stačí ji nasadit na GitHub Pages.

Při každé změně souborů zvyšte v `sw.js` číslo verze `CACHE`, aby si zařízení stáhla novou verzi a zobrazila upozornění.

## Soukromí

Data se ukládají v `localStorage` daného prohlížeče a volitelně se zálohují na váš OneDrive. Do repozitáře se nikdy nedostávají, repozitář obsahuje jen kód aplikace.
