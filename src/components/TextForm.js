import React, { useState } from "react";
import "./textForm.css";

export default function TextForm(props) {

  const wordCounter = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    let c = 0, total = 0;
    for (let i = newText.length-1;i>=0;i--){
      let temp = newText[i].split("\n")
      for (let j = temp.length;j>=0;j--){
        if (temp[j]=== '' || temp[j]=== '\n'){
          ++c;
        }
      }
      total += temp.length;
    }
    return (total-c);
  }

  const handleUpClick = () => {
    // console.log("inside button");
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="cont" style = {{color: props.mode==='dark'?'white':'black'}}>
      <div className="container">
        <h3 className="text-center">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Text Here"
            value={text}
            id="myBox"
            rows="11"
            style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="funct">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-2" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {wordCounter()} Words and {text.length} Characters
        </p>
      </div>
    </div>
  );
}
