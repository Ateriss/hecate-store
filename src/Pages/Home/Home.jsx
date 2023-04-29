import { Banner } from "../../Components/Banner/Banner";
import { CatBox } from "../../Components/Cat/CatBox";
import { Products } from "../../Components/Productos/Productos";
import { Loading } from "./Loading/Loading";
import { fetchData, productRandom } from "../../API/api";
import { useEffect, useState } from "react";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(setLoading, setCategories, setProducts);
  }, []);

  return (
    <main className="container">
      <Banner />
{loading? <Loading/> :
      <CatBox category={categories}>
        {(cat) => {
          const filteredProducts = products.sort(productRandom).filter((product) => product.category === cat).slice(0,5);
          
          return filteredProducts.map((data) => {
            const { title, price, image, id } = data;
            return (
              <Products key={id} title={title} price={price} image={image} />
            );
          });
        }}
      </CatBox>}
    </main>
  );
}

export { Home };
