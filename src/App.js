import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
     <div className="App">
      <Header />
      <HomePage/>
      <Footer/>
     </div>
  );
}

export default App;
