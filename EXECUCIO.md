# 🎮 El joc del ratolí - Guia d'Execució

## ✅ Implementació Completada

La aplicació **"El joc del ratolí"** ha sigut completament implementada seguint totes les especificacions detallades en el fitxer `joc_del_ratoli_especificacions.md`.

## 📁 Estructura del Projecte

```
El joc del ratolí/
├── index.html                       # Estructura HTML
├── styles.css                       # Estils CSS responsivos
├── script.js                        # Lógica del joc
├── README.md                        # Instruccions bàsiques
├── joc_del_ratoli_especificacions.md # Especificacions originals
├── TESTS.md                         # Proves de verificació
├── VERIFICACIO_VISUAL.md            # Verificació visual
└── COMPLETAT.md                     # Document de completació
```

## 🚀 Com Executar l'Aplicació

### Opció 1: Obrir des del Navegador (Recomanat)
1. Obrir l'explorador de fitxers
2. Navegar a la carpeta del projecte: `C:\Users\A145685\mi\apps\ratoli`
3. Fer doble-clic al fitxer `index.html`
4. L'aplicació es carregarà al navegador per defecte

### Opció 2: Arrossegar a la Finestra del Navegador
1. Obrir un navegador web (Chrome, Firefox, Safari, Edge, etc.)
2. Arrossegar el fitxer `index.html` a la finestra del navegador

### Opció 3: Accedir per URL
1. Obrir el navegador
2. Escriure a la barra d'adreces: `file:///C:/Users/A145685/mi/apps/ratoli/index.html`
3. Prémer Enter

## 🎮 Com Jugar

### 1. Configuració
- Indicar el nombre de jugadors (1-10)
- Escriure els noms dels jugadors
- Fer clic a "Comença a jugar!"

### 2. Jugabilitat
- **Ronda**: Es mostren les 4 rondes (1-4)
- **Torn**: Cada jugador juga en ordre
- **Ruleta**: Fer clic a "Gira la ruleta" per obtenir un valor
- **Operació**: Resoldre l'operació matemàtica (suma o resta)
- **Resposta**: Escriure el resultat i fer clic a "Comprova"
- **Validació**: Si és correcta, es mostra "¡Correcte! Felicitats! 🎉"
- **Seguent**: Fer clic a "Següent torn" per continuar

### 3. Final del Joc
- Es mostra el resultat final
- 3 casos possibles:
  - **Guanyen els nens**: Si el jugador amb més peces > peces menjades pel ratolí
  - **Guanya el ratolí**: Si peces menjades > jugador amb més peces
  - **Empat**: Si els valors són iguals
- Fer clic a "Torna a jugar" per jugar una nova partida

## 📊 Regles del Joc

### Peces
- Cada jugador comença amb **7 peces**
- Sumes incrementen les peces del jugador
- Restes disminueixen les peces del jugador
- Cap jugador pot tenir peces negatives (límit: 0)

### Ratolí
- Comença amb **0 peces menjades**
- Menja peces quan un jugador perd (resta)
- No menja peces quan un jugador guanya (suma)
- Si la resta dona negativa, només menja les peces disponibles

### Ruleta
- Conté 9 opcions equiprobables:
  - Negatives: -1, -2, -3, -4
  - Positives: +1, +2, +3, +4, +5
- Cada jugador gira una vegada per torn
- La ruleta afecta només el jugador actiu

### Partida
- **4 rondes totals**
- Cada ronda: Un torn per cada jugador
- 2 jugadors = 8 turnos totals (2 × 4)
- 1 jugador = 4 turnos totals (1 × 4)

## 💻 Requisits del Sistema

- **Navegador web**: Chrome, Firefox, Safari, Edge (versions modernes)
- **Internet**: No necessari (funciona offline)
- **Dependències**: Cap (HTML, CSS, JavaScript pur)
- **Pantalla**: Mòbil, tauleta o ordinador

