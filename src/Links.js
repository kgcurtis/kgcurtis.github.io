import React, { Component } from 'react';
import LinkItem from './LinkItem';

class Links extends Component {

  render() {
    return (
      <div className="link-container">
        <div className="links">
          <LinkItem icon='linkedin' href='https://www.linkedin.com/in/katherine-curtis-94056010b/'/>
          <LinkItem icon='envelope' href='mailto:kcurtis26518@gmail.com'/>
          <LinkItem icon='github' href='https://github.com/kgcurtis/'/>
        </div>
      </div>
  );
  }
}

export default Links;
