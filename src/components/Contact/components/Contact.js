import React from 'react'

import { Grid, Cell, Card } from 'react-mdl';
import { browserHistory } from 'react-router';

import { SocialIcon } from 'react-social-icons';

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
        <Cell col={8} tablet={8} mobile={4} align="middle" className="left-contact">
          <Cell className="contact-card" shadow={6}>
              <div className="title">
                <h1><span>&lt;</span> B<span className="red">W</span> <span>&gt;</span></h1>
                <h2>Développeur web - Freelance</h2>
              </div>

              <div className="content">
                <div>Tél: +33 (0)6 31 07 52 38</div>
                <div>bwaels@gmail.com</div>
              </div>

              <div className="social">
                <SocialIcon style={{width: 35, height: 35}} url="http://twitter.com/baptwaels" />
                <SocialIcon style={{width: 35, height: 35}} url="https://www.linkedin.com/in/baptistewaels" />
                <SocialIcon style={{width: 35, height: 35}} url="https://medium.com/@baptwaels" />
              </div>
            </Cell>
        </Cell>

        <Cell col={4} hideTablet hidePhone className="right-contact">
          <div className="coffee-mug"></div>
        </Cell>
      </Grid>
    )
	}
}

export default Contact
