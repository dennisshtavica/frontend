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
              <div className="profileTable">
                <div className="flex_profile">
                  <p>Username</p>
                  <p>gewgqgergrqfewfewfwewegrqegqerg</p>
                </div>
                <div className="hrLine"></div>
                <div className="flex_profile">
                  <p>Email</p>
                  <p>gewgqgergrqfewfewfwewegrqegqerg</p>
                </div>
                <div className="hrLine"></div>
                <div className="flex_profile">
                  <p>Date of Birth</p>
                  <p>gewgqgergrqfewfewfwewegrqegqerg</p>
                </div>
                <div className="hrLine"></div>
                <div className="flex_profile">
                  <p>Country or region</p>
                  <p>gewgqgergrqfewfewfwewegrqegqerg</p>
                </div>
                <div className="hrLine"></div>
                <button className='edit_profile'>Edit profile</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}