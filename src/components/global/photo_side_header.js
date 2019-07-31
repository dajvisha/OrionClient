import React, { Component } from 'react';
import { Button } from 'reactstrap';

import '../assets/css/photo_side_header.css';

class PhotoSideHeader extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <div className="side-header-item">
          <img src={user.src} alt="author" className="profile" />
        </div>
        <div className="side-header-item">
          <div className="side-header-author">
            {user.username}
          </div>
        </div>
        <div className="side-header-item">
          <div className="side-header-divisor">
          •
          </div>
        </div>
        <div className="side-header-item">
          <div className="side-header-follow">
            <Button color="link">Follow</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoSideHeader;
