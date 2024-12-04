/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Created an element for the start button
const startGameButton = document.getElementById('btn__reset');

// Declared game variable in global scope to insure program reliability
let game;

// Added an event listener to start button which initiates game by calling the startGame method on the game variable
startGameButton.addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

// Created an element for the keyboard
const divQwerty = document.getElementById('qwerty');

// Added an event listener to the keyboard to listen for keyboard clicks
divQwerty.addEventListener('click', (e) => {
    const clickedKey = e.target.closest('button');
    
    if (clickedKey && clickedKey.tagName === 'BUTTON') {
        game.handleInteraction(clickedKey);
    };
});