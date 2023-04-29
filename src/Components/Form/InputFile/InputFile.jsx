

function InputFile(){
    return(
        <div className="contacto__file">
        <input
          type="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          multiple
          id="file__input"
        />
        <label htmlFor="file" className="file__box">
          <span>Do you have any photos to show us?</span>
          <div className="file__img"></div>
          <span>Max 5 Mb</span>
        </label>
        <div className="file__contador">No files have been uploaded</div>
        <ul id="file__list"></ul>
      </div>
    )
}

export { InputFile }