import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="Text Transform" mode={mode} toogleMode={toogleMode} />
        <Routes>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <div className="container">
              <TextForm heading="Enter the text to analyze below" mode={mode} />
            </div>
          </Route>
        </Routes>
      </Router> */}
      <Router>
        <Navbar title="Text Transform" mode={mode} toogleMode={toogleMode} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <div className="container">
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
