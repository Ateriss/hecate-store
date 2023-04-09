

const formSubmit = document.querySelector("#formSubmit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const msjInput = document.querySelector("#msj");
const inputs = document.querySelectorAll('.contacto__intro--texto');
const sendBtn = document.querySelector(".contacto__btn--box");

const fileInput = document.getElementById('file__input');
const fileList = document.getElementById('file__list');
const fileCounter = document.querySelector('.file__contador');

document.querySelector('.file__box').addEventListener('click', () => {
  fileInput.click();
});

// Agrega un evento de escucha al input file para detectar cambios
fileInput.addEventListener('change', () => {
    // Obtén los archivos seleccionados
    const files = fileInput.files;
    
    // Actualiza el contador de archivos
    if (files.length === 0) {
      fileCounter.textContent = 'No files have been uploaded';
    } else if (files.length === 1) {
      fileCounter.textContent = '1 file has been uploaded';
    } else {
      fileCounter.textContent = `${files.length} files have been uploaded`;
    }
    
    // Agrega los archivos seleccionados a la lista
    for (const file of files) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const deleteBtn = document.createElement('button'); // Agregar botón para eliminar archivo
      img.style.maxWidth = '70px';
      img.style.maxHeight = '70px';
      li.appendChild(img);
      li.appendChild(deleteBtn); // Agregar botón de eliminación al elemento li
      fileList.appendChild(li);
      
      // Carga la imagen seleccionada en la vista previa
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        img.src = reader.result;
      });
      reader.readAsDataURL(file);
      
      // Agrega un evento de clic al botón de eliminación para eliminar el archivo
      deleteBtn.addEventListener('click', () => {
        deleteBtn.textContent = 'X';
        fileList.removeChild(li);
        if (fileList.childElementCount === 0) {
          fileCounter.textContent = 'No files have been uploaded';
        } else if (fileList.childElementCount === 1) {
          fileCounter.textContent = '1 file has been uploaded';
        } else {
          fileCounter.textContent = `${fileList.childElementCount} files have been uploaded`;
        }
      });
    }
  });
  


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
        fileList.innerHTML = "";
        fileCounter.textContent = "No files have been uploaded";
        fileInput.value = "";
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
});







