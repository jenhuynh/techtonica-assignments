
//creating first name inputs to print output in console
let firstNameButton = document.querySelector(".firstNameButton");

firstNameButton.addEventListener('click', function(event){
  let firstNameForm = document.querySelector('#new_first_name')

let firstName = firstNameForm.value;
console.log(firstName);   
})

//creating first name inputs in form to print out in console
let lastNameButton = document.querySelector('.lastNameButton');

lastNameButton.addEventListener('click', function(event){
 let lastNameForm = document.querySelector('#new_last_name');

 let lastName = lastNameForm.value;
 console.log(lastName);
})

//creating email inputs in form to print out in console
let emailButton = document.querySelector(".emailButton");

emailButton.addEventListener('click', function(event){
 let formEmail = document.querySelector('#new_email');

 let accountEmail = formEmail.value;

 console.log(accountEmail);
})



