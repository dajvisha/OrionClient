import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../assets/css/signup_form.css';

class SignupForm extends Component {
  render() {
    const {
      title,
      usernameLabel,
      usernamePH,
      emailLabel,
      emailPH,
      passLabel,
      passPH,
      signupText
    } = this.props;

    return (
      <Col xs="6">
        <div className="login-form">
          <div className="form-title">
            <h1>{title}</h1>
          </div>
          <Form>
            <FormGroup row>
              <Label sm={2}>{usernameLabel}</Label>
              <Col sm={10}>
                <Input type="text" placeholder={usernamePH} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>{emailLabel}</Label>
              <Col sm={10}>
                <Input type="email" placeholder={emailPH} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>{passLabel}</Label>
              <Col sm={10}>
                <Input type="password" placeholder={passPH} />
              </Col>
            </FormGroup>

            <div className="form-actions">
              <Button color="info">{signupText}</Button>
            </div>
          </Form>
        </div>
      </Col>
    );
  }
}

export default SignupForm;
