import React from 'react'

import { Grid, Cell } from 'react-mdl';
import { browserHistory } from 'react-router';


import FrontEnd from '../assets/front_end.png';
import BackEnd from '../assets/back_end.png';
import Automate from '../assets/automate.png';

import './Presta.scss'

class Presta extends React.Component {

	render() {
		return (
      <Grid id="presta" className="presta" noSpacing>
        <Cell col={4} tablet={3} phone={4} className="left-presta">
          <div className="section-title">
            <div className="sliding">
              Presta
            </div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} phone={4} className="right-presta">
          <div className="container">

            <Grid>
              <Cell col={6} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Front End symbol" src={FrontEnd} />
                  <h1>Front-End</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    Réalisation de sites web <span className="strong">intuitifs, dynamiques et responsives</span> (web, mobile). Tout est possible, la seule limite est <span className="strong">notre imagination</span>.
                  </div>
                </div>
              </Cell>

              <Cell col={6} tablet={4} phone={4}>
                <div className="img-container">
                  <img draggable="false" alt="Back End symbol" src={BackEnd} />
                  <h1>Back-End</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    Le Back-End est la <span className="strong">partie serveur</span> de votre site internet (site dynamique, base de données...). C'est bien plus fun un <span className="strong">site dynamique</span> !
                  </div>
                </div>
              </Cell>

              <Cell col={6} tablet={4} phone={4} offsetDesktop={3}>
                <div className="img-container">
                  <img draggable="false" alt="Automation symbol" src={Automate} />
                  <h1>Automatisation</h1>
                </div>
                <div className="description-container">
                  <div className="description">
                    Marre d'effectuer les mêmes tâches ? Automatisons les, vous <span className="strong">obtiendrez une promotion</span> !
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

export default Presta
