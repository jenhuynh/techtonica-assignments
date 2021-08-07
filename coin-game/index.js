//coin toss generator


//add event listener for click events
let button = document.getElementById("flip");
let flipped = document.getElementById("flipped");

function coinFlip(event) {

    //gets the value to input element
    let timesFlipped = document.getElementById("timesFlipped").value;
    //result is stored in the amount variable
    let amount = "";

//for loop to iterate through amount of times specified by user for coin to be flipped
    for (let i = 0; i < timesFlipped; i++) {
 //  Math.random() method generates a random number between 0 and 0.99999999999999999. This can be use to generate a number to decide if the result of the coin flip is a head or a tail.
        
        let coin = Math.random();
//flip results between 0.5 to 0.9999 is head and  flip results between 0.4999 is tail
//coin flips at 0.5

        if(coin < 0.5){
           amount += "<p>Head</p>";
        } else {
           amount += "<p>Tail</p>";
        }
    }
    flipped.innerHTML = amount;
}

//event listener that executes function when a user clicks the button
button.addEventListener('click', coinFlip);