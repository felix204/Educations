import React, { useState } from "react";

export const Register = (props) => {


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    


    return (
        <div className="auth-from-container">
        <form className="register-form">
            <h1>Register</h1>
            <label htmlFor="name">Full Name</label>
            <input type="text"  name="name" id="name" placeholder="Full Name"/>
            <label htmlFor="email">E-mail</label>
            <input type="email"placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">E-mail</label>
            <input  type="password"placeholder="*****" id="password" name="password"/>
            <button type="submit" >Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
    )
}