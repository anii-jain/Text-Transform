import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="Text Transform" mode = {mode} toogleMode = {toogleMode} />
      <div className="container">
        <TextForm heading = "Enter the text to analyze below" mode = {mode} />
      </div>
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
