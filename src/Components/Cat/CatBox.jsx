import PropTypes from 'prop-types';



function CatBox({ category, children }) {

    return (
      <section className="productos">
        { 
          category.map((cat) => {
            return (
              <div className="producto__cat" key={cat}>
                <div className="producto__cabeza">
                  <h1 className="producto__cat--nombre">{cat}</h1>
                  <a href="#" className="producto__cat--enlace">
                    Ver todo &#10141;
                  </a>
                </div>
                <div className="producto__box">
                  {children(cat)}
                </div>
              </div>
            );
          })
        }
      </section>
    );
  }
  
  CatBox.propTypes = {
    children: PropTypes.func.isRequired,
    category: PropTypes.array.isRequired
  };
  
  export { CatBox };
  