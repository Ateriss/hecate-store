

const formSubmit = document.querySelector("#formSubmit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const msjInput = document.querySelector("#msj");
const inputs = document.querySelectorAll('.contacto__intro--texto');
const sendBtn = document.querySelector(".contacto__btn--box");

sendBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if(!nameInput.checkValidity()){
        nameInput.nextElementSibling.innerText= 'We need your name to contact you';
        nameInput.classList.add("error");
    }
    else{
        nameInput.classList.remove("error");
        nameInput.nextElementSibling.innerText= '';
    }

    if(!emailInput.checkValidity()){
        if(emailInput.validity.valueMissing){
            emailInput.nextElementSibling.innerText = 'We need your email to contact you';
        }
        else{
            emailInput.nextElementSibling.innerText = 'Try something like example@mail.com';
        }
        emailInput.classList.add("error");
    }
    else {
        emailInput.classList.remove("error");
        emailInput.nextElementSibling.innerText = '';
    }

    if(!subjectInput.checkValidity()){
        subjectInput.nextElementSibling.innerText= 'Please tell us the reason for the contact';
        subjectInput.classList.add("error");
    }
    else{
        subjectInput.classList.remove("error");
        subjectInput.nextElementSibling.innerText= '';
    }
});

sendBtn.addEventListener("click", () => {
    if(nameInput.validity.valid && emailInput.validity.valid && subjectInput.validity.valid){
        inputs.forEach((input) => (input.value = ""));
        msj.value = "";
        formSubmit.reset();
      setTimeout(
        () =>
          swal({
            title: "Thank you!",
            text: "we will contact you as soon as possible",
            icon: "success",
            button: "Ok <3",
          }),
        500
      )
    }
})

