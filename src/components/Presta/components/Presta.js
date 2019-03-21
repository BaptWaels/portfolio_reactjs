import React from 'react'

import { Grid, Cell } from 'react-mdl'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import FrontEnd from '../assets/front_end.png'
import BackEnd from '../assets/back_end.png'
import Automate from '../assets/automate.png'

import './Presta.scss'

class Presta extends React.Component {
  render () {
    const { intl, scrollPosition } = this.props

    return (
      <Grid id='presta' className='presta' noSpacing>
        <Cell col={4} tablet={3} phone={4} className='left-presta'>
          <div className='section-title'>
            <div className='sliding'>Presta</div>
          </div>
        </Cell>

        <Cell col={8} tablet={5} phone={4} className='right-presta'>
          <div className='container'>
            <Grid>
              <Cell col={6} tablet={4} phone={4}>
                <div className='img-container'>
                  <LazyLoadImage
                    effect='blur'
                    scrollPosition={scrollPosition}
                    draggable='false'
                    alt='Front End symbol'
                    src={FrontEnd}
                  />
                  <h1>{intl.messages['presta.frontEnd.title']}</h1>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    {intl.messages['presta.frontEnd.content.first']}
                    <span className='strong'>{intl.messages['presta.frontEnd.content.second']}</span>
                    {intl.messages['presta.frontEnd.content.third']}
                    <span className='strong'>{intl.messages['presta.frontEnd.content.fourth']}</span>.
                  </div>
                </div>
              </Cell>

              <Cell col={6} tablet={4} phone={4}>
                <div className='img-container'>
                  <LazyLoadImage
                    effect='blur'
                    scrollPosition={scrollPosition}
                    draggable='false'
                    alt='Back End symbol'
                    src={BackEnd}
                  />
                  <h1>{intl.messages['presta.backEnd.title']}</h1>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    {intl.messages['presta.backEnd.content.first']}
                    <span className='strong'>{intl.messages['presta.backEnd.content.second']}</span>
                    {intl.messages['presta.backEnd.content.third']}
                    <span className='strong'>{intl.messages['presta.backEnd.content.fourth']}</span>!
                  </div>
                </div>
              </Cell>

              <Cell col={6} tablet={4} phone={4} offsetDesktop={3}>
                <div className='img-container'>
                  <LazyLoadImage
                    effect='blur'
                    scrollPosition={scrollPosition}
                    draggable='false'
                    alt='Automation symbol'
                    src={Automate}
                  />
                  <h1>{intl.messages['presta.automation.title']}</h1>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    {intl.messages['presta.automation.content.first']}
                    <span className='strong'>{intl.messages['presta.automation.content.second']}</span>!
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
