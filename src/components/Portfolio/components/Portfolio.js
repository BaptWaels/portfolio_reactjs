import React from 'react'

import { Grid } from 'react-mdl'

import Project from '../../Project'
import ProjectDialog from '../../ProjectDialog'
import projects from '../assets/projects'

import './Portfolio.scss'

class Portfolio extends React.Component {
  render () {
    const { intl, projectDialog, hideProjectDialog } = this.props

    return (
      <div id='portfolio' className='portfolio'>
        {projectDialog.toggle ? <ProjectDialog intl={intl} data={projectDialog} hide={hideProjectDialog} /> : <div />}
        <Grid noSpacing>
          {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </Grid>
      </div>
    )
  }
}

export default Portfolio
