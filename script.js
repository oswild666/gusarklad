// Эзотерический перкуссионный секвенсор
// (Esoteric Percussion Sequencer)

console.log("Скрипт загружен.");

// В следующих шагах здесь будет основная логика.

const NOTE_TO_MIDI = {
    'C0': 12, 'C#0': 13, 'Db0': 13, 'D0': 14, 'D#0': 15, 'Eb0': 15, 'E0': 16, 'F0': 17, 'F#0': 18, 'Gb0': 18, 'G0': 19, 'G#0': 20, 'Ab0': 20, 'A0': 21, 'A#0': 22, 'Bb0': 22, 'B0': 23,
    'C1': 24, 'C#1': 25, 'Db1': 25, 'D1': 26, 'D#1': 27, 'Eb1': 27, 'E1': 28, 'F1': 29, 'F#1': 30, 'Gb1': 30, 'G1': 31, 'G#1': 32, 'Ab1': 32, 'A1': 33, 'A#1': 34, 'Bb1': 34, 'B1': 35,
    'C2': 36, 'C#2': 37, 'Db2': 37, 'D2': 38, 'D#2': 39, 'Eb2': 39, 'E2': 40, 'F2': 41, 'F#2': 42, 'Gb2': 42, 'G2': 43, 'G#2': 44, 'Ab2': 44, 'A2': 45, 'A#2': 46, 'Bb2': 46, 'B2': 47,
    'C3': 48, 'C#3': 49, 'Db3': 49, 'D3': 50, 'D#3': 51, 'Eb3': 51, 'E3': 52, 'F3': 53, 'F#3': 54, 'Gb3': 54, 'G3': 55, 'G#3': 56, 'Ab3': 56, 'A3': 57, 'A#3': 58, 'Bb3': 58, 'B3': 59,
    'C4': 60, 'C#4': 61, 'Db4': 61, 'D4': 62, 'D#4': 63, 'Eb4': 63, 'E4': 64, 'F4': 65, 'F#4': 66, 'Gb4': 66, 'G4': 67, 'G#4': 68, 'Ab4': 68, 'A4': 69, 'A#4': 70, 'Bb4': 70, 'B4': 71,
    'C5': 72, 'C#5': 73, 'Db5': 73, 'D5': 74, 'D#5': 75, 'Eb5': 75, 'E5': 76, 'F5': 77, 'F#5': 78, 'Gb5': 78, 'G5': 79, 'G#5': 80, 'Ab5': 80, 'A5': 81, 'A#5': 82, 'Bb5': 82, 'B5': 83,
};

function noteToFreq(note) {
    const midi = NOTE_TO_MIDI[note];
    if (midi === undefined) {
        console.error(`Note ${note} not found.`);
        return null;
    }
    return 440 * Math.pow(2, (midi - 69) / 12);
}

const SAINTS_DATA = {
    // Serbian Saints
    'prohor-pcinski': {
        name: 'Святой Прохор Пчиньский',
        type: 'serbian',
        description: 'Пещера, прозорливость',
        scale: [noteToFreq('C4'), noteToFreq('F#4'), noteToFreq('B4')]
    },
    'ioakim-osogovski': {
        name: 'Святой Иоаким Осоговский',
        type: 'serbian',
        description: 'Пустынножитель, чудотворец',
        scale: [noteToFreq('C4'), noteToFreq('G4'), noteToFreq('Ab4')]
    },
    'gavriil-lesnovski': {
        name: 'Святой Гавриил Лесновский',
        type: 'serbian',
        description: 'Затворник, исцеление души',
        scale: [noteToFreq('C4'), noteToFreq('Db4'), noteToFreq('G4')]
    },
    'vasilij-ostroski': {
        name: 'Святой Василий Острожский',
        type: 'serbian',
        description: 'Нетленные мощи, тысячи чудес',
        scale: [noteToFreq('D4'), noteToFreq('A4'), noteToFreq('E5')]
    },
    'stefan-decanski': {
        name: 'Святой Стефан Дечанский',
        type: 'serbian',
        description: 'Царь-прозорливец, исцеление слепых',
        scale: [noteToFreq('D4'), noteToFreq('F4'), noteToFreq('A#4')]
    },
    'petar-koriski': {
        name: 'Святой Петр Коришский',
        type: 'serbian',
        description: 'Глубочайший мистический опыт',
        scale: [noteToFreq('F4'), noteToFreq('B4'), noteToFreq('E5')]
    },
    // Russian Saints
    'serafim-vyritski': {
        name: 'Святой Серафим Вырицкий',
        type: 'russian',
        description: 'Молитвенник, предсказатель',
        scale: [noteToFreq('G3'), noteToFreq('C#4'), noteToFreq('G#4')]
    },
    'matrona-moskovska': {
        name: 'Святая Матрона Московская',
        type: 'russian',
        description: 'Народная целительница, прозорливица',
        scale: [noteToFreq('Eb4'), noteToFreq('G4'), noteToFreq('B4')]
    },
    'feofil-kievski': {
        name: 'Святой Феофил Киевский',
        type: 'russian',
        description: 'Юродивый, прозрения',
        scale: [noteToFreq('F#3'), noteToFreq('A3'), noteToFreq('C#4')]
    },
    'simeon-verhoturski': {
        name: 'Святой Симеон Верхотурский',
        type: 'russian',
        description: 'Скромный чудотворец',
        scale: [noteToFreq('A3'), noteToFreq('D4'), noteToFreq('E4')]
    },
    'paraskeva-pjatnitsa': {
        name: 'Святая Параскева Пятница',
        type: 'russian',
        description: 'Юродивая, странница, пророчица',
        scale: [noteToFreq('F#3'), noteToFreq('C4'), noteToFreq('G4')]
    },
    'kuksha-odesski': {
        name: 'Святой Кукша Одесский',
        type: 'russian',
        description: 'Прозорливец, тайные подвиги',
        scale: [noteToFreq('Ab3'), noteToFreq('E4'), noteToFreq('B4')]
    }
};

