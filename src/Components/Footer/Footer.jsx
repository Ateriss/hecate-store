import './footer.css'
import logo from '../../assets/1-o.png'
import { Facebook, Instagram } from 'iconsax-react'

function Footer(){
    return(
        <footer className="container">

        <section className="footer">
            <div className="footer__box">
            
            <div className="footer__info">
                <ul>
                    <li><a href="#" className="footer__info--item">About us</a></li>
                    <li><a href="#" className="footer__info--item">Privacy policies</a></li>
                    <li><a href="#" className="footer__info--item">loyalty program</a></li>
                    <li><a href="#" className="footer__info--item">Our shops</a></li>
                    <li><a href="#" className="footer__info--item">I want to be a franchisee</a></li>
                </ul>
            </div>
            <div className="footer__logo">
                <img src={logo} alt="logo"/>
                <div className="footer__desarrollado"><a href="" >
                    <h1 className="footer__desarrollado--txt">Developed by</h1>
                    <p className="footer__desarrollado--txt">Alexandra Linares Viña</p>
                    <p className="footer__desarrollado--txt">Copyright &copy; 2023 Ateriss</p>
                </a></div>
            </div>
            <div className="footer__contacto">
                <ul>
                    <li className="footer__contacto--item">
                        <span>
                            Follow us in
                        </span>
                        <ul>
                            <li className="footer__contacto--rrss fb"><Facebook size="32" color="#ac4147"/></li>
                            <li className="footer__contacto--rrss instagram"><Instagram size="32" color="#ac4147"/></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
        </section>

    </footer>
    )
}

export { Footer }