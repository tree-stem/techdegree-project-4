/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseCharacters = this.phrase.split('');
        const phraseDiv = document.querySelector('#phrase');
        const ul = document.querySelector('#phrase ul');
        phraseDiv.style.display = 'block';

        ul.innerHTML = '';
        
        phraseCharacters.forEach(character => {
            const li = document.createElement('li');

            if (character === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('letter');
                li.textContent = character;
            };

            ul.appendChild(li);
            
        });
    }; 

    checkLetter() {
        const keys = document.querySelectorAll('.keyrow .key');
        const phraseCharacters = this.phrase.split('');
        const noSpacePhraseCharacters = phraseCharacters.filter((character, index) => character !== ' ');
        let match = false;

        keys.forEach(item => {
            item.addEventListener('click', (e) => {
                const clickedKey = e.target.textContent.toLowerCase();

                match = false;
                
                for (let i = 0; i < noSpacePhraseCharacters.length; i++) {
                    
                    if (clickedKey === noSpacePhraseCharacters[i]) {
                        console.log('Match found');
                        match = true;
                        break;
                    };
                };
                    
                if (!match) {
                    console.log('Please try another key');
                };            
            });
        });
    };
    
    showMatchedLetter() {
        const keys = document.querySelectorAll('.keyrow .key');
        const phraseCharacters = this.phrase.split('');
        const noSpacePhraseCharacters = phraseCharacters.filter(character => character !== ' ');
        const lettersDisplayed = document.querySelectorAll('.letter');

        keys.forEach(item => {
            item.addEventListener('click', (e) => {
                const clickedKey = e.target.textContent.toLowerCase();
    
                noSpacePhraseCharacters.forEach((character, index) => {
                    if (clickedKey === character) {
                        lettersDisplayed[index].classList.add('show'); 
                    };
                });        
            });
        });
    };
};

export { Phrase };