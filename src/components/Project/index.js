import { connect } from 'react-redux';
import { toggleProjectDialog } from '../ProjectDialog/modules/projectDialog';

import Project from './components/Project'


const mapDispatchToProps = {
  toggleProjectDialog : (project) => toggleProjectDialog(project)
}

// Sync route definition
export default connect(null, mapDispatchToProps)(Project);
