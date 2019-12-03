import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import { createNewUser } from '../../actions/signin_login_action';
import './Register.css';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            message: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        return { message: nextProps.logged.new_user.apiOutput };
    }

    showNotification = () => {
        if(this.state.message === 'success') return <Redirect to='/login'/>
        else if (this.state.message === 'User already exists') {
            return (
                <div className="register-notification">
                    <h4>{ this.state.message }</h4>
                </div>
            )
        } else return null;
    }

    emailChange = (e) => this.setState({ [e.target.name]: e.target.value });
    nameChange = (e) => this.setState({ name: e.target.value });
    passwordChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onFormSubmit = (e) => {
        e.preventDefault();
        const new_user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.props.createNewUser(new_user);
    }

    render() {
        return (
            <div className="register">
                <div className="register_header">
                    <h3>Register</h3>
                </div>
                <div>
                    {this.showNotification()}
                </div>
                <div className="register_form">
                    <form method="POST" onSubmit={this.onFormSubmit} className="register_form_fields">
                        <input type="text" name="email" placeholder="Enter email" onChange={this.emailChange}/>
                        <input type="text" name="username" placeholder="Enter name" onChange={this.nameChange}/>
                        <input type="password" name="password" placeholder="Enter Password" onChange={this.passwordChange}/>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logged: state.logged
})

export default connect(mapStateToProps, { createNewUser })(Register);