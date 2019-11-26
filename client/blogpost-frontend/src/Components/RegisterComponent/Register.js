import React, { Component } from 'react';
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
        console.log('THIS IS FORM SUBMIT');
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

export default Register;