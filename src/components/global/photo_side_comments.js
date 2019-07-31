import React, { Component } from 'react';

import Comment from './comment';

import '../assets/css/photo_side_comments.css';

class PhotoSideComments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="photo-side-comments">
        <div>
          {comments.map((comment) =>
            <div key={comment._id} className="photo-side-comment">
              <Comment comment={comment}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoSideComments;
