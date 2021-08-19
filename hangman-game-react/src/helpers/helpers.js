//creating helper function to show notification
export function showNotification(setter) {
    //initially set to true
    setter(true);
    //after 2 seconds, will set it to false
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checkWin(correct, wrong, word){
    let status = 'win';
//change status dependent on what we user inputs

    //check for wins
    // split splits each string into individual letters, 
    word.split('').forEach(letter => {
        //if our correct letters in array does not include a letter from our word then we'll set status equal to nothing which means we haven't won or lost
        if(!correct.includes(letter)){
            status = '';
        }
    });
    //check for loss, we have set limit to six chances. If we reach 6 chances, we lost
    if(wrong.length === 6) status = 'lose';
 //it will return we won, we didn't win or lose or we lost
    return status;
}
