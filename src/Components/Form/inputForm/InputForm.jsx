
function InputForm(){
    return(
        <div className="contacto__intro">
        <input
          id="name"
          type="text"
          className="contacto__intro--texto"
          required
          name="name"
          placeholder="Full Name"
        />
        <span className="contacto__intro--error valueMissing"></span>
      </div>
    )
}

export { InputForm }