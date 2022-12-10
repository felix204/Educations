import React, { useState } from "react";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-from-container">
            <form className="login-form">
                <h1>Login</h1>
                <label htmlFor="email">E-mail</label>
                <input  type="email"placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">E-mail</label>
                <input  type="password"placeholder="*****" id="password" name="password"/>
                <button type="submit" >Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
         
    )
}