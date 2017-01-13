import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import './Skills.scss'

class Skills extends React.Component {
  _handleVisibilityChange(isVisible) {
    if(isVisible){
      browserHistory.push('/#skills');
    }
  };

	render() {
		return (
      <Grid id="skills" className="skills" noSpacing>
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={300} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Cell col={2} tablet={3} mobile={4} className="left-skills">
          <div className="section-title">
            <div className="sliding">
              Skills
            </div>
          </div>
        </Cell>

        <Cell col={10} tablet={5} mobile={4} className="right-skills">
        </Cell>
      </Grid>
    )
	}
}

export default Skills
