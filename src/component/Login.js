import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const credential = {
    email: '',
    password: ''
}
const Login = () => {
    const [state, setState] = useState(credential)

    const handleInput = e => {
        /*  e.target is an object type */
        const { name, value } = e.target
        /*
        let info ={name:'',id:null}
        info={...info,name:'zishan'}
        info={...info,name:'sharfuddin',id:5}
        */

        /*
        let getData = {}
        getData = { [name]: value }
        console.log(getData);
        */

        /*
        let getsData = { email: '', password: '' }
        getsData = { ...getsData, [name]: value }
        console.log(getsData);
        */

        // setState({ ...state, [name]: value })
        setState(s => ({ ...s, [name]: value }))
    }
    const handleLogin = e => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                {/* <input type="email" onBlur={e => setState({ ...state, email: e.target.value })} name="email" placeholder="email" className="input input-bordered" /> */}
                                <input type="email" onBlur={handleInput} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* <input type="text" onBlur={e => setState({ ...state, password: e.target.value })} name="password" placeholder="password" className="input input-bordered" /> */}
                                <input type="text" onBlur={handleInput} name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/registration" className="label-text-alt link link-hover">Don't Have Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>Login</h1>