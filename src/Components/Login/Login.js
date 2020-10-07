import React, { useContext, useState } from 'react';
import googleLogo from '../images/logos/google.png';
import { Button } from '@material-ui/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { useHistory, useLocation, Link } from 'react-router-dom';
import logo from '../images/logos/Group 1329.png'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const user = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setLoggedInUser(user);
                history.replace(from);
            }).catch(error => {
                console.log(error);
                console.log(error.message)
            });
    }

    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const user = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }
                setLoggedInUser(user);
            }).catch(err => {

            })
    }
    return (
        <div className="setMiddleStyle">
            <img src={logo} alt="" width="200px" /> <br />
            <h5>Welcome <span style={{ color: 'indigo', backgroundColor: 'bisque' }}>{loggedInUser.name}</span> to Volunteer Network</h5>
            <h3>We Grow By Helping People In Need</h3>

            <div className="boxStyle setMiddleStyle">
                <h3>Login With</h3>
                {
                    loggedInUser.isSignedIn ? <Button onClick={handleGoogleSignOut} style={{ width: '500px', borderRadius: '30px' }} variant="contained" color="primary" >
                        <img src={googleLogo} alt="" width="50px" />
           Sign Out from Google
            </Button>
                        : <Button onClick={handleGoogleSignIn} style={{ width: '500px', borderRadius: '30px' }} variant="contained" >
                            <img src={googleLogo} alt="" width="50px" />
           Continue with Google
            </Button>
                } <br />
                <p>Don't Have an account? <Link to="/register">Create an account</Link> </p>
                <br />
                <Button variant="contained" color="secondary">
                    <Link to="/home">Back to Home</Link>
                </Button> <br />
                <Button variant="contained">
                    <Link to="/blog">click here then log-in to see your all registered event</Link>
                </Button>

            </div>

        </div>
    );
};

export default Login;
