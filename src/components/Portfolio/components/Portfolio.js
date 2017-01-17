import React from 'react'

import { Grid, Cell, Card } from 'react-mdl';
import { browserHistory } from 'react-router';

import Project from '../../Project';

import './Portfolio.scss'

class Portfolio extends React.Component {

	render() {

    const projects = [
			{name: 'JWaves', url: '/jwaves', skills: 'React.js, Redux, Node.js, MongoDB', img: 'jwaves.png'},
			{name: 'Pebblo', url: '/pebblo', skills: 'React.js, Redux, Leaflet.js', img: 'pebblo.png'},
			{name: 'Parkki', url: '/parkki', skills: 'Angular.js, Node.js, Startup, Bières', img: 'parkki.png'},
			{name: 'Speaker Meetup Docker', url: '/docker-meetup', skills: 'Docker, Talk, Challenge', img: 'docker_meetup.png'},
      {name: 'Table connectée', url: '/smart-table', skills: 'DIY, Créativité, Javascript', img: 'lilly.png'},
      {name: 'Feedback @ Decathlon', url: '/decath-feedback', skills: 'R&D, Angular.js, REST API', img: 'feedback.png'},
      {name: 'DevOps @ Decathlon', url: '/decath-devops', skills: 'Docker, DevOps, Bash, Jenkins, .rpm', img: 'devops.png'},
    ];

		return (
      <div id="portfolio" className="portfolio">

        <Grid noSpacing>
          {
            projects.map((project, i) =>
              <Project project={project} key={i} />
            )
          }
        </Grid>
      </div>
    )
	}
}

export default Portfolio
