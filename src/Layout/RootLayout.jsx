import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';


const RootLayout = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default RootLayout;