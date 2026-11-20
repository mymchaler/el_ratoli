# El joc del ratolí: especificacions per a GitHub Copilot

## Objectiu
Crea una aplicació web infantil, visual, intuïtiva i en català anomenada **El joc del ratolí**. Ha de ser completament funcional i permetre jugar una partida de quatre rondes amb diversos jugadors. L'objectiu educatiu és practicar sumes i restes amb peces.

## Tecnologia i lliurament
- Implementa una primera versió amb **HTML, CSS i JavaScript**, sense backend ni dependències externes, que es pugui executar obrint `index.html` al navegador.
- Organitza el codi en fitxers separats (`index.html`, `styles.css`, `script.js`) i afegeix un `README.md` amb instruccions.
- Interfície adaptable a mòbil, tauleta i ordinador, amb botons grans, contrast adequat i elements accessibles.
- Tots els textos visibles han d'estar en català.

## Configuració inicial
1. Mostra el títol **El joc del ratolí**.
2. Permet indicar el nombre de jugadors (mínim 1) i els seus noms. Per defecte, proposa 2 jugadors. Valida les entrades i evita una quantitat desmesurada de jugadors.
3. Cada jugador comença amb **7 peces**.
4. El ratolí comença amb **0 peces menjades**.
5. La partida consta de **4 rondes**. Una ronda acaba quan tots els jugadors han completat un torn.
6. Mostra les peces de cada jugador amb representacions visuals senzilles i el comptador del ratolí.

## Ruleta i torns
- En cada torn, el jugador actiu gira una ruleta animada amb exactament aquestes **8 opcions equiprobables**: `-1`, `-2`, `-3`, `-4`, `+1`, `+2`, `+3`, `+4`.
- Selecciona el resultat aleatòriament i mostra clarament el valor obtingut.
- La ruleta només es pot girar una vegada per torn; desactiva-la fins que el jugador resolgui l'operació.
- La ruleta afecta **només el jugador que està fent el torn**, no tots els jugadors simultàniament.
- Mostra l'operació matemàtica amb el nombre actual de peces i el valor de la ruleta, per exemple `7 - 2 = ?`.
- El jugador ha d'introduir la resposta i prémer **Comprova**.
- Si la resposta és incorrecta, mostra un missatge amable i permet tornar-ho a provar, sense avançar de torn ni modificar les peces.
- Si és correcta, actualitza el recompte de peces, mostra un missatge de felicitació i habilita **Següent torn**.
- A més de l'operació numèrica, mostra-la visualment amb reglets (una barra per cada desena i un quadrat per cada unitat) en un sol grup: en una suma, les peces que ja té el jugador d'un color i les afegides d'un altre; en una resta, totes les peces del jugador amb les que es perden ratllades.
- Exemple: 7 peces, surt `-2` → `7 - 2 = 5`; més endavant surt `+3` → `5 + 3 = 8`.

## Peces i ratolí
- Quan un jugador perd peces per una resta, **el ratolí se les menja**: augmenta el comptador acumulat de peces menjades pel ratolí en el nombre de peces realment perdudes.
- Quan un jugador guanya peces per una suma, aquestes s'afegeixen al jugador i **no es resten** del comptador del ratolí.
- **Regla per evitar peces negatives (supòsit explícit):** si surt una resta superior a les peces disponibles, el jugador es queda amb 0 peces i el ratolí només menja les peces que quedaven. Per exemple, amb 2 peces i `-4`, mostra `2 - 4` com a repte però explica que no es poden perdre més de 2 peces. Per evitar una operació aritmètica amb resultat contradictori, en aquest cas demana la resposta matemàtica `-2`, però accepta també `0` com a resposta vàlida (els infants encara no han treballat els negatius), i després aplica el límit de 0 peces al marcador. Mostra una explicació infantil clara. Mantén separats el resultat matemàtic i el recompte final de peces.

## Final de partida
Després que **tots els jugadors** hagin completat el torn de la ronda 4:
1. Calcula i mostra el **total de peces menjades pel ratolí** durant tota la partida.
2. Calcula i mostra el **nombre de peces del jugador que en té més**, juntament amb el seu nom (si hi ha empat entre jugadors, mostra els noms empatats).
3. Compara aquests dos valors:
   - Si el màxim dels jugadors és **superior** al total del ratolí: **Guanyen els nens!**
   - Si el total del ratolí és **superior** al màxim dels jugadors: **Guanya el ratolí!**
   - **Supòsit per a l'empat:** si els valors són iguals, mostra **Empat!**
4. Mostra un resum final de les peces de cada jugador i un botó **Torna a jugar**, que reiniciï completament la partida.

## Experiència visual
- Estètica alegre i infantil, sense sobrecarregar la pantalla.
- Una ruleta circular amb sectors visibles i un indicador de resultat.
- Icones o dibuixos de peces i d'un ratolí simpàtic.
- Indicador permanent de **Ronda X de 4** i del jugador actiu.
- Animacions breus i opcionals, sense impedir-ne l'ús amb teclat.
- El jugador ha de veure clarament què ha de fer en cada moment.

## Estat i validacions
- Gestiona l'estat de la partida de manera explícita: jugadors, peces de cada jugador, jugador actiu, ronda, valor de ruleta, fase del torn i total menjat pel ratolí.
- No permetis saltar-se la resposta, duplicar un gir, validar repetidament la mateixa operació ni avançar més enllà de la quarta ronda.
- Valida que la resposta introduïda sigui un enter i tracta correctament els nombres negatius.
- Evita errors si es prem diverses vegades un botó durant una animació.
- En reiniciar, tots els jugadors tornen a 7 peces i el ratolí a 0.

## Criteris d'acceptació
- [ ] Es poden configurar els jugadors i començar la partida.
- [ ] Cada jugador comença amb 7 peces.
- [ ] Cada jugador fa exactament un torn per ronda, durant 4 rondes.
- [ ] La ruleta conté les 8 opcions indicades i només afecta el jugador actiu.
- [ ] Es mostra una suma o resta i només una resposta correcta permet continuar.
- [ ] Les restes incrementen el total acumulat de peces menjades pel ratolí.
- [ ] Les sumes no redueixen el total del ratolí.
- [ ] Cap jugador no acaba amb peces negatives.
- [ ] El resultat final compara el ratolí amb el jugador que té més peces, no amb la suma de tots els jugadors.
- [ ] Es resolen els tres casos: victòria dels nens, victòria del ratolí i empat.
- [ ] Es pot tornar a jugar sense recarregar la pàgina.

## Instrucció final per a Copilot
Implementa l'aplicació completa, no només un prototip visual. Genera tots els fitxers necessaris, comprova la lògica dels torns i els càlculs, i explica breument com executar-la. Si hi ha decisions de disseny no especificades, tria l'opció més simple i adequada per a infants i documenta-la al README.
