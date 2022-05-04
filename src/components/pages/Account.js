import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
import './Account.css'

export default function Account(){
    return (
      <>
        <div className="acc-bg">
          <div className="flex-account">
            <div className="acc-side_bar">
              <ul>
                <li>
                  <a href="">Account overview</a>
                </li>
                <li>
                  <a href="">Edit profile</a>
                </li>
                <li>
                  <a href="">Change password</a>
                </li>
              </ul>
            </div>

            <div className="acc-right_side"></div>
          </div>
        </div>
      </>
    );
}