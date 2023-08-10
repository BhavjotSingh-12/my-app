import React ,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
        // console.log("Uppercase was clicked" +text);
    }
    const handlelowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
        // console.log("Lowercase was clicked" +text);
    }
    const handleclearClick = ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");
        // console.log("Text Cleared" +text);
    }
    const handleonchange = (event)=>{
        setText(event.target.value);
        // console.log("Onchange");
        // Used to enter the text

    }
    const [text, setText]= useState('');
    // const [text, setText]= useState('Enter text Here');
    // Used to give default value
    // text="newtwxt" Wrong way to change the text
    // setText("new Text") right way to change the text
    return (
      <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
      </div>
     <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to lowercase</button>
     <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Taken</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview"}</p>

    </div>
    </>
  );
}
