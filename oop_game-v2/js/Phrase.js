/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseCharacters = this.phrase.split('');
        const ul = document.querySelector('#phrase ul');
        const phraseDiv = document.querySelector('#phrase');
        phraseDiv.style.display = 'block';
        
        phraseCharacters.forEach(letter => {
            const li = document.createElement('li');

            if (letter === ' ') {
                li.classList.add('space');
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            };

            ul.appendChild(li);
        });
    };

    checkLetter(clickedKey) {
        const lettersOnly = document.querySelectorAll('.letter'); 
        const matchedLetters = [];

        lettersOnly.forEach(letter => {
                if (clickedKey.textContent === letter.textContent) {
                    matchedLetters.push(letter);
                };
        });

        return matchedLetters;
    };
    
    showMatchedLetter(matchedLetters) {
        matchedLetters.forEach(letter => {
            letter.classList.remove('letter');
            letter.classList.add('show');
        });
    };
};