import React from 'react'

import { Dialog, Icon, Chip, ChipContact } from 'react-mdl';

import Gallery from 'react-photo-gallery';

import './ProjectDialog.scss'

class ProjectDialog extends React.Component {

	handleCloseDialog() {
		this.props.hideProjectDialog();
	}

	getSkillChip(skill, index) {
		let imgUrl = require(`./assets/skills/${skill.logo}`);

		return (
			<Chip className="skill-chip" key={index}>
				<ChipContact
						style={{ background: `url(${imgUrl}) 0 0 / cover` }}
				/>
				{skill.name}
			</Chip>
		)
	}

	render() {
		const { projectDialog } = this.props;

		if(!projectDialog.toggle){
			return <div></div>;
		}

		let project = projectDialog.project;
		let images = [
			{
				src: require('./assets/illustration/devops.png'),
				width: 150,
				height: 100,
				aspectRatio: 1.5
		 },
			{
				src: require('./assets/illustration/jwaves.png'),
				width: 150,
				height: 100,
				aspectRatio: 1.5
		 },
			{
				src: require('./assets/illustration/lilly.png'),
				width: 150,
				height: 100,
				aspectRatio: 1.5
		 },
			{
				src: require('./assets/illustration/parkki.png'),
				width: 150,
				height: 100,
				aspectRatio: 1.5
		 }
		]

    return (
			<Dialog className="projectDialog" open={projectDialog.toggle} onCancel={this.handleCloseDialog.bind(this)}>
				<div className="close">
					<Icon name="clear" onClick={this.handleCloseDialog.bind(this)} />
				</div>

				<div className="content">
					<div className="title">
						<h1>{ project.name }</h1>
					</div>

					<div className="skills">
						{ project.skills.map(this.getSkillChip.bind(this)) }
					</div>

					<div className="images">
						<Gallery photos={images} disableLightbox />
					</div>
				</div>
      </Dialog>
    );
	}
}

ProjectDialog.propTypes = {
  toggle     : React.PropTypes.bool,
  project : React.PropTypes.object
}

export default ProjectDialog
