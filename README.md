# BadGuns – evidence střelby

Jednoduchá webová aplikace pro evidenci tréninků na střelnici a počtu vystřelených ran.

- Každý trénink je jeden záznam (datum, místo, typ, poznámka).
- Jeden trénink může obsahovat více zbraní, každá s vlastním počtem ran.
- Přehledy: celkem ran za rok, po měsících a po zbraních.
- Export a import dat ve formátu JSON.

## Použití

Aplikace je jediný soubor `index.html` bez závislostí. Stačí ji otevřít v prohlížeči nebo nasadit na GitHub Pages.

## Soukromí

Data se ukládají pouze v `localStorage` daného prohlížeče. Do repozitáře se nikdy nedostávají, repozitář obsahuje jen kód aplikace.
