/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
    };

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    handleInteraction(clickedKey) {
        const matchedLetters = this.activePhrase.checkLetter(clickedKey);
        const scoreboard = document.getElementById('scoreboard');
        const hearts = scoreboard.getElementsByTagName('li');
        clickedKey.disabled = true;
        
        const removeLife = (array) => {
            this.missed += 1;

            if (this.missed === 5) {
                gameOver('lose');
            };
            
            for (let i=0; i<array.length; i++) {
                let html = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></img>';

                if (array[i].innerHTML.includes('images/liveHeart.png')) {
                    array[i].innerHTML = html;
                break;    
                };     
            };
        }; 
        
        const checkForWin = () => { 
            const correct = document.querySelectorAll('.show');
            const phrase = this.activePhrase.phrase.split('');
            const filteredPhrase = phrase.filter(char => char !== ' ');

            if (correct.length === filteredPhrase.length) {
                return gameOver('win');
            };
        };

        const gameOver = (check) => {
            if (check === 'win') {
                overlay.style.display = 'block';
                overlay.classList.remove('start');
                overlay.classList.add('win');
                const message = document.getElementById('game-over-message');
                message.innerHTML = '<h1 id="game-over-message">You Win</h1>';
            };

            if (check === 'lose') {
                overlay.style.display = 'block';
                overlay.classList.remove('start');
                overlay.classList.add('lose');
                const message = document.getElementById('game-over-message');
                message.innerHTML = '<h1 id="game-over-message">You Lose</h1>';
            };
        };
        

        if (this.activePhrase.phrase.includes(clickedKey.textContent)) {
            clickedKey.classList.add('chosen');
            this.activePhrase.showMatchedLetter(matchedLetters);
            checkForWin();
        } else {
            clickedKey.classList.add('wrong');
            removeLife(hearts);
        };
    };
};