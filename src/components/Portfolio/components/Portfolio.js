import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import './Portfolio.scss'

class Portfolio extends React.Component {
  _handleVisibilityChange(isVisible) {
    if(isVisible){
      browserHistory.push('/#portfolio');
    }
  };

	render() {
		return (
      <Grid id="portfolio" className="portfolio" noSpacing>
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={300} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Cell col={4} tablet={3} mobile={4} className="left-portfolio">
          <div className="section-title">
            <div className="sliding">
              Portfolio
            </div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} mobile={4} className="right-portfolio">
        </Cell>
      </Grid>
    )
	}
}

export default Portfolio
