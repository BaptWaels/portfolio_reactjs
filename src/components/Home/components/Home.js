import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';
import './Home.scss'

import Typist from 'react-typist';

class Home extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			pos: {x: 0, y: 0}
		};
	}

  onMouseMove(e) {
    this.setState({
    	pos: {
    		x: e.pageX,
    		y: e.pageY
    	}
    });

    this.animate();
  }

	animate() {
	    if ('ontouchstart' in window == false) {
        let [moveX, moveY] = [(this.state.pos.x / -100), (this.state.pos.y / -120)];
        let { section, willMove } = this.refs;

				willMove.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
		}
	}

	render() {
    let cursor = {
      show: true,
      blink: true,
      hideWhenDone: true,
      hideWhenDoneDelay: 1500
    };

		return (
      <Grid onMouseMove={this.onMouseMove.bind(this)} id="home" className="home" noSpacing>
        <div style={{width:'100%'}}>
          <Cell col={12} tablet={8} phone={4}>
            <h1 className="middle" ref="section">
              <span className="bold" ref="willMove">Hi, I'm <span className="red">Baptiste</span></span>
              <br/>
            </h1>
          </Cell>

          <Cell col={12} tablet={8} phone={4}>
            <Typist avgTypingDelay={80} startDelay={1500} cursor={cursor}>
              <span className="job">Développeur web<br /> Freelance</span>
            </Typist>
          </Cell>
        </div>
      </Grid>
    )
	}
}

export default Home