## ⚙️ Funcionalitats Implementades

✅ Configuració de 1-10 jugadors
✅ Noms personalitzats
✅ 4 rondes, cada una amb un torn per jugador
✅ Ruleta animada amb 9 opcions
✅ Validació de respostes (correcte/incorrecte)
✅ Càlculs de peces (sumes, restes, límit a 0)
✅ Comptador del ratolí que només augmenta amb restes
✅ Comparació correcta al final (jugador vs ratolí, no suma)
✅ 3 casos de resultat (victoria, derrota, empat)
✅ Reinici sense recarregar la pàgina
✅ Interfície responsiva (mòbil, tauleta, ordinador)
✅ Accesibilitat (botons grans, bon contrast, tots els textos en català)

## 📝 Criteris d'Acceptació - Tots Completats ✅

| Criteri | Status |
|---------|--------|
| Es poden configurar els jugadors i començar la partida | ✅ |
| Cada jugador comença amb 7 peces | ✅ |
| Cada jugador fa exactament un torn per ronda, durant 4 rondes | ✅ |
| La ruleta conté les 9 opcions indicades | ✅ |
| La ruleta només afecta el jugador actiu | ✅ |
| Es mostra una suma o resta i només resposta correcta permet continuar | ✅ |
| Les restes incrementen les peces menjades pel ratolí | ✅ |
| Les sumes no redueixen les peces del ratolí | ✅ |
| Cap jugador no acaba amb peces negatives | ✅ |
| El resultat final compara ratolí vs jugador (no suma de tots) | ✅ |
| Es resolen els 3 casos possibles | ✅ |
| Es pot tornar a jugar sense recarregar la pàgina | ✅ |

## 🐛 Problemes Resolts

1. **Event listener d'actualització de noms**: Afegit `input` event per als inputs de nombre de jugadors
2. **Validació de noms buits**: Millorat amb verificació segura de `input.value`
3. **Actualització de comptador del ratolí**: Verificat que es mostra correctament al canviar de torn
4. **Lógica de peces negatives**: Verificat que funciona correctament (límit a 0, ratolí menja només disponibles)

## 📱 Responsivitat Testejada

- ✅ Desktop (1000px+)
- ✅ Tablet (768px-999px)
- ✅ Mòbil (480px-767px)
- ✅ Ultra-mòbil (<480px)

## 🎨 Interfície Visual

- **Colors principals**: Gradient morat (#667eea → #764ba2)
- **Accents**: Verd (correcte), Vermell (error), Naranja (empat)
- **Tipografia**: Segoe UI (sans-serif)
- **Botons**: Grans (mínimament 16px), amb efectes hover
- **Emojis**: 🧀 (peces), 🐭 (ratolí)
- **Animacions**: Ruleta 1 segon, transicions suaus

## 📚 Documentació

Tots els documents de suport estan inclosos:

1. **README.md**: Instruccions de base
2. **TESTS.md**: Proves de verificació completa
3. **VERIFICACIO_VISUAL.md**: Descripció detallada de la interfície
4. **COMPLETAT.md**: Resum de la implementació
5. **joc_del_ratoli_especificacions.md**: Especificacions originals (referència)

## 🎯 Nodes Finals

L'aplicació **"El joc del ratolí"** és:
- ✅ **Completa**: Tots els requisits implementats
- ✅ **Funcional**: Testejada extensivament
- ✅ **Accessible**: Interfície intuïtiva per a infants
- ✅ **Responsiva**: Compatible amb totes les mides de pantalla
- ✅ **Documentada**: Instruccions clares
- ✅ **Llesta per a usar**: Obrir i jugar

---

**Data d'implementació**: 19 de novembre de 2026
**Status**: ✅ COMPLETAT I VERIFICAT
**Enllaç d'execució**: `file:///C:/Users/A145685/mi/apps/ratoli/index.html`

¡Disfruita jugant! 🐭🧀
