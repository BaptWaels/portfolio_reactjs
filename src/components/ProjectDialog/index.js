import { connect } from 'react-redux';
import { hideProjectDialog } from './modules/projectDialog';

import ProjectDialog from './components/ProjectDialog'

const mapDispatchToProps = {
  hideProjectDialog
}

const mapStateToProps = (state) => ({
  projectDialog : state.projectDialog
})

// Sync route definition
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDialog);
