/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Created Game class for game initialization and in-game logic
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase ('NO PLACE LIKE HOME'), new Phrase ('MANS BESTFRIEND'), new Phrase ('NEW YEARS RESOLUTION'), new Phrase ('BEAT OF A DRUM'), new Phrase ('LEAVE ROOM FOR DESSERT')];
        this.activePhrase = null;
    }

    // Selects a random phrase from the phrases array and sets it as the active phrase
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * 5);
        this.activePhrase = this.phrases[randomNumber];

        console.log('Random phrase:', this.activePhrase);

        return this.activePhrase;
    };

    // Starts game by clearing any displayed items, classes, button disables, and missed items
    startGame() {
        const ul = document.querySelector('#phrase ul');
        const keys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('.tries');
        const overlay = document.getElementById('overlay');

        this.missed = 0;
        console.log('Missed reset:', this.missed);
        
        ul.innerHTML = '';
        
        keys.forEach(key => {
            key.className = 'key'
            key.disabled = false;
        });

        for ( let i = 0; i < hearts.length; i++ ) {
            hearts[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>';
        };

        overlay.style.display = 'none';
        overlay.classList.remove('win', 'lose');
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase);
    };

    // Handles game logic by calling other methods to either reward or punish a player's guesses
    handleInteraction(clickedKey) {
        const matchedLetters = this.activePhrase.checkLetter(clickedKey);
        const hearts = document.querySelectorAll('.tries');
        clickedKey.disabled = true;

        if (this.activePhrase.phrase.includes(clickedKey.textContent)) {
            clickedKey.classList.add('chosen');
            this.activePhrase.showMatchedLetter(matchedLetters);
            this.checkForWin();
        } else {
            clickedKey.classList.add('wrong');
            console.log('Before removeLife:', this.missed);
            this.removeLife(hearts);
        };
    };

    // Removes a heart from the game display for every wrong guess until the game ends
    removeLife(array) {
        this.missed += 1;
        console.log('Missed:', this.missed);
        
        for (let i=0; i<array.length; i++) {
            let html = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></img>';

            if (array[i].innerHTML.includes('images/liveHeart.png')) {
                array[i].innerHTML = html;
                console.log('Heart updated at index:', i);
                break;    
            };     
        };

        if (this.missed === 5) {
            return this.gameOver('lose');
        };
    }; 

    // Checks if displayed letters match the selected phrase to determine victory
    checkForWin() { 
        const correct = document.querySelectorAll('.show');
        console.log('Correct:', correct.length);
        const phrase = this.activePhrase.phrase.split('');
        const filteredPhrase = phrase.filter(char => char !== ' ');

        if (correct.length === filteredPhrase.length) {
            return this.gameOver('win');
        };
    };

    // Displays game over message and overlay after either a win or loss
    gameOver(check) {
        const message = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');

        overlay.style.display = 'block';
        overlay.classList.remove('start');
        
        if (check === 'win') {
            overlay.classList.add('win');
            message.innerHTML = '<h1 id="game-over-message">You Win</h1>';
        };

        if (check === 'lose') {
            overlay.classList.add('lose');
            message.innerHTML = '<h1 id="game-over-message">You Lose</h1>';
        };
    };
};