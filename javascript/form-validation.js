const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const phoneNumber = document.getElementById('pnumber');

form.addEventListener('submit', event =>{
  console.log('button pressed');

  event.preventDefault();

  validateInputs();

  
});


const setError = (element, message) => {
  // const inputControl = element.nextSibling;
  // console.log('[error]', inputControl)
  const errorDisplay = element.nextElementSibling;
  
  console.log(message);
  errorDisplay.innerText = message;
  // inputControl.classList.add('error');
  errorDisplay.classList.add("error-show");
  errorDisplay.classList.remove('error-hide');
  
}





// If inputs are valid inputs
const setSuccess = element => {
  // const inputControl = element.nextSibling;
  // console.log('[success]', inputControl)
  const errorDisplay = element.nextElementSibling;
  
  
  // errorDisplay.innerText = message;
  errorDisplay.classList.add("error-hide");
  errorDisplay.classList.remove('error-show');
  
  
};

// 
const validateInputs = () => {
  
console.log('validating inputs');
console.log(email);


  const emailValue = email.value;
  const firstNameValue = fname.value;
  const lastNameValue = lname.value;
  const phoneNumberValue = pnumber.value;
  
  


// <!--Validating email-->
if (emailValue === ''){
    setError(email, 'Email is required');
}  else {
    setSuccess(email);
  }

// <!--Validating firstName-->
if (firstNameValue === ''){
    setError(fname, 'First name is required');
  } else {
    setSuccess(fname);
  }

// <!--Validating lastName-->
  if (lastNameValue === ''){
    setError(lname, 'Last name is required');
  } else {
    setSuccess(lname);
  }


// Validating phoneNumber
  if (phoneNumberValue === ''){
    setError(pnumber, 'Valid phone number is required');
  } else if(phoneNumberValue.length < 10 ) {
    setError(pnumber,'Phone number must be 10 digits long');

  } else {
    setSuccess(pnumber);
    console.log(pnumber);
  }

};