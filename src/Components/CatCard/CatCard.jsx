import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function CatCard(props) {
  const { src, title } = props;

  return (
    <>
    <Link to={`/categories/${title}`} >
    <div className="cat__card">
      <div className="cat__box">
        <h1 className="cat__title women">{title}</h1>
        <img src={src} alt={title} className="cat__img" />
        <span className="cat__ball"></span>
        <p className="cat__row">&#10095;</p>
      </div>
      <span className="cat__top"></span>
      <span className="cat__botton"></span>
    </div>
    </Link>
    </>
  );
}

CatCard.propTypes = {
  src: PropTypes.array,
  title: PropTypes.string,
};

export { CatCard };
