import React from 'react'

import { Grid, Cell, Card, CardActions, CardMenu, CardTitle } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import './Project.scss'

class Project extends React.Component {

  handleClick(){
    const { project } = this.props;

    browserHistory.push('/portfolio' + project.url);
  }

	render() {
    const { project } = this.props;

    return (
      <Cell className="project" col={4} phone={4} tablet={4} onClick={this.handleClick.bind(this)}>
        <div className="front">
          <img src={project.imgUrl} className="project-img" />
        </div>

        <div className="back">
          <div className="project-title">
            <h3>{ project.name }</h3>
            <span>{ project.skills }</span>
          </div>
        </div>
      </Cell>
    );
	}
}

export default Project
