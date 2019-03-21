import React from 'react'

import { Cell } from 'react-mdl'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import './Project.scss'

class Project extends React.Component {
  handleClick () {
    const { project, toggleProjectDialog } = this.props
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no' // ie only
    document.body.removeEventListener('touchmove', e => e.preventDefault(), false)

    toggleProjectDialog(project)
  }

  getSkillString (skill, index) {
    return this.props.project.skills.length - 1 !== index ? skill.name + ', ' : skill.name
  }

  render () {
    const { project, scrollPosition } = this.props

    return (
      <Cell className='project' col={4} phone={4} tablet={4} onClick={this.handleClick.bind(this)}>
        <div className='front'>
          <LazyLoadImage
            effect='blur'
            threshold='400'
            scrollPosition={scrollPosition}
            src={project.main_image ? require(`./assets/${project.main_image}`) : project.imgUrl}
            alt='Project Image'
            className='project-img'
          />
        </div>

        <div className='back'>
          <div className='project-title'>
            <h3>{project.name}</h3>
            <span>{project.skills.map(this.getSkillString.bind(this))}</span>
          </div>
        </div>
      </Cell>
    )
  }
}

export default Project
