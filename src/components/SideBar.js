import React, { Component } from 'react';
import Profile from './Profile';
import Links from './Links/Links';

class SideBar extends Component {

  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-content-container">
          <Profile/>
          <Links/>
          <div className="bio">
            Hi, I'm Katherine Curtis. I'm a software engineer currently living in
            Austin, TX but headed to Seattle, WA to work for Microsoft after
            graduating from UT Austin in Spring 2019.
          </div>
        </div>
      </div>
    );
  }

}

export default SideBar;
