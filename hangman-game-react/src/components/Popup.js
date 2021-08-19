import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
//passing props to check if we win or lose
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'You won!';
    playable = false;
      //still playable if checkwin comes back blank, means we did not win or lose
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'You lost.';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }
  //set playable is a side effect so we use useEffect
//like this so everytime we add a letter in hangman, we want playable to run

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
           {/* playAgain function changes our state */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup