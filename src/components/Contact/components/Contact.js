import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import './Contact.scss'

class Contact extends React.Component {
  _handleVisibilityChange(isVisible) {
    if(isVisible){
      browserHistory.push('/#contact');
    }
  };

	render() {
		return (
      <Grid id="contact" className="contact" noSpacing>
        <VisibilitySensor onChange={this._handleVisibilityChange} partialVisibility minTopValue={50} intervalCheck={false} scrollCheck={true} delayedCall={true} />

        <Cell col={12} tablet={8} mobile={4} >
            <div>
              Contact
            </div>
        </Cell>
      </Grid>
    )
	}
}

export default Contact
