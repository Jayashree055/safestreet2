import React from 'react';
import { Link } from 'react-router-dom';


import "./login.css";

const Login = ()=>{
    return(
        <>
        <form>
        <div className='login-container'>
            <div className='login'>
                <div className='title'><h1>LOGIN</h1></div>
                <div className='inputs'>UserName: </div>
                <input type='text' placeholder='Enter username'/><br/>
                <div className='inputs'>Password: </div>
                <input type='password' placeholder='Enter password'/>
                    <div className="fplink">
                        Forgot your password?{' '}
                        <Link to="/forgotpassword">Click here to reset it!</Link>  
                    
                    </div>
                    
                    <button onClick={() => navigate("/home")}className="btn">Login</button>
                    <div className="register">
                        New User?{' '}
                        <Link to="/register">Register</Link>  
                    
                    
                    </div>
                </div>
        </div>
        </form>
        </>
    )
}
export default Login;
