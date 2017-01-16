import React from 'react'

import { Grid, Cell, Card } from 'react-mdl';
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
      {name: 'Fourth One', url: '/fourth', skills: 'Java, C#', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2013/09/abracadabroc-340x255.jpg'},
      {name: 'Second One', url: '/fifth', skills: 'Public speaking', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2013/09/MRmoustache-340x255.jpg'},
      {name: 'Third One', url: '/sixth', skills: 'Angular 2', imgUrl: 'http://www.mllezel.com/site/wp-content/uploads/2012/10/tropheedelamaison3-340x255.jpg'},
    ];

		return (
      <div id="portfolio" className="portfolio">
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={600} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Grid shadow={4} noSpacing>
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
