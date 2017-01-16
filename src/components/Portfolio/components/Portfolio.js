import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';
import Project from '../../Project';

import './Portfolio.scss'

class Portfolio extends React.Component {

  _handleVisibilityChange(isVisible) {
    if(isVisible){
      browserHistory.push('/#portfolio');
    }
  };

	render() {

    const projects = [
      {name: 'First One', url: '/first', skills: 'React.js, Node.js', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2015/05/atelierdesprecieuses-640x480.jpg'},
      {name: 'Second One', url: '/second', skills: 'Groovy, bash', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2015/02/delivernow2-640x480.jpg'},
      {name: 'Third One', url: '/third', skills: 'DevOps, creativity', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2015/01/logo-identite-visuelle-dyez-640x480.jpg'},
      {name: 'Fourth One', url: '/fourth', skills: 'Java, C#', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2014/12/logotype-flie-attorneys-640x480.jpg'},
      {name: 'Second One', url: '/fifth', skills: 'Public speaking', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2014/12/bd-2-pointdecontact-640x480.jpg'},
      {name: 'Third One', url: '/sixth', skills: 'Angular 2', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2014/11/daras-640x480.jpg'},
      {name: 'Second One', url: '/seventh', skills: 'Bootstrap, OSX, Javascript', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2014/09/neticpro-640x480.jpg'},
      {name: 'Third One', url: '/third', skills: 'REST API, HTTPS, CSS', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2014/09/victoire-2014-640x480.jpg'}
    ];

		return (
      <Grid id="portfolio" className="portfolio" noSpacing>
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={600} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Cell col={12} tablet={8} mobile={4} className="right-portfolio">
          <Grid noSpacing>
            {
              projects.map((project, i) =>
                <Project project={project} key={i} />
              )
            }
          </Grid>
        </Cell>
      </Grid>
    )
	}
}

export default Portfolio
