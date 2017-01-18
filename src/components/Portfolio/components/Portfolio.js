import React from 'react'

import { Grid, Cell, Card } from 'react-mdl';
import { browserHistory } from 'react-router';

import Project from '../../Project';
import ProjectDialog from '../../ProjectDialog';

import './Portfolio.scss'

class Portfolio extends React.Component {

	render() {

    const projects = [
			{name: 'JWaves', url: '/jwaves', skills: [{name: 'React.js', logo: 'reactjs.png'},{name: 'Redux', logo: 'redux.png'},{name: 'Node.js', logo: 'nodejs.png'},{name: 'MongoDB', logo: 'mongodb.png'}], img: 'jwaves.png'},
			{name: 'Pebblo', url: '/pebblo', skills: [{name: 'React.js', logo: 'reactjs.png'},{name: 'Redux', logo: 'redux.png'},{name: 'Leaflet.js', logo: 'leafletjs.png'}], img: 'pebblo.png'},
			{name: 'Parkki', url: '/parkki', skills: [{name: 'Angular.js', logo: 'angularjs.png'},{name: 'Node.js', logo: 'nodejs.png'},{name: 'Startup', logo: 'startup.png'},{name: 'Bières', logo: 'beer.png'}], img: 'parkki.png'},
			{name: 'Speaker Meetup Docker', url: '/docker-meetup', skills: [{name: 'Docker', logo: 'docker.png'},{name: 'Talk', logo: 'talk.png'},{name: 'Challenge', logo: 'challenge.png'}], img: 'docker_meetup.png'},
      {name: 'Table connectée', url: '/smart-table', skills: [{name: 'DIY', logo: 'diy.png'},{name: 'Créativité', logo: 'creativity.png'},{name: 'Javascript', logo: 'javascript.png'}], img: 'lilly.png'},
      {name: 'Feedback @ Decathlon', url: '/decath-feedback', skills: [{name: 'R&D', logo: 'creativity.png'},{name: 'Angular.js', logo: 'angularjs.png'},{name: 'REST API', logo: 'rest.png'}], img: 'feedback.png'},
      {name: 'DevOps @ Decathlon', url: '/decath-devops', skills: [{name: 'Docker', logo: 'docker.png'},{name: 'DevOps', logo: 'devops.png'},{name: 'Bash', logo: 'bash.png'},{name: 'Jenkins', logo: 'jenkins.png'},{name: '.rpm', logo: 'debian.png'}], img: 'devops.png'},
    ];

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
