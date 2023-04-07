const searchInput = document.getElementById("search");
const searchContainer = document.querySelector(".header__search");

searchInput.addEventListener("input", function() {
  if (searchInput.value.length > 0) {
    searchContainer.classList.add("with-text");
  } else {
    searchContainer.classList.remove("with-text");
  }
});