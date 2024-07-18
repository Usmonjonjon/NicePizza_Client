import React, { useState } from 'react'
import { login, register } from "../../api/authRequest";
import './Register.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/authContext';


const Register = ({reset}) => {

    const [isSignup, setIsSignup] = useState(true);
    const [code, setCode] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setCurrentUser } = useInfoContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        toast.loading('Please wait...')
        setLoading(true) 
        try {
            let res;
            if (!isSignup) {
                const password = formData.get('password')
                // signUp
                if (password) {
                    res = await register(formData)
                }
            } else {
                // login
                res = await login(formData)
            }
            toast.dismiss()
            toast.success(res?.data?.message)
            localStorage.setItem("profile", JSON.stringify(res?.data?.user))
            localStorage.setItem("token", JSON.stringify(res?.data?.token))
            setCurrentUser(res?.data?.user); 
            setLoading(false)
            window.location.replace('/')
        } catch (err) {
            setLoading(false)
            toast.dismiss()
            toast.error(err?.response?.data.message)
            console.log(err);
        }

        
    }
    
    return (
        <div className='signup'>
            <div className="signup-page">
                <form onSubmit={handleSubmit} action="" className="auth-form">
                    <div className='input'>
                        <div className='typeAuth'>
                            <h5 style={isSignup ? { cursor: "pointer", borderBottom: '3px solid #002F34', ping: '10px'} : {cursor: "pointer"}} onClick={() => setIsSignup(true)}>Login</h5>
                            <h5 style={!isSignup ? { cursor: "pointer", borderBottom: '3px solid #002F34', ping: '10px'} : {cursor: "pointer"}} onClick={() => setIsSignup(false)}>Register</h5>
                        </div>
                        {!isSignup && <label htmlFor="" className='label'>
                            Username
                            <input type="name" name='name' className="info-input" required/>
                        </label>}
                        <label htmlFor="" className='label'>
                            Email
                            <input type="email" name='email' className="info-input" required/>
                        </label>
                        <label htmlFor="" className='password'>
                            Password <br />
                            <input type={!code ? "password" : 'text'} name='password' className="info-input" required />
                            <span onClick={() => setCode(!code)}>{!code ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}</span>
                        </label>
                    </div>
                    <br />
                    <button disabled={loading} className='btn'>{isSignup ? "Login" : "Register"}</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
