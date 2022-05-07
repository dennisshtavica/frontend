import React, {useState} from "react";
import * as events from "events";



const SignUpForm = () => {
    const [values,setValues] = useState(
        {
            email:"",
            confirmEmail:"",
            password:"",
            username:"",
            dateOfBirth:"",
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

    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="title">
                    <h1>Sign up for free to start listening.</h1><br/>
                </div>
                <div className="signup-buttons">
                    <button type="button" id="facebook-btn">Sign up with Facebook</button><br/>
                    <button type="button" id="google-btn">Sign up with Google</button>
                </div>
                <div className="other">

                    <hr/>
                    <p className="dotline">or</p>
                    <hr/>
                    <h3>Sign up with your email address</h3>
                </div>

                <form className="Form-wrapper">
                    <div className="email">
                        <label htmlFor="email">Whats your Email?</label><br/>
                        <input type="email" id="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange}/><br/><br/>
                    </div>
                    <div className="email">
                        <label htmlFor="email" >Confirm your Email</label><br/>
                        <input type="email" id="conf-email" name="confirmEmail" value={values.confirmEmail} onChange={handleChange} placeholder="Enter your email again"/><br/><br/>
                    </div>
                    <div className="password-1">
                        <label htmlFor="password" >Create password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Create a password" value={values.password} onChange={handleChange}/><br/><br/>
                    </div>
                    <div className="profile-name">
                        <label htmlFor="username" >What should we call you?</label><br/>
                        <input type="text" id="username" name="username" placeholder="Enter a profile name" value={values.username} onChange={handleChange}/><br/>This appears in your profile<br/><br/>
                    </div>
                    <div className="birthday">
                        <label htmlFor="birthday-1">What's your birthday?</label><br/>
                        <input type="date" id="birthday-1" name="dateOfBirth" value={values.dateOfBirth}/><br/><br/>

                    </div>
                    <div className="c-gender">
                        <label htmlFor="gender">What's your Gender?</label><br/>
                        <input type="radio" id="gender-m" value="Male"/>
                        <label htmlFor="gender">Male</label>
                        <input type="radio" id="gender-f" value="Female"/>
                        <label htmlFor="gender">Female</label><br/><br/>
                    </div>
                    <div className="confirmations">
                        <input type="checkbox" /> I would prefer not to receive marketing messages from Spotify<br/><br/>
                        <input type="checkbox" /> Share my registration data with Spotify's content providers for <br/>
                        marketing purposes.<br/>
                    </div>
                    <div className="terms">
                        <br/><p>By clicking on sign-up, you agree to Spotify's <a href="https://www.spotify.com/al/legal/end-user-agreement/">Terms and Conditions of Use.</a></p>
                        <p>To learn more about how Spotify collects, uses, shares and protects your<br/>
                            personal data, please see <a href="https://www.spotify.com/al/legal/privacy-policy/">Spotify's Privacy Policy.</a></p><br/>
                    </div>
                    <div className="subm-btn">
                        <input type="submit" value="Sign Up" onClick={handleFormSubmit}/>
                        <p>Have an account? <a href="#">Log in.</a></p>
                    </div>
                </form>

            </div>

        </div>
    )
};
export default SignUpForm;