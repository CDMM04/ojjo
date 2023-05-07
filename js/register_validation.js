"use strict";

// объявляем переменные
const registerForm = document.querySelector('.register-form');
const username = document.querySelector('.username_field');
const userEmail = document.querySelector('.email_field');
const password1 = document.querySelector('.password1');
const password2 = document.querySelector('.password2');
const checkbox = document.querySelector('.checkbox_terms');
const registerButton = document.querySelector('.register-button');
const errorMessage = document.querySelector('.register-form__error_message');
const successMessage = document.querySelector('.register-form__success_message');


// добавляем слушатель событий нашей форме
registerForm.addEventListener('submit', function(e){
    // отключаем стандартную функцию кнопки submit
    e.preventDefault(); 


    if (formValidate(registerForm)>0){
        successMessage.innerText = "";
        errorMessage.innerText = "Please fill up all the required fields";
    }
    else {
        errorMessage.innerText = "";
        successMessage.innerText = "Thank you for registration";
    }

    // функция валидации
    function formValidate(form){
        const requiredField = form.querySelectorAll('.required_field');
        let error = 0;

        for(let i=0; i<requiredField.length;i++){
            const input = requiredField[i];
            removeError(input);

            if (input.classList.contains('username_field')) {
                let fieldRule = new RegExp('[A-Z]|[А-Я]','i');
                if (input.value.length < 1) {
                    addError(input);
                    error++;
                }
                else if(!fieldRule.test(input.value)) {
                    addError(input);
                    error++;
                }
                else removeError;
            }

            else if(input.classList.contains('email_field')) {
                if (!checkMail(input)) {
                    addError(input);
                    error++;
                }
            }

            else if(input.classList.contains('password1')) {
                if (input.value.length < 8) {
                    addError(input);
                    error++;
                }
                else if (!/[A-Z]/.test(input.value)) {
                    addError(input);
                    error++;
                }
                else if (!/\d/.test(input.value)) {
                    addError(input);
                    error++;
                }
                else if (!/[\W_]/.test(input.value)) {
                    addError(input);
                    error++;
                }
            }
            
            else if(input.classList.contains('password2')) {
                if (password1.value !== password2.value) {
                    addError(input);
                    error++;
                }
            }

            else if (input.getAttribute("type") === "checkbox") {
                if (!input.checked) {
                    addError(input);
                    error++;
                }
            }
            else if (input.value.trim() === "") {
                addError(input);
                error++;
            }

            else{
                return error++;
            }
        }

    return error;    
}

    function checkMail(input) {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return EMAIL_REGEXP.test(input.value);
}

function addError(input) {
    if (input.classList.contains('username_field')) {
        username.style.border = '2px solid red';
        let newError = document.createElement('div');
        newError.className = "username_error";
        newError.innerText = "The name should contain only latin or cirillic letters";
        username.before(newError);

    }
    else if (input.classList.contains('email_field')) {
        userEmail.style.border = '2px solid red';
        let newError = document.createElement('div');
        newError.className = "email_error";
        newError.innerText = "Please provide a correct email address";
        userEmail.before(newError);
    }
    else if (input.classList.contains('password1')) {
        password1.style.border = '2px solid red';
        let newError = document.createElement('div');
        newError.className = "password1_error";
        newError.innerText = "Your password must contain at least 8 symbols, including a capital letter, digit and special symbol";
        password1.before(newError);
        
    }
    else if (input.classList.contains('password2')){
        password2.style.border = '2px solid red';
        let newError = document.createElement('div');
        newError.className = "password2_error";
        newError.innerText = "Your passwords mismatch";
        password2.before(newError);
    }
    else if (password1.value !== password2.value) {
        password2.style.border = '2px solid red';
        
    }  
    else if (input.getAttribute("type") === "checkbox") {
        checkbox.style.border = '2px solid red';
        let checkboxError = document.querySelector('.checkbox_error');
        if (checkboxError !== null){
            checkboxError.remove();
        }
        let newError = document.createElement('div');
        newError.className = "checkbox_error";
        newError.innerText = "Check our terms";
        checkbox.before(newError);
    }
    
}

function removeError(input) {
    if (input.classList.contains('username_field')) {
        username.style.border = 'none';
        let usernameError = document.querySelector('.username_error');
        if (usernameError !== null){
            usernameError.remove();
        }
    }
    else if (input.classList.contains('email_field')) {
        userEmail.style.border = 'none';
        let emailError = document.querySelector('.email_error');
        if (emailError !== null){
            emailError.remove();
        }
    }       
    else if (input.classList.contains('password1')) {
        password1.style.border = 'none'; 
        let password1Error = document.querySelector('.password1_error');
        if (password1Error !== null){
            password1Error.remove();
        } 
    }
    else if (input.classList.contains('password2')) {
        password2.style.border = 'none';
        let password2Error = document.querySelector('.password2_error');
        if (password2Error !== null){
            password2Error.remove();
        } 
    }
    else if (input.classList.contains('checkbox_terms')) {
        let checkboxError = document.querySelector('.checkbox_error');
        if (checkboxError !== null){
            checkboxError.remove();
        } 
    }
}

})
