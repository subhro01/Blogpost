import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/logoutAction';
import './Nav.css';
class Nav extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            logged_in: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        console.log('NEXTPROPS', nextProps)
        return { logged_in: nextProps.auth.is_logged_in };
    }
    userLoggedInOrNot = () => {
        console.log('LOGGED', this.state);
        if(!this.state.logged_in) {
            return (
                <React.Fragment>
                    <li className="nav-lgsn"><Link to="/login"><span>Login</span></Link></li>
                    <li className="nav-lgsn"><Link to="/register"><span>Signup</span></Link></li>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <li className="nav-lgsn"><Link to="/my_profile"><span>Profile</span></Link></li>
                    <li className="nav-lgsn">{ this.props.auth.new_user.name }</li>
                    <li className="nav-lgsn" onClick={this.logout}>
                        <Link to="/"><span>Logout</span></Link>
                    </li>
                </React.Fragment>
            )
        }
    }

    logout = () => {
        this.props.logoutUser();
    }

    render() {
        console.log(this.props);
        return (
            <nav className="nav">
                <ul className="nav_ul">
                    <li ><Link to="/" className="logo">Logo</Link></li>
                    { this.userLoggedInOrNot() }
                </ul>
            </nav>
        );
    }
    
}

const mapStateToProps = state => ({
    auth: state.logged
})

export default connect(mapStateToProps, { logoutUser })(Nav);