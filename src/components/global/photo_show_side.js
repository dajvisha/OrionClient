import React, { Component } from 'react';

import PhotoSideHeader from './photo_side_header';
import PhotoSideComments from './photo_side_comments';
import PhotoSideDetails from './photo_side_details';
import PhotoSideComment from './photo_side_comment';

import '../assets/css/photo_show_side.css';

class PhotoShowSide extends Component {
  render() {
    const { user, photo, addComment } = this.props;
    return (
      <div className="photo-show-side">
        <PhotoSideHeader user={user}/>
        <PhotoSideComments comments={photo.comment}/>
        <div className="comment-box">
          <PhotoSideDetails photo={photo}/>
          <PhotoSideComment addComment={addComment}/>
        </div>
      </div>
    );
  }
}

export default PhotoShowSide;
