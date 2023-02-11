// import React, { useState } from "react";
import "./about.css";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "Black",
  //   backgroundColor: "White",
  // });
  // const [myBtn, setmyBtn] = useState("Enable Dark Mode");
  // const toogleColor = () => {
  //   if (myStyle.color === "Black") {
  //     setMyStyle({
  //       color: "White",
  //       backgroundColor: "Black",
  //     });
  //     setmyBtn("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "Black",
  //       backgroundColor: "White",
  //     });
  //     setmyBtn("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container cont" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
      <h1 className="aboutUs">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
               About Text Transform
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
            Text Transform is a utility which can be used to manipulate your text in the way you want. You can use different features of the website to manipulate the text accordingly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
              <strong>Animesh Jain</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              More features coming
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
              <strong>Coming Soon</strong>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-3">
        <button type="button" onClick={toogleColor} className="btn btn-primary">
          {myBtn}
        </button>
      </div> */}
    </div>
  );
}
