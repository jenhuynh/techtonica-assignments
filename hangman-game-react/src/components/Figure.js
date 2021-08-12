import React from 'react'

const Figure = ({wrongLetters}) => {
  //looks for how many wrong letters we have
  const errors = wrongLetters.length;
    return (
        <svg height="250" width="200" className="figure-container">
        {/* Pole */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* Head */}
      {/* if our errors are greater than 0, we will display the head */}
      {errors > 0 && <circle cx="140" cy="70" r="20" />}
        {/* Body */}
        {/* if our errors are greater than 2, we will display the body */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* Arms */}
         {/* if our errors are greater than 3, we will display the first arm */}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
        {/* if our errors are greater than 4, we will display the second arm */}
        {errors > 3 && <line x1="140" y1="120" x2="160" y2="100"/>}
        {/* Legs */}
         {/* if our errors are greater than 6, we will display the first leg */}
       {errors > 4 &&  <line x1="140" y1="150" x2="120" y2="180" />}
        {/* if our errors are greater than 6, we will display the last leg */}
       {errors > 5 &&  <line x1="140" y1="150" x2="160" y2="180"/>}
      </svg>
    )
}

export default Figure
