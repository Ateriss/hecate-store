import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Promo(props) {
  const { image, title, description } = props;
  return (
    <div className="banner__promo">
      <Link to="/">
        <img src={image} alt="" className="banner__img" />
        <div className="banner__descripcion--letras">
          <div className="banner__descripcion">
            <h1 className="banner__descripcion--titulo">{title}</h1>
            <p className="banner__descripcion--contenido">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Promo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { Promo };
