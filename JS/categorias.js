const women = document.querySelector(".women");
const men = document.querySelector(".men");
const jewelery = document.querySelector(".jewelery");

async function getCategory(){
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');

        women.innerHTML=`${response.data[3]}`;
        men.innerHTML=`${response.data[2]}`;
        jewelery.innerHTML=`${response.data[1]}`;

    } catch (error) {
        console.log(error);
      }
}


getCategory();