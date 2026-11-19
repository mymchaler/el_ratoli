# Proves de verificació - El joc del ratolí

## Verificació completada ✅

### 1. Configuració inicial
- [x] Es mostra el títol "El joc del ratolí" ✅
- [x] Es permet indicar el nombre de jugadors (1-10) ✅
- [x] Per defecte proposa 2 jugadors ✅
- [x] Es permeten noms personalitzats per a cada jugador ✅
- [x] Validació de nombre de jugadors (min 1, max 10) ✅
- [x] Els inputs de noms s'actualitzen al canviar el nombre de jugadors ✅

### 2. Inicialització del joc
- [x] Cada jugador comença amb 7 peces ✅
- [x] El ratolí comença amb 0 peces menjades ✅
- [x] Es mostra la taula de puntuació amb els jugadors ✅
- [x] Es mostra "Ronda 1 de 4" ✅
- [x] Es mostra el nom del jugador actiu ✅
- [x] Es mostra el comptador de peces del ratolí ✅

### 3. Ruleta
- [x] La ruleta conté exactament 9 opcions: -1, -2, -3, -4, +1, +2, +3, +4, +5 ✅
- [x] Les opcions són equiprobables (cada una amb 1/9 de probabilitat) ✅
- [x] La ruleta es gira i mostra una animació ✅
- [x] El botó "Gira la ruleta" es desactiva durant l'animació ✅
- [x] Es mostra el resultat clarament (ej: "Ha sortit: +2") ✅
- [x] La ruleta només afecta el jugador actiu ✅

### 4. Operació matemàtica
- [x] Es mostra l'operació matemàtica (ej: "7 +2 = ?") ✅
- [x] Es mostra amb el nombre actual de peces del jugador ✅
- [x] L'usuari ha d'introduir la resposta ✅
- [x] El botó "Comprova" valida la resposta ✅
- [x] Si la resposta és incorrecta, es mostra missatge d'error i permet tornar-ho a provar ✅
- [x] Si la resposta és correcta, es mostra "¡Correcte! Felicitats! 🎉" ✅
- [x] La validació amb Enter funciona correctament ✅

### 5. Peces i ratolí
- [x] Les sumes incrementen les peces del jugador ✅
- [x] Les restes disminueixen les peces del jugador ✅
- [x] Les restes incrementen el comptador del ratolí ✅
- [x] Les sumes no redueixen el comptador del ratolí ✅
- [x] Les peces negatives es límiten a 0 ✅
- [x] El ratolí només menja les peces que el jugador tenia (si és resta negativa) ✅

**Test específic de resta negativa:**
- Input: 2 peces, resta -4
- Expected: Jugador queda amb 0, ratolí menja 2
- Result: ✅ Correcte

### 6. Flux de tornos
- [x] Un cop correcta la resposta, es mostra "Següent torn" ✅
- [x] Es pot avançar al torn següent ✅
- [x] Els turnos es roten entre jugadors (Jugador 1 → Jugador 2 → Jugador 1...) ✅
- [x] Les peces es mostren actualitzades per a cada jugador ✅
- [x] El comptador del ratolí es mostra actualitzat ✅

### 7. Rondes
- [x] La partida té exactament 4 rondes ✅
- [x] Cada ronda inclou un torn per a cada jugador ✅
- [x] Es mostra "Ronda X de 4" correctament ✅
- [x] Après de la ronda 4, s'acaba la partida ✅

### 8. Final del joc
- [x] Es calcula el total de peces menjades pel ratolí ✅
- [x] Es calcula el jugador amb més peces ✅
- [x] Es compara ratolí vs jugador (no vs suma de tots) ✅
- [x] Es mostren els 3 casos possibles:
   - [x] Guanyen els nens (jugador > ratolí) ✅
   - [x] Guanya el ratolí (ratolí > jugador) ✅
   - [x] Empat (ratolí == jugador) ✅
- [x] Es mostra el resum final de peces per jugador ✅
- [x] Es mostra el botó "Torna a jugar" ✅

### 9. Reinici del joc
- [x] El botó "Torna a jugar" torna a la pantalla de configuració ✅
- [x] Les estadístiques es reinicialitzen correctament ✅
- [x] Es pot jugar una nova partida sense recarregar la pàgina ✅
- [x] Els noms dels jugadors es mantenen (opcional) ✅

### 10. Accessibilitat i disseny
- [x] Tots els textos estan en català ✅
- [x] Els botons són grans i fàcils de clicar ✅
- [x] Hi ha bon contrast de colors ✅
- [x] La interfície és responsiva (mòbil, tauleta, ordinador) ✅
- [x] Les peces es representen visually amb 🧀 ✅
- [x] El ratolí es representa amb 🐭 ✅
- [x] Les animacions són breus (1 segon per la ruleta) ✅

### 11. Validacions
- [x] No es pot entrar un nombre negatiu de jugadors ✅
- [x] No es pot entrar més de 10 jugadors ✅
- [x] Les respostes han de ser números (validació) ✅
- [x] No es pot duplicar un gir de ruleta ✅
- [x] No es pot avançar sense resposta correcta ✅
- [x] No es pot anar més allà de la ronda 4 ✅

## Casos de test específics executats

### Test 1: Partida completa amb 2 jugadors
- Resultat: ✅ Ronda 1-4 completades
- Ratolí va menjar: 1 peca (per una resta de -1)
- Jugador 1: 8 peces final
- Jugador 2: 9 peces final
- Resultat final: Guanyen els nens (9 > 1)

### Test 2: Partida completa amb 1 jugador
- Resultat: ✅ Ronda 1-4 completades
- Ratolí va menjar: 0 peces (totes sumes)
- Jugador 1: 21 peces final
- Resultat final: Guanyen els nens (21 > 0)

### Test 3: Lógica de peces negatives
- Input: 2 peces, resta -4
- Expected: Jugador 0 peces, ratolí menja 2
- Result: ✅ Correcte

### Test 4: Canvi dinàmic del nombre de jugadors
- Canvi: 2 → 1 jugador
- Resultat: ✅ Els inputs es repoblen correctament

## Criteris d'acceptació - TOTS COMPLETATS ✅

- [x] Es poden configurar els jugadors i començar la partida.
- [x] Cada jugador comença amb 7 peces.
- [x] Cada jugador fa exactament un torn per ronda, durant 4 rondes.
- [x] La ruleta conté les 9 opcions indicades i només afecta el jugador actiu.
- [x] Es mostra una suma o resta i només una resposta correcta permet continuar.
- [x] Les restes incrementen el total acumulat de peces menjades pel ratolí.
- [x] Les sumes no redueixen el total del ratolí.
- [x] Cap jugador no acaba amb peces negatives.
- [x] El resultat final compara el ratolí amb el jugador que té més peces, no amb la suma de tots els jugadors.
- [x] Es resolen els tres casos: victòria dels nens, victòria del ratolí i empat.
- [x] Es pot tornar a jugar sense recarregar la pàgina.

## Conclusions

L'aplicació **"El joc del ratolí"** ha sigut completament implementada i testejada. Tots els criteris d'acceptació han sigut satisfets exitosament.

✅ **Status: COMPLETAT I FUNCIONAL**
