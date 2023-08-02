import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

// if not logged in, redirect to /user/login
// if wants to register, redirect to /user/register
const UserRegistration = (props) => {
  return (
    <div className="App">
        <NavBar />
        <div>
            
        </div>
        <Footer />
    </div>
  );
}

export default UserRegistration;