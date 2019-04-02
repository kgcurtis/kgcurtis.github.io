import React, { Component } from 'react';
import { Col } from 'mdbreact';

class ProjectItem extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {

    const repoLink = "https://github.com/kgcurtis/" + this.state.repo;

    return(
      <Col sm="12" md="6" lg="6" xl="4">
        <a href={ repoLink }>
        <div className="project-item">
          <div className="project-item-image">
            <img alt="project" src={this.state.img}/>
          </div>
          <div className="project-item-header">
            {this.state.title}
          </div>
        </div>
        </a>
      </Col>
    );
  }
}

export default ProjectItem;
