import './header.css'
import logo from '../../assets/2-o.png'
import { User, ShoppingCart } from 'iconsax-react'
import { Link } from 'react-router-dom';
import { SearchNormal1 } from 'iconsax-react';



function Header() {
    return (
      <header className="container">
        <section className="header">
          <div className="header__box">
            <div className="header__logo">
              <img src={logo} className="header__logo--img"/>
              <h1 className="header__logo--nombre">hécate store</h1>
            </div>
            <div className="header__nav">
              <ul>
                <li>
                  <Link to="/" className="header__nav--item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="categories" className="header__nav--item">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="contact" className="header__nav--item">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__search">
              <button className="header__search--img"><SearchNormal1 size="32" color="#f88863"/></button>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                required
                minLength={4} 
              />
            </div>
            <div className="header__icons">
              <div className="header__user">
              <User size="32" color="#ac4147"/>
                <ul>
                  <li>
                    <Link
                      className="header__user--user login"
                      to="login"
                    >
                      Login <br /> or <br /> Sign In
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header__carrito">
                <a href="#">
                <ShoppingCart size="32" color="#ac4147"/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }


/*
function Header(){
    return(
        <header className="container"> 
        
        <section className="header w-screen h-70 bg-claro z-999999 fixed">
            <div className="flex justify-between items-center mx-auto my-4 max-w-7xl">
            <div className="flex items-center">
<div  className="header__logo--img"></div>
                <h1 className="font-family: 'Cinzel', serif, text-mediooscuro  text-2xl font-semibold uppercase"> hécate</h1>
            </div>
            <div>
                <ul className="flex">
                    <li><a href="/index.html" className="p-2 md:p-4 text-lg md:text-xl font-normal text-mediooscuro transition-all duration-500 hover:bg-medio hover:tracking-widest active:bg-mediooscuro active:text-claro">Home</a></li>
                    <li><a href="/pages/productos.html" className="p-2 md:p-4 text-lg md:text-xl font-normal text-mediooscuro transition-all duration-500 hover:bg-medio hover:tracking-widest active:bg-mediooscuro active:text-claro">Products</a></li>
                    <li><a href="/pages/contacto.html" className="p-2 md:p-4 text-lg md:text-xl font-normal text-mediooscuro transition-all duration-500 hover:bg-medio hover:tracking-widest active:bg-mediooscuro active:text-claro">Contact</a></li>
                </ul>
            </div>
            <div className="flex h-45 w-48 bg-muyclaro rounded-xl items-center px-2 ease-in-out hover:w-1/3 ">
<button className="header__search--img"></button>
                <input type="search" name="search" id="search" placeholder="Search" required  minLength="4" className="font-size-1.25 text-color-oscuro rounded-xl border-none p-2 w-70 bg-transparent outline-none  w-full  " />
                
            </div>
            <div className="header__icons">
                <div className="header__user"> 
                    <div className="header__user--img"></div>
                    <ul>
                        <li><a className="header__user--user login" href="/pages/login.html">Login or Sign In</a></li>
                    </ul>
                </div>
                <div className="header__carrito">
                    <a href="#" ><div className="header__carrito--img"></div></a>
                </div>
            </div>
        </div>
        </section>
    
    </header>
    )
}
*/
export { Header };
