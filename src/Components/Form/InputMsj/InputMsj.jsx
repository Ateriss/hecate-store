

function InputMsj(){
    return(
        <div className="mensaje">
        <textarea
          id="msj"
          type="text"
          name="message"
          rows="5"
          className="contacto__intro--texto msj"
          required
          placeholder="Message"
        ></textarea>

        <span className="contacto__intro--error"></span>
      </div>
    )
}

export { InputMsj }