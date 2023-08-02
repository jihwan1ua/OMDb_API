import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addUser, getUser } from '../../redux/actions/userActions';
import NavBar from './NavBar';
import Footer from './Footer';

const Register = () => {
    const [name, setName] = useState('')        
    const [uName, setuName] = useState('')      
    const [email, setEmail] = useState('')  
    const [pass, setPass] = useState('')     

    const loadLoginState = () => {
        try {
            const login = localStorage.getItem('loginState')
            if (login === null) {
                return undefined;
            }
            return JSON.parse(login);
        } catch (err) {
            return undefined;
        }
    }
    
    const saveLoginState = (account) => {
        try {
            const login = JSON.stringify(account.Id);
            localStorage.setItem('loginState', login);
        } catch {
        }
    }

    const Navigate = useNavigate();

    const [login, loggedin] = useState(loadLoginState);

    // submit button click, post input to database
    const handleClick = () => {
        // e.preventDefaul();
        const userInfo = {
            Name: name,
            UserName: uName,
            Email: email,
            Password: pass
        }
        if (name === '' || uName === '' || email === '' || pass === ''){
            alert('All required fields need to be filled.')
        }
        else
        {
            dispatch(addUser(userInfo))
            // dispatch(getUser())

            // saveLoginState(userInfo)
            // loggedin()

            return Navigate('/user/login')
        }
    }

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
      <div>
        <NavBar />
        <Grid container component="main" justifyContent={'center'}>
        <Grid textAlign={'center'} justifyContent={'center'} />
        <div>
            <Typography component="h1" variant="h5" mb={2}>
            Sign up
            </Typography>
            <form noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    name="name"
                    value={name}
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    name="userName"
                    value={uName}
                    onChange={(e) => setuName(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="pass"
                    value={pass}
                    label="Password"
                    type="password"
                    id="pass"
                    onChange={(e) => setPass(e.target.value)}
                />
                </Grid>
            </Grid>
            <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {handleClick()}}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/user/login" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Grid>
        <Footer />
      </div>
    );
    
  }
  
export default Register;