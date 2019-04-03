import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

class Skills extends Component {
  render() {
    return(
      <div className="mt-4">
      <SkillsItem title="Languages"
                  items={[
                    {name:"Java", logo:"java.png"},
                    {name:"Python", logo:"python.png"},
                    {name:"C++", logo:"cpp.png"},
                    {name:"JavaScript", logo:"javascript.png"}
                  ]}/>
      <SkillsItem title="Libraries & Frameworks"
                  items={[
                    {name:"React", logo:"react.png"},
                    {name:"Mocha", logo:"mocha.svg"},
                    {name:"Stanford coreNLP", logo:"corenlp.png"}
                  ]}/>
      <SkillsItem title="Tools"
                    items={[
                      {name:"Docker", logo:"docker.png"},
                      {name:"AWS", logo:"aws.png"},
                      {name:"Firebase", logo:"firebase.png"},
                      {name:"Apache Solr", logo:"apache_solr.png"},
                      {name:"Travis CI", logo:"travis.png"}
                    ]}/>
      </div>
    );
  }
}

export default Skills;
