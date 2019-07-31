import React, { Component } from 'react';

import '../assets/css/comment.css';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <div className="comment-author">
          <img src={comment.user_src} alt="author" className="comment-author-photo" />
        </div>
        <div className="comment-body">
          <span className="comment-author-username">{comment.user}</span> {comment.body}
        </div>
      </div>
    );
  }
}

export default Comment;
