# El joc del ratolí 🐭

Una aplicació web infantil, visual i intuïtiva per jugar a sumar i restar amb peces.

## Descripció

**El joc del ratolí** és un joc educatiu dissenyat per a infants que practiquen operacions matemàtiques bàsiques (sumes i restes). Els jugadors competeixen en quatre rondes on han de resoldre operacions matemàtiques determinades per una ruleta animada.

### Mecànica del joc

- **Configuració**: Escull entre **1 jugador** (Solo) o **2 jugadors** (Duel).
  - Pots jugar soles contra el ratolí.
  - Pots jugar amb un oponent.
  - Per a 3+ jugadors, usa el selector manual de jugadors.
- **Noms de jugadors**: Pots personalitzar els noms dels jugadors (opcional).
- **Començament**: Cada jugador comença amb **7 peces**.
- **Rondes**: La partida consta de **4 rondes**. Cada ronda inclou un torn per a cada jugador.
- **Torn**: En cada torn:
  1. El jugador gira una ruleta que genera un valor entre -4 i +4 (sense el 0).
  2. Resol l'operació matemàtica (peces actuals + valor de la ruleta).
  3. Si la resposta és correcta, les seves peces s'actualitzen.
  4. Si és incorrecta, pot tornar a provar-ho.

### Regles

- **Restes**: Quan un jugador perd peces per una resta, el ratolí se les menja (s'incrementa el comptador total).
- **Sumes**: Quan un jugador guanya peces, aquestes s'afegeixen i no es resten del comptador del ratolí.
- **Límit zero**: Cap jugador no pot acabar amb peces negatives. Si una operació ho provocaria, el jugador queda amb 0 peces i el ratolí només menja les que tenia.

### Final del joc

Després de les 4 rondes, es comparen:
- **Total de peces menjades pel ratolí** vs. **Nombre de peces del jugador amb més peces**
- **Resultat**:
  - Si el jugador amb més peces té més que el ratolí: **Guanyen els nens! 🎉**
  - Si el ratolí ha menjat més: **Guanya el ratolí! 🐭**
  - Si la quantitat és igual: **Empat! 🤝**

## Com executar l'aplicació

1. **Requisits**: Necessites un navegador web modern (Chrome, Firefox, Safari, Edge, etc.).

2. **Passos**:
   - Obrir l'arxiu `index.html` al navegador (doble-clic o arrossega a la finestra del navegador).
   - No es requereix servidor web ni instal·lació de dependències.

3. **Navegació**:
   - Fes clic o toca els botons per interactuar.
   - Pots usar el teclat (Enter per validar resposta, Tab per navegar).

## Estructura del projecte

```
El joc del ratolí/
├── index.html          # Estructura HTML
├── styles.css          # Estils CSS
├── script.js           # Lògica del joc
└── README.md           # Aquest arxiu
```

## Funcionalitats

✅ **Configuració de jugadors**: 1-10 jugadors amb noms personalitzats.
✅ **Ruleta animada**: 8 opcions equiprobables (-1, -2, -3, -4, +1, +2, +3, +4).
✅ **Operació amb reglets**: cada nombre es mostra amb barres (desenes) i quadrats (unitats), a més de l'operació numèrica.
✅ **Operacions matemàtiques**: Suma i resta amb validació de resposta.
✅ **Comptador del ratolí**: Registra les peces menjades per restes.
✅ **4 rondes**: Cada jugador juga exactament una vegada per ronda.
✅ **Pantalla final**: Resum de peces per jugador i determinació del guanyador.
✅ **Responsiu**: Funciona a mòbil, tauleta i ordinador.
✅ **Accessibilitat**: Text en català, botons grans, contrast adequat.
✅ **Reinici**: Botó per tornar a jugar sense recarregar la pàgina.

## Decisions de disseny

1. **Peces visuals**: Es representen amb l'emoji 🧀 per fer-les més visuals i entenedores.
2. **Ratolí**: Representat amb l'emoji 🐭.
3. **Colors**: S'utilitza un gradient de morat per la capçalera i botons, amb colors contrastants per als elements visuals.
4. **Animacions**: La ruleta gira durant 1 segon per fer-la més interessant sense afectar l'usabilitat.
5. **Validació de peces negatives**: Si la resta supera les peces disponibles, el jugador queda amb 0 i només el ratolí menja les que tenia.

## Compatibilitat

- Chrome/Chromium (versió 60+)
- Firefox (versió 55+)
- Safari (versió 11+)
- Edge (versió 79+)

## Nota sobre la lògica

L'aplicació gestiona correctament:
- Tots els turnos de tots els jugadors (4 rondes × nombre de jugadors).
- Les peces negatives (quedant a 0 sempre).
- El comptador acumulat del ratolí.
- La comparació correcta entre el màxim del jugador i el total del ratolí.
- Els casos d'empat.

## Instruccions per a desenvolupadors

El codi està organitzat en tres arxius separats:

- **index.html**: Contiene la estructura de les tres pantalles (configuració, joc, final).
- **styles.css**: Estils responsius amb media queries per a dispositius petits.
- **script.js**: Lògica del joc amb funcions separades per cada acció.

Per modificar el joc:
1. Els valors de la ruleta es troben en l'array `wheelOptions`.
2. Els colors de la ruleta es personalitzen a la funció `drawWheel()`.
3. La durada de l'animació (1000ms) es pot ajustar a la funció `spinWheel()`.

## Llicència

Creat com a projecte educatiu per practicar HTML, CSS i JavaScript.

---

**Disfruita jugant! 🐭🧀**
