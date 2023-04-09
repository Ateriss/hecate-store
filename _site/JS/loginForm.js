const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

const nameSignIn = document.querySelector("#nameSign");
const emailSignIn = document.querySelector("#emailSign");
const passSignIn = document.querySelector("#passSign");
const btnSignIn = document.querySelector("#btnSign");
const errorSignIn = document.querySelector(".errorSign");

registerButton.addEventListener("click", () => { 
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => { 
    container.classList.remove("right-panel-active");
});

btnSignIn.addEventListener("click", function(event){
    event.preventDefault();

    if(!nameSignIn.checkVisibility()){
        errorSignIn.innerText = 'Please enter a valid name';
        nameSignIn.classList.add("logError");
    }
    else{
        errorSignIn.innerText = '';
        nameSignIn.classList.remove("logError");
    }
})

btnSignIn.addEventListener("click", async (event) => {
    
    const email = emailSignIn.value;

    // Hacemos una petición a la API para obtener la lista de usuarios registrados
    const response = await fetch('https://fakestoreapi.com/users');
    const users = await response.json();
    
    // Buscamos si el correo electrónico ya está registrado en la base de datos
    const emailExists = users.some((user) => user.email === email);
    
    if (emailExists) {
      // Si el correo electrónico ya está registrado, mostramos un mensaje de error
      errorSignIn.innerText = 'El correo electrónico ya está registrado, por favor utilice otro correo electrónico.';
      emailSignIn.classList.add("logError");
    } else {
      // Si el correo electrónico no está registrado, podemos enviar el formulario
      errorSignIn.innerText = ''; 

    }
  });
