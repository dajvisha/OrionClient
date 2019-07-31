import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../assets/css/photo_side_details.css';

class PhotoSideDetails extends Component {
  render() {
    const { photo } = this.props;

    return (
      <div>
        <div className="detail-item">
          <FontAwesomeIcon icon="heart" />
          <div className="details-value">
            {photo.likes} likes
          </div>
        </div>
        <div className="detail-item">
          <FontAwesomeIcon icon="comment" />
          <div className="details-value">
            {photo.comments} comments
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoSideDetails;
