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

        <Cell col={8} tablet={5} mobile={4} className="left-contact" >
            <div>
              Contact
            </div>
        </Cell>

        <Cell col={4} tablet={3} hideTablet hidePhone className="right-contact">
          <div className="coffee-mug"></div>
        </Cell>


      </Grid>
    )
	}
}

export default Contact
