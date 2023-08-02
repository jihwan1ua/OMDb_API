import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Login from './Login';
import { Grid } from '@mui/material';
import Register from './Register';

// if not logged in, redirect to /user/login
// if wants to register, redirect to /user/register
const UserRegistration = (props) => {
  return (
        <div className="App">
            <NavBar />
            
            <Footer />
        </div>
  );
}

export default UserRegistration;