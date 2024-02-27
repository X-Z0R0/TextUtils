import React, { useState } from 'react'

export default function TextForm(props) {
   const [text, setText] = useState('')
   const changeUpText = () => {
      var newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Text changed to uppercase", "success");
   }
   const changeLowText = () => {
      var newText = text.toLowerCase();
      setText(newText)
      props.showAlert("text changed to lowercase","success");
   }
   const capitalizeText = () => {
      var newText = text.charAt(0).toUpperCase() + text.slice(1);
      setText(newText);
   }
   
   const clearText = () => {
      setText('')
      props.showAlert("Text cleared","success");

   }
   const HandleOnChange = (event) => {
      setText(event.target.value)
   }
   
   return (
      <>
         <div className="container">
         <h3>{props.heading}</h3>
         <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} value={text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2" onClick={changeUpText}>Convert To Upper-Case</button>
         <button className="btn btn-primary mx-2" onClick={changeLowText}>Convert To Lower-Case</button>
         <button className="btn btn-primary mx-2" onClick={capitalizeText}>Capitalize Text</button>
         <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
         </div>
         <div className="container my-3">
            <h1>Text Summary</h1>
            <p>Total Word Count : {text.split(' ').length}<br />Total character Count: {text.length}</p>
            <p>Reading Time: {Number((0.008 * text.split(' ').length).toFixed(2))} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in the Textbox above to preview it here..."}</p>
         </div>
      </>
   )
}
