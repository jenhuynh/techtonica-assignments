// import logo from './logo.svg';
import React, { useState, useEffect} from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
//because we can't have the same name as state when we import, we use as keyword to rename showNotication to show
import { showNotification as show } from './helpers/helpers';
import './App.css';

const words = ['animal', 'code', 'animate', 'flavor'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
 
function App() {
  //useState to create countdown timer
  const [counter, setCounter] = React.useState(120);

  //useState to keep track and see if the game is to be playable/played again, initially set to true
  const [playable, setPlayable] = useState(true);
//useState to keep track of correct letters, initially set to empty array
  const [correctLetters, setCorrectLetters] = useState([]);
//useState to keep track of wrong letters, initially set to empty array
  const [wrongLetters, setWrongLetters] = useState([]);
//useState to showNotification when same letter is tried twice, initially set to false
  const [showNotification, setShowNotification] = useState(false);

  //add counter in useEffect hook so that every time when the counter changes, new setInterval() is called.
  React.useEffect(() => {
     //use callback function in useEffect hook to clear the interval in current scope so that only one setInterval() instance is running in the global environment at the same time.
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
     
    return () => clearInterval(timer);
  }, [counter]);

  //useEffect meant to be a side effect of the app
useEffect(() => {
  const handleKeydown = event => {
    //destructure function
    const {key, keyCode} = event;
    //if the user inputs a letter key on the keyboard, 65 - 90 is the letters on keyboard 
      if (playable && keyCode >= 65 && keyCode <= 90) {
      //then get the letter user inputed
        const letter = key.toLowerCase();
  //checking to see if our selected word includes a letter in selected word
        if (selectedWord.includes(letter)) {
    //if it does not include a correct letter, we are going to add it to our letters
          if (!correctLetters.includes(letter)) {
      //take our correct letters and create a new array  and spread and add to that new letter
           setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            //calling show function in and passing our setterfunction setShowNotification in helper folder
            // if it does include our correct letter already, we've entered it twice, it needs to show notification that we already entered that letter
            show(setShowNotification);
          }
        } else {
          //if it includes wrong letter, take our wrongletters and create a new array  and spread and add to that new letter
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            //if it already shows wrong letter twice, show notification we've already entered that letter
            show(setShowNotification);
          }
        }
      }
    }
    //we useEffect because everytime this app renders we don't want to add another eventlistener each time. 
  window.addEventListener('keydown',  handleKeydown);
//Everytime it renders, it makes a new event listener, we use useEffect and this function gets called and cleans up the event listener so at anytime we only have one eventlistener running. 
      // Keydown letter press
  return () => window.removeEventListener('keydown', handleKeydown);
    //in this array, anytime correctletters, wrongletters, or playable get rendered, that's when the function if(!wrongletters.includes) is called
}, [correctLetters, wrongLetters, playable]);

function playAgain() {
  setPlayable(true);

  //reset arrays of correct letters and wrong letters to empty array
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = Math.floor(Math.random() * words.length);
  selectedWord = words[random];
}

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <div>Countdown: {counter}</div>
        <WrongLetters wrongLetters={wrongLetters} />
        {/* passing selectedWord and correctedLetters props in word component*/}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </> 
  )
}

export default App;
 