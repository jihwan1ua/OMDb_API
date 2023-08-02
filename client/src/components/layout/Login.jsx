import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Typography, TextField, Button, Paper, Link } from '@mui/material';
import getUser from "../../redux/actions/userActions";
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userList);
    const { success, loading, account } = users;
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const loginClick = () => {
        // check if user is found
        // e.preventDefault();
        if (account.length > 0) {
            for (let i = 0; i <= account.length-1; i++) {
                if (email === account[i].Email && pass === account[i].Password)
                {
                    saveLoginState(account[i])
                    loggedin(account[i].Id)

                    return Navigate('/', { state: account[i].Id })
                }
                    // console.log(email + ' was found in DB!')
                    // alert(email + ' was found in DB!')
            }
        }
        // console.log(email + ' was not found in DB!')
        // alert(email + ' was not found in DB!')
        alert('Invalid credential was entered')
        // return Navigate('/user/register')
    }

    return (
      <div>
        <NavBar />
        <Grid container component="main" justifyContent={'center'}>
            <Grid textAlign={'center'} justifyContent={'center'} />
            {/* <Grid item xs={3} component={Paper} square> */}
            <div>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    label="Password"
                    type="password"
                    id="password"
                />
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {loginClick()}}
                >
                    Sign In
                </Button>
                <Grid container>
                    {/* <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid> */}
                    <Grid item>
                    <Link href="/user/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            {/* </Grid> */}
        </Grid>
        <Footer />
      </div>
    );
}

export default Login;