import { InputFile } from "./InputFile/InputFile"
import { InputMsj } from "./InputMsj/InputMsj"
import { BtnSubmit } from "./btnSubmit/btnSubmit"
import { InputForm } from "./inputForm/InputForm"


function Form(){
    return(
        <form className="contacto__formulario scroll__animated" id="formSubmit">
              <InputForm/>
              <InputForm/>
              <InputForm/>
              <InputMsj/>
              <InputFile/>
              <BtnSubmit/>
</form>
    )
}

export { Form }