const SYNTH_TUNINGS = {
    'prohor-pcinski':    { ratios: [2.8, 5.3], modIdx: [1000, 800], types: ['sine', 'sawtooth', 'sine']},
    'ioakim-osogovski':  { ratios: [1, 0.5], modIdx: [300, 200], types: ['sine', 'sine', 'sine']},
    'gavriil-lesnovski': { ratios: [1.1, 2.3], modIdx: [600, 400], types: ['sine', 'square', 'sine']},
    'vasilij-ostroski':  { ratios: [0.5, 1.58], modIdx: [800, 900], types: ['sine', 'sine', 'sine']}, // Bell-like
    'stefan-decanski':   { ratios: [1, 3.5], modIdx: [1200, 500], types: ['sawtooth', 'sawtooth', 'sine']},
    'petar-koriski':     { ratios: [4.2, 6.1], modIdx: [2000, 1500], types: ['square', 'square', 'sine']}, // Harsh
    'serafim-vyritski':  { ratios: [0.7, 2.1], modIdx: [700, 700], types: ['sine', 'sine', 'sine']},
    'matrona-moskovska': { ratios: [1, 1.5], modIdx: [400, 300], types: ['triangle', 'sine', 'sine']}, // Softer
    'feofil-kievski':    { ratios: [1.33, 2.66], modIdx: [900, 600], types: ['square', 'sine', 'sine']},
    'simeon-verhoturski':{ ratios: [0.5, 1], modIdx: [100, 100], types: ['sine', 'sine', 'sine']}, // Pure
    'paraskeva-pjatnitsa':{ ratios: [3.2, 0.9], modIdx: [1100, 800], types: ['sawtooth', 'square', 'sine']},
    'kuksha-odesski':    { ratios: [0.77, 2.11], modIdx: [950, 1300], types: ['triangle', 'sawtooth', 'sine']},
};

let audioContext = null;

function initAudio() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log("AudioContext создан успешно.");
        } catch (e) {
            console.error("Web Audio API не поддерживается в этом браузере.", e);
            alert("Web Audio API не поддерживается в этом браузере.");
        }
    }
}

class FMSynth {
    constructor(tuning) {
        if (!audioContext) {
            throw new Error("AudioContext не инициализирован. Вызовите initAudio() сначала.");
        }
        this.context = audioContext;
        this.tuning = tuning || { ratios: [1, 1], modIdx: [100, 100], types: ['sine', 'sine', 'sine'] }; // Default tuning
    }

