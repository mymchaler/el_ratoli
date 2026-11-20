// Estat del joc
const gameState = {
    players: [],
    currentPlayerIndex: 0,
    currentRound: 1,
    wheelValue: null,
    currentPieces: 0,
    mousePiecesEaten: 0,
    gamePhase: 'config', // 'config', 'game', 'end'
    answerAttempted: false,
};

// Elements del DOM
const configScreen = document.getElementById('configScreen');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');

const modeOnePlayerBtn = document.getElementById('modeOnePlayer');
const modeTwoPlayersBtn = document.getElementById('modeTwoPlayers');
const numPlayersInput = document.getElementById('numPlayers');
const numPlayersLabel = document.getElementById('numPlayersLabel');
const playerNamesContainer = document.getElementById('playerNamesContainer');
const startGameBtn = document.getElementById('startGameBtn');
const configError = document.getElementById('configError');

const roundNumber = document.getElementById('roundNumber');
const currentPlayerName = document.getElementById('currentPlayerName');
const mouseCount = document.getElementById('mouseCount');
const playersList = document.getElementById('playersList');
const finalPlayersList = document.getElementById('finalPlayersList');

const spinWheelBtn = document.getElementById('spinWheelBtn');
const wheelContainer = document.querySelector('.wheel-container');
const wheelSectors = document.getElementById('wheelSectors');
const wheelResultSection = document.getElementById('wheelResultSection');
const wheelResult = document.getElementById('wheelResult');

const mathSection = document.getElementById('mathSection');
const mathProblem = document.getElementById('mathProblem');
const visualOperation = document.getElementById('visualOperation');
const answerInput = document.getElementById('answerInput');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const feedbackMessage = document.getElementById('feedbackMessage');

const nextTurnSection = document.getElementById('nextTurnSection');
const nextTurnBtn = document.getElementById('nextTurnBtn');

const totalMousePieces = document.getElementById('totalMousePieces');
const winnerInfo = document.getElementById('winnerInfo');
const resultMessage = document.getElementById('resultMessage');
const playAgainBtn = document.getElementById('playAgainBtn');

// Opcions de la ruleta
const wheelOptions = [-1, -2, -3, -4, 1, 2, 3, 4];

// Estableix el mode de joc (1 o 2 jugadors)
function setGameMode(numPlayers) {
    numPlayersInput.value = numPlayers;
    
    // Actualitza els botons visuals
    if (numPlayers === 1) {
        modeOnePlayerBtn.classList.add('mode-btn-active');
        modeTwoPlayersBtn.classList.remove('mode-btn-active');
    } else {
        modeOnePlayerBtn.classList.remove('mode-btn-active');
        modeTwoPlayersBtn.classList.add('mode-btn-active');
    }
    
    // Amaga el selector de nombre de jugadors
    numPlayersLabel.style.display = 'none';
    numPlayersInput.style.display = 'none';
    
    updatePlayerNameInputs();
}
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners per mode de joc
    modeOnePlayerBtn.addEventListener('click', () => setGameMode(1));
    modeTwoPlayersBtn.addEventListener('click', () => setGameMode(2));
    
    numPlayersInput.addEventListener('change', updatePlayerNameInputs);
    numPlayersInput.addEventListener('input', updatePlayerNameInputs);
    startGameBtn.addEventListener('click', startGame);
    spinWheelBtn.addEventListener('click', spinWheel);
    checkAnswerBtn.addEventListener('click', checkAnswer);
    nextTurnBtn.addEventListener('click', nextTurn);
    playAgainBtn.addEventListener('click', resetGame);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    setGameMode(1);
    drawWheel();
});

// Actualitza els inputs de noms de jugadors
function updatePlayerNameInputs() {
    const numPlayers = parseInt(numPlayersInput.value) || 2;
    
    if (numPlayers < 1) {
        numPlayersInput.value = 1;
    } else if (numPlayers > 10) {
        numPlayersInput.value = 10;
    }

    playerNamesContainer.innerHTML = '';
    
    for (let i = 0; i < parseInt(numPlayersInput.value); i++) {
        const div = document.createElement('div');
        div.className = 'player-name-input';
        div.innerHTML = `
            <label>Jugador ${i + 1}:</label>
            <input type="text" placeholder="Nom del jugador" value="Jugador ${i + 1}" class="player-name">
        `;
        playerNamesContainer.appendChild(div);
    }
}

