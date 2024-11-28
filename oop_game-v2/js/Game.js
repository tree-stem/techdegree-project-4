/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

import { Phrase } from './Phrase.js';

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase ('NO PLACE LIKE HOME'), new Phrase ('MANS BESTFRIEND'), new Phrase ('NEW YEARS RESOLUTION'), new Phrase ('BEAT OF A DRUM'), new Phrase ('LEAVE ROOM FOR DESSERT')];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * 5);
        this.activePhrase = this.phrases[randomNumber];

        console.log('Random phrase:', this.activePhrase);

        return this.activePhrase;
    }

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.activePhrase.checkLetter();    
    }

    handleInteraction() {
        const keys = document.querySelectorAll('.keyrow .key');
        const filteredPhrase = this.activePhrase.phrase.split('').filter(character => character !== ' ');
   
        keys.forEach(item => {
            item.addEventListener('click', (e) => {
                const clickedKey = e.target.textContent.toLowerCase();
                let match = false;

                for ( let i = 0; i < filteredPhrase.length; i++ ) {
                    
                    match = false;

                    if (clickedKey === filteredPhrase[i]) {
                        item.classList.add('chosen');
                        this.activePhrase.showMatchedLetter();
                        item.disabled = true;
                        match = true;
                        break;
                    }; 
                };

                if (!match) {
                    item.classList.add('wrong');
                    item.disabled = true;
                };
            });
        });
    };   
};

const test = new Game;
test.startGame();
test.handleInteraction();