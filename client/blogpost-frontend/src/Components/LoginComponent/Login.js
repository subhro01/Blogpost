import React, { Component } from 'react';
import './Login.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailLogin: false,
            email: '',
            password: ''
        }
    }

    onLogin = (strategy) => {
        if(strategy === 'email') {
            this.setState({ emailLogin: true });
        } 
        else if(strategy === 'google') {
            // TODO: redirect to google page
            fetch('http://localhost:5000/auth/google') 
                .then(res => res.json())
                .then(console.log)
                .catch(err => console.log(err));
        }
    }

    onEmailChange = (e) => this.setState({ email: e.target.value });
    onPasswordChange = (e) => this.setState({ password: e.target.value });

    onLoginFormSubmit = () => {
        // TODO: send data to backend system and redirect
        console.log("ON FORM SUBMIT");
    }

    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <h3>LOGIN</h3>
                </div>
                <div className="login-form">
                    { !this.state.emailLogin ? 
                        <button onClick={() => {this.onLogin('email')}} className="login_btn">Login with email</button> 
                        : null }
                    { !this.state.emailLogin ? 
                        <button onClick={() => this.onLogin('google')} className="login_btn">Login with Google</button>
                        : null }
                    { this.state.emailLogin ? 
                        <form className="login_form_fields" method="POST">
                            <input type="text" name="email" 
                                placeholder="Enter email" onChange={this.onEmailChange} required/>
                            <input type="password" name="password" 
                                placeholder="Enter password" onChange={this.onPasswordChange} required/>
                            <button type="submit" onClick={this.onLoginFormSubmit}>Login</button>
                        </form> : null
                    }
                </div>
            </div>
        )
    }
}

export default Login;