// Comença el joc
function startGame() {
    configError.textContent = '';
    
    const numPlayers = parseInt(numPlayersInput.value);
    if (numPlayers < 1 || numPlayers > 10) {
        configError.textContent = 'Has d\'indicar entre 1 i 10 jugadors.';
        return;
    }

    const playerNameInputs = document.querySelectorAll('.player-name');
    const playerNames = [];
    
    playerNameInputs.forEach((input, index) => {
        const name = (input && input.value && input.value.trim()) || `Jugador ${index + 1}`;
        playerNames.push(name);
    });

    // Inicialitza els jugadors
    gameState.players = playerNames.map(name => ({
        name: name,
        pieces: 7,
    }));

    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    gameState.mousePiecesEaten = 0;
    gameState.gamePhase = 'game';

    // Canvia a la pantalla de joc
    configScreen.classList.remove('active');
    gameScreen.classList.add('active');

    updateGameDisplay();
}

// Dibuixa la ruleta
function drawWheel() {
    wheelSectors.innerHTML = '';
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B195'];
    const anglePerOption = 360 / wheelOptions.length;
    
    wheelOptions.forEach((option, index) => {
        const startAngle = (index * anglePerOption) * Math.PI / 180;
        const endAngle = ((index + 1) * anglePerOption) * Math.PI / 180;
        
        const x1 = 100 + 90 * Math.cos(startAngle);
        const y1 = 100 + 90 * Math.sin(startAngle);
        const x2 = 100 + 90 * Math.cos(endAngle);
        const y2 = 100 + 90 * Math.sin(endAngle);
        
        const largeArc = anglePerOption > 180 ? 1 : 0;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`);
        path.setAttribute('fill', colors[index]);
        path.setAttribute('stroke', '#fff');
        path.setAttribute('stroke-width', '2');
        
        // Text de l'opció
        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textX = 100 + 60 * Math.cos(midAngle);
        const textY = 100 + 60 * Math.sin(midAngle);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', '#fff');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '14');
        text.textContent = (option > 0 ? '+' : '') + option;
        
        wheelSectors.appendChild(path);
        wheelSectors.appendChild(text);
    });
}

// Gira la ruleta
function spinWheel() {
    if (gameState.answerAttempted) return;
    
    // Desactiva el botó durant l'animació
    spinWheelBtn.disabled = true;
    
    // Selecciona un valor aleatori
    const randomIndex = Math.floor(Math.random() * wheelOptions.length);
    gameState.wheelValue = wheelOptions[randomIndex];
    
    // Calcula la rotació (cada sector ocupa 360/9 graus)
    const anglePerOption = 360 / wheelOptions.length;
    const targetRotation = randomIndex * anglePerOption;
    
    // Afegeix 2 rotacions completes per fer més efectiu l'spin
    const finalRotation = targetRotation + 720;
    
    wheelContainer.classList.add('spinning');
    
    setTimeout(() => {
        wheelContainer.classList.remove('spinning');
        
        // Mostra el resultat
        wheelResultSection.classList.remove('hidden');
        wheelResult.textContent = (gameState.wheelValue > 0 ? '+' : '') + gameState.wheelValue;
        
        // Mostra la secció matemàtica
        showMathProblem();
        
        // Desactiva el botó fins que s'acabi el torn
        spinWheelBtn.disabled = true;
    }, 1000);
}

// Mostra el problema matemàtic
function showMathProblem() {
    gameState.answerAttempted = true;
    gameState.currentPieces = gameState.players[gameState.currentPlayerIndex].pieces;
    
    const operation = gameState.wheelValue > 0 ? '+' : '';
    mathProblem.textContent = `${gameState.currentPieces} ${operation}${gameState.wheelValue} = ?`;
    
    renderVisualOperation(gameState.currentPieces, gameState.wheelValue);

    mathSection.classList.remove('hidden');
    answerInput.value = '';
    answerInput.focus();
    feedbackMessage.textContent = '';
    
    // Si és una resta que podria donar negativa, mostra una explicació
    if (gameState.wheelValue < 0 && gameState.currentPieces + gameState.wheelValue < 0) {
        const explanation = `Tens ${gameState.currentPieces} peces. Si en pierdes ${Math.abs(gameState.wheelValue)}, però només en tens ${gameState.currentPieces}, el ratolí només pot menjar-se les ${gameState.currentPieces} que tens. Quantes peces et queden? (Si no coneixes els números negatius, escriu 0.)`;
        feedbackMessage.classList.add('info');
        feedbackMessage.textContent = explanation;
    }
}

// Crea la representació amb reglets d'un nombre: una barra per desena i un quadrat per unitat
function createTenBar(crossedSegments) {
    const bar = document.createElement('span');
    bar.className = 'rod-ten';
    for (let i = 0; i < 10; i++) {
        const segment = document.createElement('span');
        segment.className = 'rod-segment';
        if (i >= 10 - crossedSegments) segment.classList.add('crossed');
        bar.appendChild(segment);
    }
    return bar;
}

function createUnitSquare(extraClass) {
    const square = document.createElement('span');
    square.className = 'rod-unit';
    if (extraClass) square.classList.add(extraClass);
    return square;
}

// Mostra l'operació en un sol grup de reglets:
// suma: peces que ja té (un color) + peces afegides (un altre color);
// resta: totes les peces que té, amb les que es perden ratllades.
function renderVisualOperation(pieces, wheelValue) {
    visualOperation.innerHTML = '';

    const group = document.createElement('div');
    group.className = 'rods-number';
    group.setAttribute('role', 'img');

    const tens = Math.floor(pieces / 10);
    const units = pieces % 10;

    if (wheelValue > 0) {
        for (let i = 0; i < tens; i++) group.appendChild(createTenBar(0));
        for (let i = 0; i < units; i++) group.appendChild(createUnitSquare());
        for (let i = 0; i < wheelValue; i++) group.appendChild(createUnitSquare('added'));
        group.setAttribute('aria-label', `${pieces} peces i n'afegim ${wheelValue}`);
    } else {
        const crossed = Math.min(Math.abs(wheelValue), pieces);
        const crossedUnits = Math.min(crossed, units);
        // Les peces que no surten de les unitats es treuen de l'última barra
        const crossedInTens = crossed - crossedUnits;

        for (let i = 0; i < tens; i++) {
            group.appendChild(createTenBar(i === tens - 1 ? crossedInTens : 0));
        }
        for (let i = 0; i < units; i++) {
            group.appendChild(createUnitSquare(i >= units - crossedUnits ? 'crossed' : ''));
        }
        group.setAttribute('aria-label', `${pieces} peces i en treiem ${crossed}`);
    }

    visualOperation.appendChild(group);
}

// Comprova la resposta
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    
    if (isNaN(userAnswer)) {
        feedbackMessage.classList.remove('correct');
        feedbackMessage.classList.add('incorrect');
        feedbackMessage.textContent = 'Si us plau, escriu un número.';
        return;
    }
    
    const correctAnswer = gameState.currentPieces + gameState.wheelValue;
    // Si el resultat és negatiu, també s'accepta 0 (els nens encara no coneixen els negatius)
    const isCorrect = userAnswer === correctAnswer || (correctAnswer < 0 && userAnswer === 0);
    
    if (isCorrect) {
        // Resposta correcta
        feedbackMessage.classList.remove('incorrect', 'info');
        feedbackMessage.classList.add('correct');
        feedbackMessage.textContent = '¡Correcte! Felicitats! 🎉';
        
        // Aplica la operació al recompte de peces
        applyOperation();
        
        // Desactiva l'input i el botó
        answerInput.disabled = true;
        checkAnswerBtn.disabled = true;
        
        // Mostra el botó Següent torn
        setTimeout(() => {
            nextTurnSection.classList.remove('hidden');
            nextTurnBtn.focus();
        }, 1500);
    } else {
        // Resposta incorrecta
        feedbackMessage.classList.remove('correct', 'info');
        feedbackMessage.classList.add('incorrect');
        feedbackMessage.textContent = `Incorrecte. Prova-ho de nou!`;
        answerInput.select();
    }
}

