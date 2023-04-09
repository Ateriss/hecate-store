document.addEventListener("DOMContentLoaded", () => {

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

const user = document.querySelector("#user");
const btnLogin = document.querySelector("#btnLogin");
const errorLogin = document.querySelector("#errorLogin");
const passLogin = document.querySelector("#passLogin")

const nameSign = document.querySelector("#nameSign")
const emailSign = document.querySelector("#emailSign");
const passSign = document.querySelector("#passSign");
const btnSign = document.querySelector("#btnSign");
const errorSign = document.querySelector("#errorSign");

const storedEmail = localStorage.getItem("email");
if (storedEmail) {
    user.value = storedEmail;
    checkbox.checked = true;
}

registerButton.addEventListener("click", () => { 
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => { 
    container.classList.remove("right-panel-active");
});

btnSign.addEventListener("click", async (event) => {
    event.preventDefault();

    let isFormValid = true;

    if (!nameSign.checkValidity()) {
        errorSign.innerText = 'Please enter a valid name like "John Smith"';
        nameSign.classList.add("logError");
        isFormValid = false;
    } else {
        errorSign.innerText = '';
        nameSign.classList.remove("logError");
    }

    if (!emailSign.checkValidity()) {
        if(emailSign.validity.valueMissing) {
            errorSign.innerText = 'Please enter a valid email';
            isFormValid = false;
        } else {
            errorSign.innerText = 'Try something like example@mail.com';
            isFormValid = false;
        }
        emailSign.classList.add("logError");
        isFormValid = false;
    } else {
        emailSign.classList.remove("logError");
    }

    if (!passSign.checkValidity()) {
        errorSign.innerText = 'Password must be at least 8 characters';
        passSign.classList.add('logError');
        isFormValid = false;
    } else {
        passSign.classList.remove('logError');
    }

    if (isFormValid) {
        const emailValue = emailSign.value.toLowerCase();
        const responseLog = await fetch('https://fakestoreapi.com/users');
        const users = await responseLog.json();
        const emailExists = users.some((user) => user.email === emailValue);
        
        if (emailExists) {
            errorSign.innerText = 'The email is already registered, please use another one.';
            emailSign.classList.add("logError");
            isFormValid = false;
        } else {
            emailSign.classList.remove("logError");
            errorSign.innerText = '';
        }
    }
});

btnLogin.addEventListener("click", async (event) => {
    event.preventDefault();

    let isFormValid = true;

    if (!user.checkValidity()) {
        if(user.validity.valueMissing) {
            errorLogin.innerText = 'Please enter a valid email';
        } else {
            errorLogin.innerText = 'Wrong email or password';
        }
        user.classList.add("logError");
        isFormValid = false;
    } else {
        user.classList.remove("logError");
    }

    if (!passLogin.checkValidity()) {
        errorLogin.innerText = 'Wrong email or password';
        passLogin.classList.add('logError');
        isFormValid = false;
    } else {
        passLogin.classList.remove('logError');
    }

    if (isFormValid) {
        const emailValue = user.value.toLowerCase();
        const responseLog = await fetch('https://fakestoreapi.com/users');
        const users = await responseLog.json();
        const emailExists = users.some((user) => user.email === emailValue);
        
        if (!emailExists) {
            errorLogin.innerText = 'The email is not registered, please check your email or sign up.';
            user.classList.add("logError");
            isFormValid = false;
        } else {
            const userIndex = users.findIndex((user) => user.email === emailValue);
            if(users[userIndex].password !== passLogin.value){
                errorLogin.innerText = 'Wrong email or password';
                passLogin.classList.add('logError');
                isFormValid = false;
            } else {
                user.classList.remove("logError");
                passLogin.classList.remove('logError');
                errorLogin.innerText = '';

                if (checkbox.checked) {
                    localStorage.setItem("email", emailValue);
                } else {
                    localStorage.removeItem("email");
                }
            }
        }
    }
});

})
