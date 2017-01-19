import React from 'react'

import { Grid, Cell, Card } from 'react-mdl';
import { browserHistory } from 'react-router';

import Project from '../../Project';
import ProjectDialog from '../../ProjectDialog';
import projects from '../assets/projects';

import './Portfolio.scss'

class Portfolio extends React.Component {

	render() {

		return (
      <div id="portfolio" className="portfolio">
        <Grid noSpacing>
          {
            projects.map((project, i) =>
              <Project project={project} key={i} />
            )
          }
					<ProjectDialog />
        </Grid>
      </div>
    )
	}
}

export default Portfolio
