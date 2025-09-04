document.addEventListener('DOMContentLoaded', () => {
    const sequencerGrid = document.getElementById('sequencer-grid');
    const numTracks = 6;
    const numSteps = 64;

    for (let i = 0; i < numTracks; i++) {
        const track = document.createElement('div');
        track.className = 'track';

        // Create track name
        const trackName = document.createElement('div');
        trackName.className = 'track-name';
        trackName.textContent = `Sound ${i + 1}`;
        track.appendChild(trackName);

        // Create step grid for the track
        const stepGrid = document.createElement('div');
        stepGrid.className = 'step-grid';

        for (let j = 0; j < numSteps; j++) {
            const cell = document.createElement('div');
            cell.className = 'step-cell';
            cell.dataset.step = j;
            cell.dataset.track = i;
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
});
