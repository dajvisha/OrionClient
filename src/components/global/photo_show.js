import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody } from 'reactstrap';

import PhotoShowSide from './photo_show_side';

import '../assets/css/photo_show.css';

class PhotoShow extends Component {
  render() {
    const { displayPhoto, photo, onClose, user, addComment } = this.props;

    const closeBtn =
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={onClose}>
        &times;
      </button>;

    return (
      <Modal size="lg" isOpen={displayPhoto} external={closeBtn}>
        <ModalBody>
          <Row>
            <Col>
              <img src={photo.src} className="photo-user" alt="item" />
            </Col>
            <Col>
              <PhotoShowSide user={user} photo={photo} addComment={addComment}/>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

export default PhotoShow;
