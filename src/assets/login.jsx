import React from 'react'
const Login = ()=>{
    const [action,setAction] = useState("Login");
    return (
       <div className='login-container'>
        <div className='login-header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src="" alt=""/>
                <input type='text' placeholder='UserName'/>
            </div>

            
            <div className='input'>
                <img src="" alt=""/>
                <input type='password' placeholder='Password'/>

            </div>
        
        </div>
        <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
        <div className='submit-container'>
            <div className={action=='Login'?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>SIGN UP</div>
            <div className={action=='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>LOGIN</div>
        </div>
       </div>
    )
}
export default Login