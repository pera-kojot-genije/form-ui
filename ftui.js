const inputFirstName = document.getElementById('firstname');
const inputLastName = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const button = document.querySelector('.submit-button');
const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector('.form');
const progressIcon = document.getElementById('progressIcon') ;

function checkInput() {
  let retValue = false;
  if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() !== "" && regEx.test(inputEmail.value)) {
    button.style.backgroundColor = '#f38221';
    progressIcon.src = 'bcheck.jpg';
    button.disabled = false;
    retValue = true;
  } else {
    if (inputFirstName.value.trim() === "" && inputLastName.value.trim() === "" && inputEmail.value.trim() === "") {
      button.style.backgroundColor = '#2196f3';
      progressIcon.src = 'b0.jpg';
      button.disabled = true;
    }
    if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() === "" && inputEmail.value.trim() === "") {
      progressIcon.src = 'b25.jpg';
    }
    if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() !== "" && inputEmail.value.trim() === "") {
      progressIcon.src = 'b50.jpg';
    }
    if (inputEmail.value.trim() !== "" && !regEx.test(inputEmail.value)) {
      progressIcon.src = 'b75.jpg';
      alert('E mail address is not correct');
    }
  }
  return retValue;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Samo ako je forma dobro ispunjena
    if (checkInput()) {
      console.log(event);
      console.log(inputFirstName.value);
      console.log(inputLastName.value);
      console.log(inputEmail.value);
      console.log('Submitted');
    }
})
