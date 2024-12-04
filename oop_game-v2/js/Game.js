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

    checkForWin() { 
        const correct = document.querySelectorAll('.show');
        console.log('Correct:', correct.length);
        const phrase = this.activePhrase.phrase.split('');
        const filteredPhrase = phrase.filter(char => char !== ' ');

        if (correct.length === filteredPhrase.length) {
            return this.gameOver('win');
        };
    };

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