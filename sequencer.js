document.addEventListener('DOMContentLoaded', () => {
    const sequencerGrid = document.getElementById('sequencer-grid');
    const numSteps = 64;

    function createTrack(trackIndex, trackName, customClass = '') {
        const track = document.createElement('div');
        track.className = 'track';
        if (customClass) {
            track.classList.add(customClass);
        }

        // Create track name
        const nameEl = document.createElement('div');
        nameEl.className = 'track-name';
        nameEl.textContent = trackName;
        track.appendChild(nameEl);

        // Create step grid for the track
        const stepGrid = document.createElement('div');
        stepGrid.className = 'step-grid';

        for (let j = 0; j < numSteps; j++) {
            const cell = document.createElement('div');
            cell.className = 'step-cell';
            cell.dataset.step = j;
            cell.dataset.track = trackIndex;
            cell.dataset.state = 'off'; // Initial state

            // Add click listener to cycle state
            cell.addEventListener('click', () => {
                const currentState = cell.dataset.state;
                let nextState;
                if (currentState === 'off') {
                    nextState = 'x';
                } else if (currentState === 'x') {
                    nextState = 'o';
                } else {
                    nextState = 'off';
                }
                cell.dataset.state = nextState;
            });

            stepGrid.appendChild(cell);
        }
        track.appendChild(stepGrid);
        sequencerGrid.appendChild(track);
    }

    // Create 6 rhythm tracks
    for (let i = 0; i < 6; i++) {
        createTrack(i, `Sound ${i + 1}`);
    }

    // Create 3 melody tracks
    for (let i = 0; i < 3; i++) {
        createTrack(i + 6, `MELODY ${i + 1}`, 'melody-track');
    }
});
