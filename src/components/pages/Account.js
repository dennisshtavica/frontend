import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
import { Link } from "react-router-dom";
import './Account.css'


export default function Account(){
    return (
      <>
        <Header />
        <div className="acc-bg">
          <div className="flex-account">
            <div className="acc-side_bar">
              <ul>
                <li>
                  {/* <a href="">Account overview</a> */}
                  <Link to="/account">Account Overview</Link>
                </li>
                <li>
                  <a href="">Edit profile</a>
                </li>
                <li>
                  <a href="">Change password</a>
                </li>
              </ul>
            </div>

            <div className="acc-right_side">
                <h1>Account overview</h1>
                <h3>Profile</h3>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
}