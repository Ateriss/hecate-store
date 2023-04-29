import './banner.css'
import '../Banner/banner.css'
import { Promo } from '../Promo/Promo'
import { promoImages } from '../../API/api'

function Banner(){
    return(
        <section className=" banner">
            <div className="banner__carrusel">
                { 
                    promoImages.map((data)=>{
                    const {img, title, description, id} = data;
                    return (
                    <Promo image={img} title={title} description={description} key={id} 
                    />)
                })
                }
            </div>
        </section>
    )
}

export { Banner }