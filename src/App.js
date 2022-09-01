import React from "react";
import AppBar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import { BsCodeSlash } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <div className="App">
    <ToastContainer/>
    <Home/>
    
    </div>
  );
}

export default App;
