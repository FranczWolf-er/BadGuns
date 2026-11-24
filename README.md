# BadGuns – evidence střelby

Jednoduchá webová aplikace pro evidenci tréninků na střelnici a počtu vystřelených ran.

- Každý trénink je jeden záznam (datum, místo, typ, poznámka).
- Jeden trénink může obsahovat více zbraní, každá s vlastním počtem ran.
- Evidence zbraní (název, druh, ráže, poznámka, vyřazení) s celkovým a letošním počtem ran.
- Přehledy: celkem ran za rok, po měsících a po zbraních.
- Export a import dat ve formátu JSON.
- Tmavý režim, instalace na plochu a upozornění na novou verzi.

## Použití

Aplikace je statická stránka bez závislostí (`index.html`, `sw.js`, `manifest.webmanifest`, ikony). Stačí ji nasadit na GitHub Pages.

Při každé změně souborů zvyšte v `sw.js` číslo verze `CACHE`, aby si zařízení stáhla novou verzi a zobrazila upozornění.

## Soukromí

Data se ukládají pouze v `localStorage` daného prohlížeče. Do repozitáře se nikdy nedostávají, repozitář obsahuje jen kód aplikace.
