import React, { Component } from 'react';
import { Row, Col } from 'mdbreact';

class SkillsItem extends Component {

  constructor(props){
    super(props);
    this.state = { ...props };
  }

  render() {

    const items = this.state.items.map(item => (
      <Col sm="2" md="2" className="text-center">
        <img alt="logo" src={item.logo}/>
        <br/>{item.name}
      </Col>
    ));


    return(
      <div className="skills-item mb-4">
        <h5>{this.state.title}</h5>
        <hr className="mb-4"/>
        <Row> { items } </Row>
      </div>
    );
  }
}

export default SkillsItem;
