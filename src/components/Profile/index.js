import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import AppNavbar from '../global/app_navbar';
import PhotoGrid from '../global/photo_grid';
import PhotoShow from '../global/photo_show';
import UploadModal from '../global/upload_modal';

import { fetchProfile, fetchProfileImages, fetchImageComments, publishComment } from './../../queries';

import '../assets/css/channel.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUpload: false,
      displayPhoto: false,
      profile: {
        id: '',
        src: '',
        username: '',
        bio: '',
        followers: 0,
        likes: 0,
      },
      currentPhoto: {
        src: 'https://bit.ly/2UcO5PG',
        comment: [],
        likes: 0,
        comments: 0
      },
      photos: [],
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;

    fetchProfile(username).then(data => {
      const profile = data.data.User;

      this.setState({
        profile: {
          src: profile.src,
          username: profile.username,
          bio: profile.bio,
          followers: profile.followers,
          likes: profile.likes
        }
      });
    });

    fetchProfileImages(username).then(data => {
      const images = data.data.Images;
      const imagesProfile = images.map((image) => {
        return {
          id: image._id,
          src: image.src,
          likes: image.likes_total,
          comments: image.comments_total
        };
      });

      this.setState({
        photos: imagesProfile
      });
    });
  }

  photoClicked = (photo) => {
    fetchImageComments(photo.id).then((data) => {
      this.setState({
        currentPhoto: {
          ...this.state.currentPhoto,
          id: photo.id,
          src: photo.src,
          likes: photo.likes,
          comments: photo.comments,
          comment: data.data.Comments
        },
        displayPhoto: true
      });
    });
  }

  addComment = (comment) => {
    const user = this.state.profile.username == 'mensweardog' ? 'toshidog' : 'mensweardog';


    publishComment(this.state.currentPhoto.id, comment, user).then((data) => {
      const total_comments = this.state.currentPhoto.comments + 1;
      const comment_list = this.state.currentPhoto.comment.slice();
      comment_list.push(data.data.addcomment);

      this.setState({
        currentPhoto: {
          ...this.state.currentPhoto,
          comments: total_comments,
          comment: comment_list
        }
      });
    })
  }

  closePhotoShow = () => {
    this.setState({ displayPhoto: false });
  }

  closeUpload = () => {
    this.setState({ displayUpload: false });
  }

  uploadClicked = () => {
    this.setState({ displayUpload: true });
  }

  render() {
    return (
      <div>
        <AppNavbar
          siteName="Dogstagram"
          uploadAction={this.uploadClicked}
        />
        <div className="channel-bg">
          <figure className="snip1336">
            <div className="channel-header"></div>
            <figcaption>
              <img src={this.state.profile.src} alt="profile-sample5" className="profile" />
              <Row>
                <Col xs='9'>
                  <h2>{this.state.profile.username}</h2>
                  <p>{this.state.profile.bio}</p>
                </Col>
                <Col xs='3'>
                  <h2>{this.state.profile.followers} followers</h2>
                  <h2>{this.state.profile.likes} likes</h2>
                </Col>
              </Row>
            </figcaption>
          </figure>
          <PhotoGrid photos={this.state.photos} action={this.photoClicked} />
          <PhotoShow displayPhoto={this.state.displayPhoto} photo={this.state.currentPhoto} onClose={this.closePhotoShow} user={this.state.profile} addComment={this.addComment}/>
          <UploadModal displayUpload={this.state.displayUpload} onClose={this.closeUpload} user={this.state.profile.username}/>
        </div>
      </div>
    );
  }
}

export default Profile;
