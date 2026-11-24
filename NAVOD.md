# BadGuns – záloha na OneDrive

Data jsou v zařízení a jen se zálohují na OneDrive do souboru `badguns-backup.json`
ve složce aplikace (`Apps/<název registrace>/`). Aplikace nevidí nic jiného na vašem OneDrive.

## Nastavení (hotové)

Aplikace má vlastní registraci **BadGuns** v Microsoft Entra (client ID v `config.js`):
- Supported account types: *Accounts in any organizational directory and personal Microsoft accounts*,
- Redirect URI (Single-page application): `https://franczwolf-er.github.io/BadGuns/`,
- oprávnění Microsoft Graph (Delegated): `Files.ReadWrite.AppFolder`, `offline_access`.

Záloha každého uživatele leží na jeho vlastním OneDrive ve složce `Apps/BadGuns/`.
Při změně adresy aplikace je potřeba upravit Redirect URI v registraci.

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
