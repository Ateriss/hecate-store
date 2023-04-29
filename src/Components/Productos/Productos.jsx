import "./Productos.css";
import PropTypes from "prop-types";
import { HeartCircle } from "iconsax-react";

function Products({ title, price, image }) {
  return (
    <section className="productos">
      <div className="producto__unico">
        <a href="#">
          <img src={image} alt="" className="producto__unico--img" />
          <div className="producto__unico--txt">
            <h1 className="producto__unico--titulo">{title}</h1>
            <p className="producto__unico--precio">{price}</p>
            <button className="producto__unico--btnCompra">+</button>
          </div>
        </a>
        <button className="producto__unico--btnfav">
          <HeartCircle size="32" color="#ac4147" variant="Outline" />
        </button>
      </div>
    </section>
  );
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export { Products };
