import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const credential = {
    email: '',
    password: ''
}
const Registration = () => {
    const navigate = useNavigate()
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [state, setState] = useState(credential)

    const handleRegistration = e => {
        e.preventDefault();
        const { email, password } = state
        createUser(email, password)
            .then(result => {
                e.target.reset()
                navigate('/')
            })
            .catch(e => console.error(e))
    }
    const handleGoogleSignIn = e => {
        googleSignIn()
            .then(result => {
                navigate('/')
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" onBlur={e => setState({ ...state, email: e.target.value })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" onBlur={e => setState({ ...state, password: e.target.value })} name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already Have Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <button className="btn btn-sm btn-primary" onClick={handleGoogleSignIn}>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration; <h1>Registration</h1>