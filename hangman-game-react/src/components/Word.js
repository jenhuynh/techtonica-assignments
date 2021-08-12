import React from 'react';

//destructuring props to include selected word and correct letters
function Word ({ selectedWord, correctLetters }) {
    return (
       /* First we use split to separate string into single characters. Then we map through the selected word. Each word in teh selected word is checking to see if it's inside the correct letters array. If it is we want to display the letter in span. If not, we want it blank. */
        <div className="word">
          {selectedWord.split('').map((letter, i) => {
            return (
              //adding key with index because we are mapping through everything or looped through
              <span className="letter" key={i}>
                {/* using .includes since we're using this check to see if it includes a correct letter as we map through the selected word */}
                {correctLetters.includes(letter) ? letter : ''}
              </span>
            )
          })}
        </div>
    )
}

export default Word