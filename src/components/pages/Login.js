import React, {useState} from "react";
import './Login.css'
import {UserIcon, UserIconBlack} from "../../assets/Icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faApple, faFacebookF, faGoogle,} from '@fortawesome/free-brands-svg-icons'



export default function Login(){
    const [values,setValues] = useState(
        {
            email:"",
            password:"",
        }
    )
    const handleChange = (event) =>{
        setValues(
            {
                ...values,
                [event.target.name]: event.target.value,
            }
        )
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="container">
            <div className="app-wrapper">
                <div className="logo-spotify">
                    <UserIconBlack/>   <br/>
                    <hr/>
                </div>
                <div className="signup-buttons">
                    <br/><br/><br/>
                    <h3>To continue, log in to Spotify.</h3>
                    <button type="button" id="facebook-btn"><FontAwesomeIcon icon={faFacebookF} className="facebook-icon"/>CONTINUE WITH FACEBOOK</button><br/>
                    <button type="button" id="apple-btn"><FontAwesomeIcon icon={faApple} className="apple-icon"/>CONTINUE WITH APPLE</button>
                    <button type="button" id="google-btn"><FontAwesomeIcon icon={faGoogle} className="google-icon"/>CONTINUE WITH GOOGLE</button>
                </div>
                <div className="dotline-1">
                    <hr/>
                    <p>or</p>
                    <hr/>
                </div>
                <form className="Form-wrapper">
                    <div className="email">
                        <label htmlFor="email">Email address or username</label><br/>
                        <input type="email" className="email-login" name="email" placeholder="Enter email address or username" value={values.email} onChange={handleChange}/><br/><br/>
                    </div>

                    <div className="password-1">
                        <label htmlFor="password" >Password</label><br/>
                        <input type="password" className="password-login"  name="password" placeholder="Password" value={values.password} onChange={handleChange}/><br/><br/>
                    </div>
                    <p>Forgot your password?</p>
                    <div className="subm-btn">
                         <div className="inputi">
                            <input type="checkbox"/> RememberMe
                        </div>

                        <input type="submit" value="Login" onClick={handleFormSubmit}/>
                    </div>
                    <hr/>
                    <div className="low-btn">
                            <h2>Don't have an account?</h2>
                        <button type="button" id="spotify-btn">SIGN UP FOR SPOTIFY</button><br/>
                    </div>
                </form>
            </div>
        </div>
    )
}