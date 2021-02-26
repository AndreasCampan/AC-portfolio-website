(function() {
  let form = document.querySelector('.contact-form__box');
  let firstNameInp = document.querySelector('#fname');
  let lastNameInp = document.querySelector('#lname');
  let emailInput = document.querySelector('#email');
  let messageInput = document.querySelector('#message');
  let teleInput = document.querySelector('#telephone');

  function hideerror(input){
    let wrapper = input.parentElement;
    let text = wrapper.querySelector('.error');
    text.innerText = "";
  }

  function showErrorMessage(input, message){
    let wrapper = input.parentElement;
    let text = wrapper.querySelector('.error');
    
    if(message){
      text.innerText = message;
    }
  }

  function fNameValid(){
    let name = firstNameInp.value
    if(!name){
      showErrorMessage(firstNameInp, "Please provide your first name");
    }else{
      hideerror(firstNameInp);
      return true;
    }
  }

  function lNameValid(){
    let name = lastNameInp.value
    if(!name){
      showErrorMessage(lastNameInp, "Please provide your last name");
    }else{
      hideerror(lastNameInp);
      return true;
    }
  }

  function telephoneValid(){
    let phone = parseInt(teleInput.value);
    if(!phone){
      showErrorMessage(teleInput, "Please provide a valid phone number");
    }else{
      hideerror(teleInput);
      return true;
    }
  }

  function emailValid(){
    let email = emailInput.value
    if(!email){
      showErrorMessage(emailInput, "Please provide an email address");
    }else if(email.indexOf('@') === -1){
      showErrorMessage(emailInput, "Please provide a valid email address");
    }else if(email.indexOf('.') === -1){
      showErrorMessage(emailInput, "Please provide a valid email address");
    }else{
      hideerror(emailInput);
      return true;
    }
  }

  function messageValid(){
    let message = messageInput.value;
    if (!message){
      showErrorMessage(messageInput, "Please provide a message");
    }else if(message.length < 25){
      showErrorMessage(messageInput, "The message needs to be at least 30 characters long");
    }else{
      hideerror(messageInput);
      return true;
    }
  }

  function validation(){
    let validFname = fNameValid();
    let validLname= lNameValid();
    let validEmail = emailValid();
    let validMessage = messageValid();
    telephoneValid();
    return validFname && validLname && validEmail && validMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validation()){
      alert('Your entry has been submitted');
    }
  });

})();