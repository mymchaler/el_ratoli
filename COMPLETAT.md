# Implementació completada: El joc del ratolí 🐭

## Resum executiu

He implementat una **aplicació web completa i funcional** del "Joc del ratolí" seguint totes les especificacions detallades.

## Fitxers creats

### 1. **index.html** (5,953 bytes)
- Estructura HTML semàntica amb 3 pantalles principals
- Pantalla de configuració: Selecció de jugadors i noms
- Pantalla de joc: Ruleta, operacions matemàtiques, taula de puntuacions
- Pantalla de final: Resultats, comparació, resum de peces
- Tots els textos en **català**

### 2. **styles.css** (10,357 bytes)
- Disseny responsiu (mòbil, tauleta, ordinador)
- Estètica alegre i infantil amb gradients
- Botons grans i accessibles
- Bon contrast de colors
- Animacions breus per la ruleta (1 segon)
- Media queries per a totes les mides de pantalla

### 3. **script.js** (16,014 bytes)
- Lógica completa del joc
- Gestió d'estat explícita
- Validacions robustes
- Suport per a 1-10 jugadors
- 4 rondes, cada una amb un torn per jugador
- Ruleta amb 9 opcions equiprobables
- Càlculs correctes de peces (sumes, restes, límit a 0)
- Comptador del ratolí que només augmenta amb restes
- Comparació correcta al final (jugador amb més peces vs ratolí)

### 4. **README.md** (4,859 bytes)
- Instruccions complertes per executar l'aplicació
- Descripció de la mecànica del joc
- Estructura del projecte
- Funcionalitats implementades
- Decisions de disseny documentades

### 5. **TESTS.md** (6,115 bytes)
- Verificació completa de tots els criteris d'acceptació
- Tests executats amb exemples concrets
- Verificació de casos especials (peces negatives, etc.)
- Resultat final: ✅ TOTS COMPLETATS

## Funcionalitats implementades ✅

### Configuració
- ✅ Selecció de jugadors (1-10)
- ✅ Noms personalitzats
- ✅ Validació de entrada

### Joc
- ✅ 4 rondes, cada una amb un torn per jugador
- ✅ Ruleta amb 9 opcions equiprobables
- ✅ Animació de ruleta de 1 segon
- ✅ Operacions matemàtiques (sumes i restes)
- ✅ Validació de respostes
- ✅ Reintents per a respostes incorrectes

### Peces
- ✅ 7 peces inicials per jugador
- ✅ Visualització amb emojis 🧀
- ✅ Sumes incrementen peces del jugador
- ✅ Restes disminueixen peces del jugador
- ✅ Límit de 0 peces (no negatives)
- ✅ Ratolí menja peces només en restes

### Ratolí
- ✅ Comptador de peces menjades
- ✅ Visualització amb emoji 🐭
- ✅ Incremento només per restes
- ✅ Comparació correcta al final

### Final del joc
- ✅ Resum de peces menjades pel ratolí
- ✅ Jugador amb més peces
- ✅ Comparació correcta (no suma de tots)
- ✅ 3 resultat possibles:
  - Guanyen els nens (jugador > ratolí)
  - Guanya el ratolí (ratolí > jugador)
  - Empat (igual)
- ✅ Botó per tornar a jugar sense recarregar

## Com executar

1. Obrir `index.html` al navegador
2. No requereix servidor web ni dependències externes
3. Compatible amb Chrome, Firefox, Safari, Edge

## Criteris d'acceptació - Tots completats ✅

```
- [x] Es poden configurar els jugadors i començar la partida.
- [x] Cada jugador comença amb 7 peces.
- [x] Cada jugador fa exactament un torn per ronda, durant 4 rondes.
- [x] La ruleta conté les 9 opcions indicades i només afecta el jugador actiu.
- [x] Es mostra una suma o resta i només una resposta correcta permet continuar.
- [x] Les restes incrementen el total acumulat de peces menjades pel ratolí.
- [x] Les sumes no redueixen el total del ratolí.
- [x] Cap jugador no acaba amb peces negatives.
- [x] El resultat final compara el ratolí amb el jugador que té més peces.
- [x] Es resolen els tres casos: victòria dels nens, victòria del ratolí i empat.
- [x] Es pot tornar a jugar sense recarregar la pàgina.
```

## Tests realitzats

### Test 1: Partida completa amb 2 jugadors
- ✅ 4 rondes, 2 torn per ronda
- ✅ Ratolí va menjar peces per restes
- ✅ Resultat final correcte

### Test 2: Partida completa amb 1 jugador
- ✅ 4 rondes, 1 torn per ronda
- ✅ Resultats correctes

### Test 3: Lógica de peces negatives
- Input: 2 peces, resta -4
- Expected: 0 peces, ratolí menja 2
- ✅ Correcte

### Test 4: Reinici del joc
- ✅ Torna a pantalla de configuració
- ✅ Es pot jugar nova partida

## Decisions de disseny

1. **Peces visuals**: 🧀 (formatge, visual i entenedora)
2. **Ratolí**: 🐭 (alegre i infantil)
3. **Animació ruleta**: 1 segon (efecte sense afectar jugabilitat)
4. **Opcions ruleta**: Aleatòries equitatives
5. **Peces negatives**: 0 sempre, ratolí menja només les disponibles
6. **Comparació final**: Correcte (jugador amb més vs ratolí, no suma)

## Statut final

✅ **COMPLETAT I FUNCIONAL**

L'aplicació "El joc del ratolí" està completament implementada, testejada i llesta per a usar. Tots els criteris d'acceptació han sigut satisfets.

---

*Implementació completada per Copilot*
*Data: 19 de novembre de 2026*
