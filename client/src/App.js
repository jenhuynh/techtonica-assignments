import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const totalQuestions = [
    {
      id: 1,
      title:
        "Independence Day was first established as a holiday by Congress in what year?",
      choices: [
        { answer: "1853", isCorrect: false },
        { answer: "1776", isCorrect: false },
        { answer: "1938", isCorrect: false },
        { answer: "1870", isCorrect: true },
      ],
      correct: "1870",
    },
    {
      id: 2,
      title: "Who was the First President to live in The White House?",
      choices: [
        { answer: "John Adams", isCorrect: true },
        { answer: "Thomas Jefferson", isCorrect: false },
        { answer: "George Washington", isCorrect: false },
        { answer: " James Madison", isCorrect: false },
      ],
      correct: "John Adams",
    },
    {
      id: 3,
      title: "What do the colors of the American Flag symbolize?",
      choices: [
        {
          answer:
            "Nothing, the Founding Fathers simply found them aesthetically pleasing.",
          isCorrect: false,
        },
        {
          answer: "Red: hardiness, White: purity, Blue: perseverance",
          isCorrect: true,
        },
        {
          answer: "Red: compassion, White: peace and unity, Blue: remembrance",
          isCorrect: false,
        },
        {
          answer: " Red: revolution, White: stability, Blue: integrity",
          isCorrect: false,
        },
      ],
      correct: "Red: hardiness, White: purity, Blue: perseverance",
    },
    {
      id: 4,
      title:
        "Calvin Coolidge was the only U.S. President born on The Fourth f July. Three presidents, however, died on that date. Who were they?",
      choices: [
        {
          answer: "George Washington, Chester Arthur and James Monroe",
          isCorrect: false,
        },
        {
          answer: "Abraham Lincoln, Thomas Jefferson and Richard Nixon",
          isCorrect: false,
        },
        {
          answer: "Zachary Taylor, Martin Van Buren and Warren Harding",
          isCorrect: false,
        },
        {
          answer: " John Adams, Thomas Jefferson and James Monroe",
          isCorrect: true,
        },
      ],
      correct: "John Adams, Thomas Jefferson and James Monroe",
    },
    {
      id: 5,
      title:
        'Where did John Philip Sousa compose "The Stars and Stripes Forever", the official march of the United States?',
      choices: [
        {
          answer: "In an army bunker during the Civil War.",
          isCorrect: true,
        },
        {
          answer:
            "In Washington, D.C., after visiting the White House for the first time.",
          isCorrect: false,
        },
        {
          answer: "In his living room, after a particularly good dinner.",
          isCorrect: false,
        },
        {
          answer: "On a boat, en route from a European vacation with his wife.",
          isCorrect: false,
        },
      ],
      correct: "In an army bunker during the Civil War.",
    },
    {
      id: 6,
      title:
        "Where was the first Fourth of July celebration with a fireworks display held?",
      choices: [
        {
          answer: "Washington, D.C.",
          isCorrect: false,
        },
        {
          answer: "New York, New York",
          isCorrect: false,
        },
        {
          answer: "Boston, Massachusetts",
          isCorrect: true,
        },
        {
          answer: "Atlanta, Georgia",
          isCorrect: false,
        },
      ],
      correct: "Boston, Massachusetts",
    },
    {
      id: 7,
      title:
        "How does the community of Seward, Alaska celebrate the Fourth of July?",
      choices: [
        {
          answer: "They raise over 200 flags outside the courthouse.",
          isCorrect: false,
        },
        {
          answer:
            "They host the largest picnic celebration in the United States.",
          isCorrect: false,
        },
        {
          answer:
            "They participate in a six-mile foot race to the top of Mount Marathon.",
          isCorrect: true,
        },
        {
          answer:
            "Children light thousands of candles in a Festival of Lights.",
          isCorrect: false,
        },
      ],
      correct:
        "They participate in a six-mile foot race to the top of Mount Marathon.",
    },
    {
      id: 8,
      title: "2014 marked the 200th birthday of:",
      choices: [
        {
          answer: "The Lincoln Memorial",
          isCorrect: false,
        },
        {
          answer: "The Smithsonian Institution",
          isCorrect: false,
        },
        {
          answer: "The Star-Spangled Banner",
          isCorrect: true,
        },
        {
          answer: "The American flag",
          isCorrect: false,
        },
      ],
      correct: "The Star-Spangled Banner",
    },
    {
      id: 9,
      title:
        "Through which national park does the Continental Divide not pass?",
      choices: [
        {
          answer: "Yellowstone",
          isCorrect: false,
        },
        {
          answer: "Rocky Mountain",
          isCorrect: false,
        },
        {
          answer: "Glacier",
          isCorrect: false,
        },
        {
          answer: "Yosemite",
          isCorrect: false,
        },
      ],
      correct: "Yosemite",
    },
    {
      id: 10,
      title: "Which U.S. president was the first to appear on television?",
      choices: [
        {
          answer: "Abraham Lincoln",
          isCorrect: false,
        },
        {
          answer: "Richard Nixon",
          isCorrect: false,
        },
        {
          answer: "Franklin D. Roosevelt",
          isCorrect: false,
        },
        {
          answer: "Ronald Reagan",
          isCorrect: false,
        },
      ],
      correct: "Franklin D. Roosevelt",
    },
  ];

  {
    /* currentQuestion holds which question the user is currently on and update when the answer button is clicked. so we store a state value to hold which number of question we are on. We start with 0 since that is first question*/
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //state to keep score
  const [showScore, setShowScore] = useState(false);
  //add state to handle score change
  const [score, setScore] = useState(0);
  // anytime user clicks a button, we will increment to the next question, anytime we click button we will pass whether it is the correct answer or not to our function
  const handleAnswerButtonClick = (isCorrect) => {
    //checks if button clicked was the correct answer or not, if it is it will increment score by 1
    if (isCorrect === true) {
      setScore(score + 1);
    }
    //the nextQuestion will equal whatever the current question number is plus one
    const nextQuestion = currentQuestion + 1;
    //conditions accounts for when we run out of questions asked, it will say you finished the quiz
    if (nextQuestion < totalQuestions.length) {
      //changing the state object to whatever the next object will be
      setCurrentQuestion(nextQuestion);
    } else {
      //when user reaches the end of quiz, we will display the score by changing state variable to true
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <h1>U.S. History Quiz</h1>
      {/* //when showScore state is true, it will display the score when the user has answered all the questions. Uses a ternary operator with whole JSX, when it is true, it wil showscore panel. If false, show question panel */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {totalQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/
              {totalQuestions.length}
            </div>
            <div className="question-text">
              {/* taking first item in questions array and getting the question
              which is title */}
              {totalQuestions[currentQuestion].title}
            </div>
          </div>
          <div className="answer-section">
            {/* using map to iterate over array of answers to get each item in the array and display each one in a button*/}
            {totalQuestions[currentQuestion].choices.map((choices) => (
              //button takes in handleAnswerbuttonclick function which takes the current question number and adds one to it each time user clicks on an answer, react will render component again, the current question changes from 0 to 1, so it moves on to the second question in the array and so on, /* add onclick event to increment the number by one anytime the button is clicked */
              <button
                onClick={() => handleAnswerButtonClick(choices.isCorrect)}
              >
                {choices.answer}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={handleAnswerButtonClick}
              className="nextQuestionButton"
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
