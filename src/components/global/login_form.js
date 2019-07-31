import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';

class LoginForm extends Component {
  render() {
    const { emailLabel, emailPH, passLabel, passPH, loginText } = this.props;
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">{emailLabel}</Label>
          <Input type="email" placeholder={emailPH} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">{passLabel}</Label>
          <Input type="password" placeholder={passPH} />
        </FormGroup>
        <Button color="info">{loginText}</Button>
      </Form>
    );
  }
}

export default LoginForm;
