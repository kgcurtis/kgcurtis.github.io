import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>
      <div className="profile-image"/>
      <div className="name-position-container">
        <div className="name">Katherine Curtis</div>
        <div className="position">Software Engineer</div>
      </div>
      </div>
    );
  }

}

export default Profile;
