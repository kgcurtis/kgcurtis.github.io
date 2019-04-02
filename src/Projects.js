import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import { Row, Container } from 'mdbreact';

class Projects extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="project-items-container">
            <ProjectItem
              title="Information Retrieval"
              img="solr.png"
              repo="nlp_ir"
            />
            <ProjectItem
              title="Information Extraction"
              img="informationextraction.png"
              repo="info_extraction"
            />
            <ProjectItem
              title="React Auth App"
              img="auth_app.png"
              repo="basic_auth_app"
            />
            <ProjectItem
              title="React Resume"
              img="resume.png"
              repo="react_resume"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
