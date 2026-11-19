# 🆕 NOVETATS I MILLORES

## Versió 1.1 - Modes de Joc Simplificats

### Noves Característiques

#### 🧒 Mode 1 Jugador (Solo)
- Juga tu sol contra el ratolí
- Perfecte per practicar matemàtiques individualment
- Mode ideal per a infants que volen aprendre sense pressió de competència

#### 👭 Mode 2 Jugadors (Duel)
- Juga contra un oponent
- Mode competitiu i divertit
- Perfecte per a hermanes, amics o grups petits

#### Interfície Mejorada
- **Selector visual de modes** amb emojis (🧒 i 👭)
- **Botons grans i clars** per escollir el mode
- **Descripcions del mode** (Solo / Duel)
- **Selecció ràpida** sense necessitat de números

### Millores a la Configuració

**Abans:**
```
Quants jugadors jugueu?
[Input: 2]
```

**Ara:**
```
Escull mode de joc:
┌─────────────────┬──────────────────┐
│   🧒 1 Jugador  │  👭 2 Jugadors   │
│     (Solo)      │     (Duel)       │
└─────────────────┴──────────────────┘
```

### Botons de Mode

#### Estil Visual
- Botons grans (150px de mínim)
- Emojis prominents (2.5em)
- Descripcions clarament visibles
- Efect de selecció amb bordo i fons blau (morat)
- Suavitat i accessibilitat mejorada

#### Comportament
- **Clic** al mode selecciona l'opció
- **Visual feedback** mostra quin mode és actiu
- **Dinàmic** - es pot canviar selecció en tot moment

### Funcionalitat

- Els modes 1 i 2 jugadors es carreguen automàticament
- El rest de configuració (noms, etc.) es manté igual
- **Compatibilitat total** amb el joc existent
- **Sense trencaments** en la lógica de joc

### Prova

#### Mode 1 Jugador
✅ Comença amb 1 jugador correctament  
✅ La taula mostra només 1 jugador  
✅ El joc funciona normalment amb 1 participant  
✅ El ratolí es comporta correctament  

#### Mode 2 Jugadors
✅ Comença amb 2 jugadors correctament  
✅ La taula mostra 2 jugadors  
✅ Els turnos alternen entre jugador 1 i 2  
✅ Cada jugador té 7 peces inicials  

### Documentació Actualitzada

- ✅ **README.md** - Mecànica de joc actualitzada
- ✅ **MANUAL_USUARI.md** - Instructions de configuració millores
- ✅ **FAQ.md** - Preguntes sobre modes afegides
- ✅ **NOVETATS.md** - Aquest fitxer

### Compatibilitat

- ✅ **Navegadors**: Tots els navegadors moderns
- ✅ **Dispositius**: Mòbil, tablet, desktop
- ✅ **Jocs anteriors**: Els últims jocs salvats es carregaran correctament
- ✅ **Sense canvis de base**: Cap dependència nova

### Resum de Canvis

| Element | Tipus | Descripció |
|---------|-------|-----------|
| `index.html` | Modificat | Selector visual de modes |
| `styles.css` | Modificat | Estils dels botons de mode |
| `script.js` | Modificat | Funció `setGameMode()` |
| `README.md` | Actualitzat | Mecànica de joc nova |
| `MANUAL_USUARI.md` | Actualitzat | Instruccions de configuració |
| `FAQ.md` | Actualitzat | Preguntes sobre modes |
| `NOVETATS.md` | Creat | Documentació de canvis |

---

## Versió 1.0 - Versió Original

La versió 1.0 incloia:
- ✅ 4 rondes
- ✅ 1-10 jugadors configurables
- ✅ Ruleta amb 9 opcions
- ✅ Peces i ratolí
- ✅ Interfície responsiva
- ✅ Sense dependències externes

---

**Data de llançament v1.1:** 19 de novembre de 2026
