import './banner.css'
import '../Banner/banner.css'
import promo1 from '../../assets/pexels-edgars-kisuro-1488463.jpg'
import promo2 from '../../assets/pexels-andrea-piacquadio-3772506 (1).jpg'
import promo3 from '../../assets/pexels-elina-fairytale-4834151.jpg'

function Banner(){

    return(
        <section className=" banner">
            <div className="banner__carrusel">
                <div className="banner__promo">
                    <a href="#">
                        <img src={promo1} alt="" className="banner__img"/>
                        <div className="banner__descripcion--letras">
                        <div className="banner__descripcion">
                            <h1 className="banner__descripcion--titulo">Promotional May</h1>
                            <p className="banner__descripcion--contenido">Selected products with 33% discount</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="banner__promo">
                    <a href="#">
                        <img src={promo2} alt="" className="banner__img"/>
                        <div className="banner__descripcion--letras">
                        <div className="banner__descripcion">
                            <h1 className="banner__descripcion--titulo">Clearance Winter</h1>
                            <p className="banner__descripcion--contenido">Take advantage of our 2x1 in winter products</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="banner__promo">
                    <a href="#">
                        <img src={promo3} alt="" className="banner__img"/>
                        <div className="banner__descripcion--letras">
                        <div className="banner__descripcion">
                            <h1 className="banner__descripcion--titulo">New collection</h1>
                            <p className="banner__descripcion--contenido">Exclusive models for you and your friends</p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <ul className="banner__puntos">
                <li className="banner__punto"></li>
                <li className="banner__punto"></li>
                <li className="banner__punto"></li>
            </ul>
        </section>
    )
}

export { Banner }