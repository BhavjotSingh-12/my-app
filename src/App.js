import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  /* Check wether dark mode is enabled or not */
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
      {/* title attribute is used when we want to use same thing from a particular program but with different name */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/About"
            element={<About />}>
          </Route>

          <Route path="/"
            element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} />}>
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
