import React, { Component } from 'react';
import {
  Navbar, Nav, Col, Row, Container, NavbarBrand, InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';

class AppNavbar extends Component {
  render() {
    const { siteName } = this.props;

    return (
      <Navbar color="light" light expand="md">
        <Container>
          <Row>
            <Col>
              <NavbarBrand href="/">
                {siteName}
              </NavbarBrand>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="ml-auto" navbar>
                <InputGroup>
                  <Input placeholder="explore the world!" />
                  <InputGroupAddon addonType="append">
                    <Button color="secondary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col><Button color="link" onClick={this.props.uploadAction}>Upload</Button></Col>
            <Col><Button color="link">Profile</Button></Col>
            <Col><Button color="link">Settings</Button></Col>
            <Col><Button color="link">LogOut</Button></Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
