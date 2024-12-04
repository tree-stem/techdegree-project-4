/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Created Phrase class with methods setting the letters to display and checking player guesses
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Displays phrase letters by setting an appropriate class for both letters and spaces
    addPhraseToDisplay(phrase) {
        const phraseCharacters = phrase.split('');
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

    // Checks player guesses for each letter clicked
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
    
    // Shows correctly guessed letters in phrase display
    showMatchedLetter(matchedLetters) {
        matchedLetters.forEach(letter => {
            letter.classList.remove('letter');
            letter.classList.add('show');
        });
    };
};