    play(freq, time) {
        const now = this.context.currentTime;
        const { ratios, modIdx, types } = this.tuning;

        // --- Nodes setup ---
        // Carrier Oscillator (the one we hear)
        const carrier = this.context.createOscillator();
        carrier.type = types[2];
        carrier.frequency.setValueAtTime(freq, now);

        // Modulator 1 (modulates carrier frequency)
        const mod1 = this.context.createOscillator();
        mod1.type = types[1];
        const mod1Freq = freq * ratios[0];
        mod1.frequency.setValueAtTime(mod1Freq, now);

        // Modulator 2 (modulates mod1 frequency)
        const mod2 = this.context.createOscillator();
        mod2.type = types[0];
        const mod2Freq = freq * ratios[1];
        mod2.frequency.setValueAtTime(mod2Freq, now);

        // Gain nodes to control modulation depth
        const mod1Gain = this.context.createGain();
        mod1Gain.gain.setValueAtTime(modIdx[0], now);

        const mod2Gain = this.context.createGain();
        mod2Gain.gain.setValueAtTime(modIdx[1], now);

        // Master output gain (for volume envelope)
        const masterGain = this.context.createGain();
        masterGain.gain.setValueAtTime(0, now);

        // --- Routing ---
        // mod2 -> mod2Gain -> mod1.frequency
        mod2.connect(mod2Gain);
        mod2Gain.connect(mod1.frequency);

        // mod1 -> mod1Gain -> carrier.frequency
        mod1.connect(mod1Gain);
        mod1Gain.connect(carrier.frequency);

        // carrier -> masterGain -> destination
        carrier.connect(masterGain);
        masterGain.connect(this.context.destination);

        // --- Envelope (ADSR) ---
        const attackTime = 0.01;
        const decayTime = 0.15;
        const sustainLevel = 0.1;
        const releaseTime = 0.2;
        const peakVolume = 0.3;

        masterGain.gain.linearRampToValueAtTime(peakVolume, now + attackTime);
        masterGain.gain.linearRampToValueAtTime(peakVolume * sustainLevel, now + attackTime + decayTime);

        // Schedule stop
        const stopTime = now + attackTime + decayTime + releaseTime;
        masterGain.gain.setValueAtTime(masterGain.gain.value, stopTime - releaseTime); // Hold sustain level
        masterGain.gain.linearRampToValueAtTime(0, stopTime);

        // --- Start and Stop Oscillators ---
        carrier.start(now);
        mod1.start(now);
        mod2.start(now);

        carrier.stop(stopTime + 0.1);
        mod1.stop(stopTime + 0.1);
        mod2.stop(stopTime + 0.1);
    }
}

// --- DOM ELEMENTS ---
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const restartBtn = document.getElementById('restart-btn');
const bpmInput = document.getElementById('bpm');
const patternsContainer = document.getElementById('patterns-container');
const serbianSaintsList = document.getElementById('serbian-saints');
const russianSaintsList = document.getElementById('russian-saints');
const altarGrid = document.getElementById('altar');


// --- SEQUENCER STATE ---
const sequencer = {
    isPlaying: false,
    bpm: 120,
    currentStep: 0,
    timerId: null,
    patterns: [], // This will hold our active patterns
};

// To be populated when saints are added to the altar
let activeSynths = {};

function renderPattern(pattern) {
    const patternDiv = document.createElement('div');
    patternDiv.className = 'pattern';
    patternDiv.dataset.id = pattern.id;

    const header = document.createElement('div');
    header.className = 'pattern-header';

    const title = document.createElement('h3');
    title.textContent = pattern.saint.name;
    header.appendChild(title);

    const controls = document.createElement('div');
    controls.className = 'pattern-controls';

    const lengthLabel = document.createElement('label');
    lengthLabel.textContent = 'Длина:';
    const lengthInput = document.createElement('input');
    lengthInput.type = 'number';
    lengthInput.min = 4;
    lengthInput.max = 64;
    lengthInput.value = pattern.steps;
    lengthInput.addEventListener('change', (e) => updatePatternLength(pattern.id, parseInt(e.target.value, 10)));

    const loopBtn = document.createElement('button');
    loopBtn.className = 'loop-btn';
    loopBtn.textContent = `Loop: ${pattern.loopType}`;
    loopBtn.addEventListener('click', (e) => toggleLoopType(pattern.id, e.target));

    controls.appendChild(lengthLabel);
    controls.appendChild(lengthInput);
    controls.appendChild(loopBtn);
    header.appendChild(controls);
    patternDiv.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'pattern-grid';
    patternDiv.appendChild(grid); // Add grid to div first

    patternsContainer.appendChild(patternDiv);

    renderPatternGrid(pattern); // Now render the grid content

    grid.addEventListener('click', handleCellClick);
}

