import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    return (
        <>
            <div className="navbar bg-primary text-primary-content">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/order'}>Order Now</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/about'}>About Us</Link>
                {
                    !loading && <>
                        {
                            !user?.uid ?
                                <>
                                    <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
                                    <Link className="btn btn-ghost normal-case text-xl" to={'/registration'}>Registration</Link>
                                </>
                                :
                                <Link className="btn btn-ghost normal-case text-xl" onClick={() => logOut()}>Logout</Link>
                        }
                    </>
                }
            </div>
        </>
    );
};

export default Header;