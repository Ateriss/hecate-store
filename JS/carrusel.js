const carrusel = document.querySelector(".banner__carrusel");
const punto = document.querySelectorAll(".banner__punto");
let intervalo;

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let position = i;
    let operacion = position * -33.33;

    carrusel.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});

function animarCarrusel() {
  let position = 0;
  intervalo = setInterval(() => {
    if (position < 2) {
      position++;
    } else {
      position = 0;
    }
    let operacion = position * -33.33;
    carrusel.style.transform = `translateX(${operacion}%)`;
    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[position].classList.add("activo");
  }, 5000);
}

animarCarrusel();


const searchInput = document.getElementById("search");
const searchContainer = document.querySelector(".header__search");

searchInput.addEventListener("input", function() {
  if (searchInput.value.length > 0) {
    searchContainer.classList.add("with-text");
  } else {
    searchContainer.classList.remove("with-text");
  }
});