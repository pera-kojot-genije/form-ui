const inputFirstName = document.getElementById('firstname');
const inputLastName = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const button = document.querySelector('.submit-button');
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector('.form');

function checkInput() {
  if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() !== "" && regEx.test(inputEmail.value)) {
    button.style.backgroundColor = '#f38221';
    document.getElementById('ik0').src = 'bcheck.jpg';
    button.disabled = false;
  } else {
    button.style.backgroundColor = '#2196f3';
    document.getElementById('ik0').src = 'b0.jpg';
    button.disabled = true;
  }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
    console.log(inputFirstName.value);
    console.log(inputLastName.value);
    console.log(inputEmail.value);
    console.log('Submitted');
    
})