// Aplica la operació al joc
function applyOperation() {
    const player = gameState.players[gameState.currentPlayerIndex];
    const newPieces = player.pieces + gameState.wheelValue;
    
    if (gameState.wheelValue < 0) {
        // La resta
        const piecesLost = Math.min(Math.abs(gameState.wheelValue), player.pieces);
        gameState.mousePiecesEaten += piecesLost;
        player.pieces = Math.max(0, newPieces);
    } else {
        // Suma
        player.pieces = newPieces;
    }
}

// Siguiente torn
function nextTurn() {
    // Avança al següent jugador
    gameState.currentPlayerIndex++;
    
    // Si tots els jugadors han jugat, avança a la següent ronda
    if (gameState.currentPlayerIndex >= gameState.players.length) {
        gameState.currentPlayerIndex = 0;
        gameState.currentRound++;
        
        // Si hem complert les 4 rondes, acaba el joc
        if (gameState.currentRound > 4) {
            endGame();
            return;
        }
    }
    
    // Resetejarles variables del torn
    gameState.wheelValue = null;
    gameState.answerAttempted = false;
    
    // Neteja la interfície
    wheelResultSection.classList.add('hidden');
    wheelResult.textContent = '-';
    
    mathSection.classList.add('hidden');
    mathProblem.textContent = '-';
    visualOperation.innerHTML = '';
    answerInput.value = '';
    answerInput.disabled = false;
    checkAnswerBtn.disabled = false;
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('correct', 'incorrect', 'info');
    
    nextTurnSection.classList.add('hidden');
    
    spinWheelBtn.disabled = false;
    
    updateGameDisplay();
}

