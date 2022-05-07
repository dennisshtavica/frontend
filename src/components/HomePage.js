import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



export default function HomePage(){
    return (
      <>
          <Header/>
        <main>
          
          <h1>Jump back in</h1>
          <span>Pick up your music right where you left off.</span>
          <a href=''>OPEN WEB PLAYER</a>
        </main>
              <Footer/>
      </>
    );
}