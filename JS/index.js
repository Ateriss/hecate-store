const productos = document.querySelector('.productos');
let categories = [];

async function getProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      let categories = products.reduce((acc, product) => {
        if (!acc.includes(product.category) && product.category !== "electronics") {
          acc.push(product.category);
        }
        return acc;
      }, []);
      categories.reverse();
      for (let i = 0; i < categories.length; i++) {
        let categoryProducts = products.filter((product) => product.category === categories[i]);
        let randomProducts = [];
        while (randomProducts.length < 5 && categoryProducts.length > 0) {
          let randomIndex = Math.floor(Math.random() * categoryProducts.length);
          randomProducts.push(categoryProducts[randomIndex]);
          categoryProducts.splice(randomIndex, 1);
        }
        let productsHtml = '';
        randomProducts.forEach((product) => {
          let title = product.title;
          let price = product.price.toFixed(2);
          let imageUrl = product.image;
          productsHtml += `
            <div class="producto__unico">
              <a href="#">
                <img src="${imageUrl}" alt="" class="producto__unico--img">
                <div class="producto__unico--txt">
                  <h1 class="producto__unico--titulo">${title}</h1>
                  <p class="producto__unico--precio">$ ${price}</p>
                  <button class="producto__unico--btnCompra">+</button>
                </div>
              </a>
              <button class="producto__unico--btnfav">&#x2764;</button>
            </div>
          `;
        });
        let categoryHtml = `
          <div class="producto__cat">
            <div class="producto__cabeza">
              <h1 class="producto__cat--nombre">${categories[i]}</h1>
              <a href="" class="producto__cat--enlace">Ver todo &#10141;</a>
            </div>
            <div class="producto__box">${productsHtml}</div>
          </div>
        `;
        productos.innerHTML += categoryHtml;
      }
    } catch (error) {
      console.log(error);
    }
  }
  

getProducts();
