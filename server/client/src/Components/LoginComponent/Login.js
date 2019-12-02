import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';    
import { updateLoginUser } from '../../actions/signin_login_action';
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

    componentDidUpdate() {
        console.log('component did update', this.props.auth.loggedin_user);
        if(this.props.auth.loggedin_user.apiOutput === "logged in") {
            return <Redirect to='/' />
        }
    }

    onLogin = (strategy) => {
        if(strategy === 'email') {
            this.setState({ emailLogin: true });
        } 
        else if(strategy === 'google') {
            this.props.updateLoginUser(null, strategy);
        }
    }

    onEmailChange = (e) => this.setState({ email: e.target.value });
    onPasswordChange = (e) => this.setState({ password: e.target.value });

    onLoginFormSubmit = () => {
        // TODO: send data to backend system and redirect
        const user_detail = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.updateLoginUser(user_detail, 'email');
    }

    onFormSubmit = e => {
        e.preventDefault();
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
                        <form className="login_form_fields" method="POST" onSubmit={this.onFormSubmit}>
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

const mapStateToProps = state => ({
    auth: state.logged
})

export default connect(mapStateToProps, { updateLoginUser })(Login);