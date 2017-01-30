import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';

import Avatar from '../assets/me_circle.png';
import Travel from '../assets/travel.png';
import Heart from '../assets/heart.png';
import Iterate from '../assets/iterate.png';
import Sport from '../assets/sport.png';
import Quality from '../assets/quality.png';

import './About.scss'

class About extends React.Component {
	render() {
		const { intl } = this.props;

		return (
      <Grid id="about" className="about" noSpacing>
        <Cell col={4} tablet={3} phone={4} className="left-about">
          <div className="section-title">
            <div className="sliding">
              About
            </div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} phone={4} className="right-about">
          <div className="container">
            <div className="avatar">
              <img className="me" alt="Avatar of Baptiste Waels" draggable="false" src={Avatar} />
            </div>

            <Grid>
              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Quality symbol" src={Quality} />
                  <h1>{intl.messages['about.quality.title']}</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    {intl.messages['about.quality.content.first']}<span className="strong">{intl.messages['about.quality.content.second']}</span>{intl.messages['about.quality.content.third']}<span className="strong">{intl.messages['about.quality.content.fourth']}</span>.
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Iteration symbol" src={Iterate} />
									<h1>{intl.messages['about.rapidity.title']}</h1>
                </div>
                <div className="description-container">
                  <div className="description">
										{intl.messages['about.rapidity.content.first']}<span className="strong">{intl.messages['about.rapidity.content.second']}</span>{intl.messages['about.rapidity.content.third']}<span className="strong">{intl.messages['about.rapidity.content.fourth']}</span>.
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Heart symbol" src={Heart} />
									<h1>{intl.messages['about.passion.title']}</h1>
                </div>

                <div className="description-container">
                  <div className="description">
										{intl.messages['about.passion.content.first']}<span className="strong">{intl.messages['about.passion.content.second']}</span>{intl.messages['about.passion.content.third']}<span className="strong">{intl.messages['about.passion.content.fourth']}</span>{intl.messages['about.passion.content.fifth']}<span className="strong">{intl.messages['about.passion.content.sixth']}</span>?
                  </div>
                </div>
              </Cell>

              <Cell col={4} tablet={4} phone={4} offsetDesktop={2}>
                <div className="img-container">
                  <img className="travel-img" draggable="false" alt="Travel symbol" src={Travel} />
									<h1>{intl.messages['about.adventure.title']}</h1>
                </div>
                <div className="description-container">
                  <div className="description">
										{intl.messages['about.adventure.content.first']}<span className="strong">{intl.messages['about.adventure.content.second']}</span>{intl.messages['about.adventure.content.third']}<span className="strong">{intl.messages['about.adventure.content.fourth']}</span>{intl.messages['about.adventure.content.fifth']}.
                  </div>
                </div>
              </Cell>


              <Cell col={4} offsetTablet={2} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Sport symbol" src={Sport} />
									<h1>{intl.messages['about.crossfit.title']}</h1>
                </div>

                <div className="description-container">
                  <div className="description">
                    {intl.messages['about.crossfit.content.first']}<a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=sBt83nuqpxs">Crossfit</a>{intl.messages['about.crossfit.content.second']}<span className="strong">{intl.messages['about.crossfit.content.third']}</span>{intl.messages['about.crossfit.content.fourth']}?
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
