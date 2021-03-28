import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import "./Login.css";
class Login extends Component {
    render() {
        return (
            <div align="center">
                <div className="nav-bar">
                    <Navbar />
                </div>
                <h1>Sign In</h1>
                <div className="row">
                    <div class="col-xl"></div>
                    <div class="col-xl">
                        <button type="button" class="btn btn-primary p-2">Sign In with Facebook</button>
                    </div>
                    <div class="col-xl">
                        <button type="button" class="btn btn-danger p-2">Sign In with Google</button>
                    </div>
                    <div class="col-xl"></div>
                </div>
                
                <h3>OR</h3>

            </div>
        );
    }
}

export default Login;
