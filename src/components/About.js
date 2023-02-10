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
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', borderWidth: '1px', borderColor: props.mode==='dark'?'white':'black'}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
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
