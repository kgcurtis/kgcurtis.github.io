import React, { Component } from 'react';
import Profile from './Profile';
import Links from './Links';
import Bio from './Bio';

class SideBar extends Component {

  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-content-container">
          <Profile/>
          <Links/>
          <Bio/>
        </div>
      </div>
    );
  }

}

export default SideBar;
