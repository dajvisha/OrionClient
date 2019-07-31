import React, { Component } from 'react';
import { Modal, ModalBody, CustomInput, ModalHeader, ModalFooter, Button } from 'reactstrap';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

class UploadModal extends Component {

  render() {
    const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!, $user: String!) {
    singleUpload(data: {
        user: $user,
        image: $file
      }) {
        _id
      }
  }
`;

    const { displayUpload, onClose, user } = this.props;
    const closeBtn =
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={onClose}>
        &times;
    </button>;

    return (
      <Modal size="lg" isOpen={displayUpload} external={closeBtn}>
        <ModalHeader>Select your best photo</ModalHeader>
        <ModalBody>
          <Mutation mutation={UPLOAD_FILE}>
            {uploadFile => (
              <CustomInput
                type="file"
                label="Upload a nice photo!"
                onChange={({ target: { validity, files: [file] } }) => {
                  console.log(user);
                  validity.valid && uploadFile({ variables: { file, user } })
                }
                }
              />
            )}
          </Mutation>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClose}>Upload</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default UploadModal;
