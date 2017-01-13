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
      <Grid id="about" className="about" noSpacing>
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={300} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Cell col={4} tablet={3} mobile={4} className="left-about">
          <div className="section-title">
            <div className="sliding">
              About
            </div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} mobile={4} className="right-about">
        </Cell>
      </Grid>
    )
	}
}

export default About