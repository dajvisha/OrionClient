import React, { Component } from 'react';

import '../assets/css/photo_item.css';

class PhotoItem extends Component {
  photoClicked = () => {
    this.props.action(this.props.photo);
  }

  render() {
    const { photo } = this.props;

    return (
      <div className="photo-container" onClick={this.photoClicked}>
        <img className="photo-item" src={photo.src} alt="item" />
        <div className="photo-details">
          <div>Likes {photo.likes}</div>
          <div>Comments {photo.comments}</div>
        </div>
      </div>
    );
  }
}

export default PhotoItem;
