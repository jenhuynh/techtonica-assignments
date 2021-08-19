import React from 'react'

//destructure props with wrongLetters
const WrongLetters = ({wrongLetters}) => {
    return(
      <div className="wrong-letters-container">
        <div>
          {/* if wrongLetters length greater than O, add paragraph */}
        {wrongLetters.length > 0 &&<p>Wrong</p>}
        {/* key with index will add the span every single time when a wrong letter is typed in. Each wrong letter will be displayed inside span*/}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          /* reduce will add the comma in between every one of the spans between previous value and current value. If it equals null then our currentVal, else will have previous and add comma. */
          .reduce((prev, currentVal) => prev === null ? [currentVal] : [prev, ',' , currentVal], null)}
        </div>
      </div>
    )
}

export default WrongLetters