function renderPatternGrid(pattern) {
    const patternDiv = document.querySelector(`.pattern[data-id="${pattern.id}"]`);
    const grid = patternDiv.querySelector('.pattern-grid');
    grid.innerHTML = ''; // Clear existing grid
    grid.style.gridTemplateColumns = `repeat(${pattern.steps}, 1fr)`;

    for (let i = 0; i < pattern.steps; i++) {
        const cell = document.createElement('div');
        cell.className = 'pattern-cell';
        cell.dataset.step = i;
        if (pattern.sequence[i] !== null) {
            cell.classList.add('active', `note-${pattern.sequence[i]}`);
        }
        grid.appendChild(cell);
    }
}

function updatePatternLength(patternId, newLength) {
    const pattern = sequencer.patterns.find(p => p.id === patternId);
    if (!pattern) return;

    if (newLength > pattern.steps) {
        pattern.sequence.length = newLength;
        pattern.sequence.fill(null, pattern.steps);
    } else {
        pattern.sequence.length = newLength;
    }
    pattern.steps = newLength;

    renderPatternGrid(pattern);
}

function toggleLoopType(patternId, button) {
    const pattern = sequencer.patterns.find(p => p.id === patternId);
    if (!pattern) return;

    if (pattern.loopType === '->') {
        pattern.loopType = '-><-';
    } else {
        pattern.loopType = '->';
    }
    button.textContent = `Loop: ${pattern.loopType}`;
}

function handleCellClick(e) {
    if (!e.target.classList.contains('pattern-cell')) return;

    const cell = e.target;
    const patternId = cell.closest('.pattern').dataset.id;
    const step = parseInt(cell.dataset.step, 10);

    const pattern = sequencer.patterns.find(p => p.id === patternId);
    if (!pattern) return;

    // Cycle through: null -> 0 -> 1 -> 2 -> null
    let currentNote = pattern.sequence[step];
    if (currentNote === null) {
        currentNote = 0;
    } else if (currentNote === 0) {
        currentNote = 1;
    } else if (currentNote === 1) {
        currentNote = 2;
    } else {
        currentNote = null;
    }

    pattern.sequence[step] = currentNote;

    // Update UI
    cell.classList.remove('active', 'note-0', 'note-1', 'note-2');
    if (currentNote !== null) {
        cell.classList.add('active', `note-${currentNote}`);
    }
}


// --- SEQUENCER LOGIC ---
function tick() {
    sequencer.patterns.forEach(pattern => {
        const lastStep = pattern.currentStep;

        // --- Play sound for the current step ---
        const noteIndex = pattern.sequence[pattern.currentStep];
        if (noteIndex !== null) {
            const freq = pattern.saint.scale[noteIndex];
            pattern.synth.play(freq);
        }

        // --- Update highlight ---
        updatePatternHighlight(pattern.id, lastStep, pattern.currentStep);

        // --- Advance step for next tick ---
        if (pattern.loopType === '->') {
            pattern.currentStep = (pattern.currentStep + 1) % pattern.steps;
        } else { // Ping-pong logic
            if (pattern.currentStep >= pattern.steps - 1 && pattern.direction === 1) {
                pattern.direction = -1;
            } else if (pattern.currentStep <= 0 && pattern.direction === -1) {
                pattern.direction = 1;
            }
            pattern.currentStep += pattern.direction;
        }
    });
}

function updatePatternHighlight(patternId, lastStep, currentStep) {
    const patternGrid = document.querySelector(`.pattern[data-id="${patternId}"] .pattern-grid`);
    if (!patternGrid) return;

    // Remove highlight from previous step
    const lastCell = patternGrid.querySelector(`[data-step="${lastStep}"]`);
    if(lastCell) lastCell.classList.remove('highlight');

    // Add highlight to current step
    const currentCell = patternGrid.querySelector(`[data-step="${currentStep}"]`);
    if(currentCell) currentCell.classList.add('highlight');
}


function startSequencer() {
    if (sequencer.isPlaying) return;
    initAudio(); // Initialize audio on first play
    if(!audioContext) return; // Don't start if audio context failed

    sequencer.isPlaying = true;
    const interval = 60000 / sequencer.bpm / 4; // 16th notes
    sequencer.timerId = setInterval(tick, interval);
    playBtn.textContent = 'PAUSE';
}

function stopSequencer() {
    if (!sequencer.isPlaying) return;
    sequencer.isPlaying = false;
    clearInterval(sequencer.timerId);
    sequencer.timerId = null;
    playBtn.textContent = 'PLAY';

    // Clear all highlights
    document.querySelectorAll('.pattern-cell.highlight').forEach(cell => {
        cell.classList.remove('highlight');
    });
}

