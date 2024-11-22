/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// Create phrase class

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseCharacters = this.phrase.split('');
        const ul = document.querySelector('ul');

        phraseCharacters.forEach(character => {
            
            const newLi = document.createElement('li');

            newLi.classList.add('letter');
            newLi.textContent = character;

            ul.appendChild(newLi);
        });
    }
};

