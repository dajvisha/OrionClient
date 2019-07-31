import React, { Component } from 'react';
import '../assets/css/home.css';

import HomeMenu from '../global/home_menu';
import SignupForm from '../global/signup_form';

class Home extends Component {
    render() {
        return (
            <div className="home-bg">
                <HomeMenu
                    siteName="Orion"
                    emailLabel="Email:"
                    emailPH="nice@email.com"
                    passLabel="Password:"
                    passPH="keep it secret!"
                    loginText="Log In" />
                <SignupForm
                    title="Join us!"
                    usernameLabel="Username:"
                    usernamePH="be creative"
                    emailLabel="Email:"
                    emailPH="nice@email.com"
                    passLabel="Password:"
                    passPH="keep it secret!"
                    signupText="Sign Up"
                />
            </div>
        );
    }
}

export default Home;