// Actualitza la pantalla de joc
function updateGameDisplay() {
    // Actualitza la ronda i el jugador actual
    roundNumber.textContent = gameState.currentRound;
    currentPlayerName.textContent = gameState.players[gameState.currentPlayerIndex].name;
    mouseCount.textContent = gameState.mousePiecesEaten;
    
    // Actualitza la taula de puntuació
    playersList.innerHTML = '';
    gameState.players.forEach((player, index) => {
        const isActive = index === gameState.currentPlayerIndex;
        const card = document.createElement('div');
        card.className = `player-card ${isActive ? 'active' : ''}`;
        
        // Crea les peces visuals
        let piecesVisual = '';
        for (let i = 0; i < player.pieces; i++) {
            piecesVisual += '🧀';
        }
        
        card.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="player-pieces">${player.pieces} peces</div>
            <div class="pieces-visual">${piecesVisual || '(0)'}</div>
        `;
        playersList.appendChild(card);
    });
    
    // Enfoca el botó de girar ruleta
    spinWheelBtn.focus();
}

// Acaba el joc
function endGame() {
    gameState.gamePhase = 'end';
    
    // Canvia a la pantalla de final
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    
    // Calcula el guanyador
    let maxPieces = Math.max(...gameState.players.map(p => p.pieces));
    const winnersNames = gameState.players
        .filter(p => p.pieces === maxPieces)
        .map(p => p.name);
    
    // Mostra el resum final
    totalMousePieces.textContent = gameState.mousePiecesEaten;
    
    if (winnersNames.length === 1) {
        winnerInfo.textContent = `${winnersNames[0]} (${maxPieces} peces)`;
    } else {
        winnerInfo.textContent = `${winnersNames.join(', ')} (${maxPieces} peces cadascú)`;
    }
    
    // Determina el resultat
    if (maxPieces > gameState.mousePiecesEaten) {
        resultMessage.textContent = '¡Guanyen els nens! 🎉';
        resultMessage.style.color = '#27ae60';
    } else if (gameState.mousePiecesEaten > maxPieces) {
        resultMessage.textContent = '¡Guanya el ratolí! 🐭';
        resultMessage.style.color = '#e74c3c';
    } else {
        resultMessage.textContent = '¡Empat! 🤝';
        resultMessage.style.color = '#f39c12';
    }
    
    // Mostra la taula de puntuacions finals
    finalPlayersList.innerHTML = '';
    gameState.players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        
        let piecesVisual = '';
        for (let i = 0; i < player.pieces; i++) {
            piecesVisual += '🧀';
        }
        
        card.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="player-pieces">${player.pieces} peces</div>
            <div class="pieces-visual">${piecesVisual || '(0)'}</div>
        `;
        finalPlayersList.appendChild(card);
    });
    
    playAgainBtn.focus();
}

// Reinicia el joc
function resetGame() {
    gameState.players = [];
    gameState.currentPlayerIndex = 0;
    gameState.currentRound = 1;
    gameState.wheelValue = null;
    gameState.currentPieces = 0;
    gameState.mousePiecesEaten = 0;
    gameState.gamePhase = 'config';
    gameState.answerAttempted = false;
    
    // Neteja la interfície
    configError.textContent = '';
    wheelResultSection.classList.add('hidden');
    mathSection.classList.add('hidden');
    nextTurnSection.classList.add('hidden');
    feedbackMessage.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    checkAnswerBtn.disabled = false;
    spinWheelBtn.disabled = false;
    
    // Canvia a la pantalla de configuració
    endScreen.classList.remove('active');
    configScreen.classList.add('active');
    
    // Enfoca el botó de començar
    startGameBtn.focus();
}
