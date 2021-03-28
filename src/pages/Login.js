import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import "./Login.css";
import firebase from "firebase/app";
require('firebase/auth');
var firebaseConfig = {
    apiKey: "AIzaSyCsuyVBFxBacPt-kgGtnU7lzVcanEpMYfY",
    authDomain: "biove-fbee4.firebaseapp.com",
    projectId: "biove-fbee4",
    storageBucket: "biove-fbee4.appspot.com",
    messagingSenderId: "152663085070",
    appId: "1:152663085070:web:fd2f506c492ae0cbf96c5f",
    measurementId: "G-SEFHV9KE98"
};
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
class Login extends Component {
    render() {
        return (
            <div align="center">
                <div className="nav-bar">
                    <Navbar />
                </div>
                <h1>Sign In</h1>
                <div className="row">
                    <div className="col-xl"></div>
                    <div className="col-xl">
                        <button type="button" className="btn btn-primary p-2" onClick={() => {
                            
                        }}>Sign In with Facebook</button>
                    </div>
                    <div class="col-xl">
                        <button type="button" className="btn btn-danger p-2" onClick={() => {
                            firebase.auth()
                            .signInWithPopup(googleAuthProvider)
                            .then((result) => {
                                console.log(result)
                            });
                        }}>Sign In with Google</button>
                    </div>
                    <div className="col-xl"></div>
                </div>

                <h3>OR</h3>

            </div>
        );
    }
}

export default Login;
