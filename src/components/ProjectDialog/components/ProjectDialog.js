import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Cell, Dialog, Icon, Chip, ChipContact } from 'react-mdl';

import Gallery from 'react-photo-gallery';
import ReactPlayer from 'react-player';

import './ProjectDialog.scss';

class ProjectDialog extends React.Component {

	componentDidMount(){
		const dialog = ReactDOM.findDOMNode(this);

    if (dialog && !dialog.showModal) {   // avoid chrome warnings and update only on unsupported browsers
      var dialogPolyfill = require('dialog-polyfill');
			dialogPolyfill.registerDialog(dialog);
    }
	}

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
		let images = null;

		let project = projectDialog.project ? projectDialog.project : {};

		if(project.images && project.images.length) {
			images = [
				{
					src: require('./assets/illustration/' + project.images[0]),
					width: 60,
					height: 20,
					aspectRatio: 3
			 },
				{
					src: require('./assets/illustration/' + project.images[1]),
					width: 30,
					height: 20,
					aspectRatio: 1.5
			 },
				{
					src: require('./assets/illustration/' + project.images[2]),
					width: 30,
					height: 20,
					aspectRatio: 1.5
			 }
		 ];
		}

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

					{
						images ?
						<div className="images">
							<Gallery className="gallery" photos={images} disableLightbox />
						</div>
						: null
					}


					{ project.video_url ?
						<div className="video">
							<ReactPlayer width="100%" height="400px" url={project.video_url} controls />
						</div>
						: null
					}

					<Grid className="description">
						<Cell col={8} className="description-section">
							<h2>{project.description.section.title}</h2>
							<div className="desc">
								{project.description.section.content}
							</div>
						</Cell>

						<Cell col={4} className="client">
							<h2>{project.description.client.title}</h2>
							<div className="desc">
								{project.description.client.content}
							</div>
						</Cell>
					</Grid>
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
