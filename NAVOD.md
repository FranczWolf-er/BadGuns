# BadGuns – záloha na OneDrive

Data jsou v zařízení a jen se zálohují na OneDrive do souboru `badguns-backup.json`
ve složce aplikace (`Apps/<název registrace>/`). Aplikace nevidí nic jiného na vašem OneDrive.

## Nastavení (jednorázově)

BadGuns zatím používá stejnou registraci aplikace jako BadCars (client ID v `config.js`).
Stačí do ní přidat adresu BadGuns:

1. Otevřete https://entra.microsoft.com → Identity → Applications → **App registrations** → aplikace **BadCars**.
2. **Authentication** → u platformy **Single-page application** klikněte na **Add URI** a vložte přesně
   `https://franczwolf-er.github.io/BadGuns/` (včetně velkých písmen a lomítka na konci) → **Save**.

Záloha pak leží vedle zálohy BadCars ve složce `Apps/BadCars/` jako `badguns-backup.json`.

### Vlastní registrace (volitelné)
Chcete-li mít zálohu ve vlastní složce `Apps/BadGuns/`, vytvořte novou registraci podle NAVOD.md v BadCars
(název `BadGuns`, Redirect URI výše, oprávnění `Files.ReadWrite.AppFolder` a `offline_access`)
a její **Application (client) ID** vložte do `config.js`.

## Použití
1. Aplikaci si přidejte na plochu a otevřete ji odtud (na iPhonu má aplikace z plochy vlastní úložiště).
2. Nastavení (⚙) → **Připojit OneDrive** → přihlásit a potvrdit oprávnění.
3. Na dalším zařízení stačí totéž. Data se sloučí oběma směry a zůstanou stejná na všech zařízeních.

## Jak to funguje
- Po každé změně se data do dvou sekund zazálohují. Stav je vidět v horní liště (☁ OneDrive, ⟳ zálohuji…, ⚠).
- Záznamy se slučují, nic se nepřepíše starším stavem. Smazaný záznam se pamatuje, aby se ze zálohy nevrátil.
- Ukázková data se nezálohují.
- Přihlášení u webových aplikací vydrží zhruba 24 hodin. Pak se nahoře objeví „Přihlášení vypršelo“
  a klepnutí na **Přihlásit** ho obnoví (obvykle bez hesla). Změny mezitím zůstávají v zařízení.

## Když něco nejde
- `AADSTS50011` (redirect URI): adresa v registraci se musí přesně shodovat s adresou aplikace, včetně `/BadGuns/`.
- `AADSTS700016` / neplatný client ID: zkontrolujte `config.js`.
