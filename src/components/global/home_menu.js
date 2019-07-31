import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav
} from 'reactstrap';

import LoginForm from './login_form';

class HomeMenu extends Component {
  render() {
    const { siteName, emailLabel, emailPH, passLabel, passPH, loginText } = this.props;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          {siteName}
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <LoginForm
            emailLabel={emailLabel}
            emailPH={emailPH}
            passLabel={passLabel}
            passPH={passPH}
            loginText={loginText} />
        </Nav>
      </Navbar>
    );
  }
}

export default HomeMenu;
