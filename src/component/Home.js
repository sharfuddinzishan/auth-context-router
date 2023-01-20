import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Home {user?.displayName || user?.email || ''}!</h1>
            </div>
        </div>
    );
};

export default Home;