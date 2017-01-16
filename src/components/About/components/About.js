import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import VisibilitySensor from 'react-visibility-sensor';

import Happy from '../assets/happy.png'
import Travel from '../assets/travel.png'
import Heart from '../assets/heart.png'
import Iterate from '../assets/iterate.png'
import Sport from '../assets/sport.png'
import Quality from '../assets/quality.png'

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
          <div className="container">
            <div className="avatar">
              <img className="me" draggable="false" src="https://js.coach/assets/jess-b1bdee06bb880adf0d84b22e860602edb21e471b703a438c87a60b95c4058d9c.png" />
            </div>

            <Grid>
              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" src={Quality} />
                  <h1>Qualité</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" src={Iterate} />
                  <h1>Rapidité</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" src={Heart} />
                  <h1>Passion</h1>
                </div>

                <div className="description-container">
                  <div className="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4} offset={2}>
                <div className="img-container">
                  <img className="travel-img" draggable="false" src={Travel} />
                  <h1>Aventure</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    s'adapter, ouverture d'esprit, inspiration
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
                  </div>
                </div>
              </Cell>


              <Cell col={4} offsetTablet={2} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" src={Sport} />
                  <h1>Crossfit</h1>
                </div>

                <div className="description-container">
                  <div className="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
                  </div>
                </div>
              </Cell>
            </Grid>
          </div>
        </Cell>
      </Grid>
    )
	}
}

export default About
