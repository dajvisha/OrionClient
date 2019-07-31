import React, { Component } from 'react';
import {
  Nav, InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';

class PhotoSideComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
  }

  updateComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleOnClick = () => {
    const comment = this.state.comment;
    this.setState({comment: ''});
    this.props.addComment(comment);
  }

  render() {
    return (
      <Nav className="ml-auto" navbar>
        <InputGroup>
          <Input placeholder="Add a comment ..." value={this.state.comment} onChange={this.updateComment} />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.handleOnClick}>Comment</Button>
          </InputGroupAddon>
        </InputGroup>
      </Nav>
    );
  }
}

export default PhotoSideComment;
