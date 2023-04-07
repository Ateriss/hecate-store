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


