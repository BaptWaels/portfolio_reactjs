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

        <Cell col={8} tablet={5} mobile={4} align="middle" className="left-contact">
          <div className="contact-card">
            <div className="title">
              <h1>Baptiste WAELS</h1>
              <h2>Web developer - Freelance</h2>
            </div>

            <div className="content">
              <div>Tél: +33 (0)6 31 07 52 38</div>
              <div>bwaels@gmail.com</div>
            </div>

            <div className="footer">
              (*) Give me a High Five in the chat -->
            </div>

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
