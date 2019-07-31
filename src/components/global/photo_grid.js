import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';

import PhotoItem from './photo_item';

class PhotoGrid extends Component {
  render() {
    const { action, photos } = this.props;

    return (
      <StackGrid columnWidth={350}>
        {photos.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            action={action} />
        ))}
      </StackGrid>
    );
  }
}

export default PhotoGrid;
