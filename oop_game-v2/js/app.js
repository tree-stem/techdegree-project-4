/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');

startGameButton.addEventListener('click', () => {
    const game = new Game;
    game.startGame();

    const divQwerty = document.getElementById('qwerty');

    divQwerty.addEventListener('click', (e) => {
        const clickedKey = e.target.closest('button');
        
        if (clickedKey && clickedKey.tagName === 'BUTTON') {
            game.handleInteraction(clickedKey);
        };
    });
});