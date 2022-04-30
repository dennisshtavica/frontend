import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
     <div className="App">
      <Header />
     </div>
  );
}

export default App;
