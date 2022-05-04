import React, {useState} from "react";
import './Login.css'

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
                <div className="signup-buttons">
                    <button type="button" id="facebook-btn">Sign up with Facebook</button><br/>
                    <button type="button" id="google-btn">Sign up with Google</button>
                </div>
                <form className="Form-wrapper">
                    <div className="email">
                        <label htmlFor="email">Whats your Email?</label><br/>
                        <input type="email" id="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange}/><br/><br/>
                    </div>

                    <div className="password-1">
                        <label htmlFor="password" >Create password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Creat a password" value={values.password} onChange={handleChange}/><br/><br/>
                    </div>
                    <div className="subm-btn">
                        <input type="submit" value="Login" onClick={handleFormSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}