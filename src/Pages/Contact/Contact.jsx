import { Form } from '../../Components/Form/Form'
import img from '../../assets/pexels-photo-3965545.jpeg'
import './contacto.css'

function Contact(){
    return(
        <section className="contacto" id="contacto">
        <h2 className="contacto__titulo">we love to hear from you</h2>
        <div className="contacto__caja">
          <div className="contacto__box">
<div className="contacto__info">
              <div className="contacto__horarios">
                <h1>Call center</h1>
                <p>
                  Call us at (01) 555-5555 from Monday to Sunday from 9:00 a.m. to 9:00 p.m.
                </p>
              </div>
              <div className="contacto__horarios">
                <h1>Hours in our stores</h1>
                <p>Find us from Monday to Sunday from 9:00 a.m. to 9:00 p.m..</p>
              </div>
</div>
            <div className="contacto__form">
              <h1>Do you want to contact us?</h1>
              <p>Sure! Please tell us:</p>
            </div>
        <Form/>
          </div>
          <img src={img} alt="clothes image" className="contacto__img " />
        </div>
      </section>
    )
}

export { Contact }