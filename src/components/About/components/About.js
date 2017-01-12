import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import './About.scss'

class About extends React.Component {
  _handleVisibilityChange(isVisible) {
    if(isVisible){
      browserHistory.push('/#about');
    }
  };

	render() {
		return (
      <Grid id="about" className="about">
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={300} intervalCheck={false} scrollCheck={true} delayedCall={true} />
        <div>Coucou</div>
      </Grid>
    )
	}
}

export default About
