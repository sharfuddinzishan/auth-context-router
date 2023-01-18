import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main; <h1>Main</h1>