function restartSequencer() {
    sequencer.patterns.forEach(p => {
        p.currentStep = 0;
        p.direction = 1;
    });

    if (!sequencer.isPlaying) {
        // Clear all existing highlights
        document.querySelectorAll('.pattern-cell.highlight').forEach(cell => {
            cell.classList.remove('highlight');
        });
        // Set highlight to the first step for all patterns
        sequencer.patterns.forEach(p => {
            const grid = document.querySelector(`.pattern[data-id="${p.id}"] .pattern-grid`);
            if (grid) {
                const firstCell = grid.querySelector('[data-step="0"]');
                if (firstCell) {
                    firstCell.classList.add('highlight');
                }
            }
        });
    }
}


// --- EVENT LISTENERS ---
playBtn.addEventListener('click', () => {
    if (sequencer.isPlaying) {
        stopSequencer();
    } else {
        startSequencer();
    }
});

stopBtn.addEventListener('click', () => {
    stopSequencer();
    restartSequencer();
});

restartBtn.addEventListener('click', restartSequencer);

bpmInput.addEventListener('input', (e) => {
    sequencer.bpm = Number(e.target.value);
    if (sequencer.isPlaying) {
        stopSequencer();
        startSequencer();
    }
});

// --- DRAG AND DROP LOGIC ---

function populateSaintsLists() {
    Object.keys(SAINTS_DATA).forEach(saintId => {
        const saint = SAINTS_DATA[saintId];
        const iconContainer = document.createElement('div');
        iconContainer.className = 'saint-icon';
        iconContainer.dataset.id = saintId;
        iconContainer.draggable = true;

        const img = document.createElement('img');
        img.src = `assets/${saint.type}_saint.svg`;
        img.alt = saint.name;
        // Make the image non-draggable itself to avoid conflicts
        img.draggable = false;

        const name = document.createElement('p');
        name.textContent = saint.name;

        iconContainer.appendChild(img);
        iconContainer.appendChild(name);

        if (saint.type === 'serbian') {
            serbianSaintsList.appendChild(iconContainer);
        } else {
            russianSaintsList.appendChild(iconContainer);
        }

        iconContainer.addEventListener('dragstart', handleDragStart);
    });
}

function setupAltarGrid() {
    for (let i = 0; i < 9; i++) {
        const slot = document.createElement('div');
        slot.className = 'altar-slot';
        slot.dataset.slotId = i;
        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);
        altarGrid.appendChild(slot);
    }
}


function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.preventDefault();
    const saintId = e.dataTransfer.getData('text/plain');
    const targetSlot = e.target.closest('.altar-slot');

    if (!saintId || !targetSlot || targetSlot.children.length > 0) {
        return; // Don't drop if slot is occupied or data is invalid
    }

    // Check if saint is already on the altar
    if (sequencer.patterns.some(p => p.id === saintId)) {
        console.warn(`Saint ${saintId} is already on the altar.`);
        return;
    }

    // Check if altar is full
    if (sequencer.patterns.length >= 9) {
        console.warn("Altar is full. Cannot add more saints.");
        return;
    }

    const originalIcon = document.querySelector(`.saint-icon[data-id="${saintId}"]`);
    if (originalIcon) {
        // Move icon visually
        targetSlot.appendChild(originalIcon);
        originalIcon.draggable = false; // Cannot be dragged from altar for now
        addPatternForSaint(saintId);
    }
}

function addPatternForSaint(saintId) {
    initAudio(); // Ensure audio is ready
    if (!audioContext) {
        console.error("Could not initialize audio. Please allow audio playback.");
        return;
    }

    const saintData = SAINTS_DATA[saintId];
    const synthTuning = SYNTH_TUNINGS[saintId];

    // Create synth for the new pattern
    if (!activeSynths[saintId]) {
        activeSynths[saintId] = new FMSynth(synthTuning);
    }

    const pattern = {
        id: saintId,
        steps: 16, // Default length
        loopType: '->',
        sequence: Array(16).fill(null),
        saint: saintData,
        synth: activeSynths[saintId],
        currentStep: 0, // Each pattern tracks its own step
        direction: 1      // For ping-pong loop
    };

    sequencer.patterns.push(pattern);
    renderPattern(pattern);
}


// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    initAudio();
    populateSaintsLists();
    setupAltarGrid();
});
