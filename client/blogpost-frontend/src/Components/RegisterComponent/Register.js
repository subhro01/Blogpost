import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewUser } from '../../actions/signin_login_action';
import './Register.css';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onFormSubmit = () => {
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
                <div className="register_form">
                    <form method="POST" onSubmit={this.onFormSubmit} className="register_form_fields">
                        <input type="text" name="email" placeholder="Enter email"/>
                        <input type="text" name="username" placeholder="Enter name"/>
                        <input type="password" name="password" placeholder="Enter Password"/>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { createNewUser })(Register);