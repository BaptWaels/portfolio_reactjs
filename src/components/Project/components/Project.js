import React from 'react'

import { Grid, Cell, Card, CardActions, CardMenu, CardTitle, Dialog } from 'react-mdl';
import { browserHistory } from 'react-router';


import './Project.scss'

class Project extends React.Component {

  handleClick(){
    const { project, toggleProjectDialog } = this.props;
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // ie only
    document.body.removeEventListener("touchmove", e => e.preventDefault(), false);

    toggleProjectDialog(project);
    //browserHistory.push('/project' + project.url);
  }

  getSkillString(skill, index){
    return this.props.project.skills.length -1 !== index ? skill.name + ', ' : skill.name;
  }

	render() {
    const { project } = this.props;

    var Image = project.imgUrl;

    if(project.main_image){
      var Image = require(`./assets/${project.main_image}`)
    }

    return (
      <Cell className="project" col={4} phone={4} tablet={4} onClick={this.handleClick.bind(this)}>
        <div className="front">
          <img src={Image} alt="Project Image" className="project-img" />
        </div>

        <div className="back">
          <div className="project-title">
            <h3>{ project.name }</h3>
            <span>{ project.skills.map(this.getSkillString.bind(this)) }</span>
          </div>
        </div>
      </Cell>
    );
	}
}

export default Project
