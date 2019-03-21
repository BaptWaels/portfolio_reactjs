import { connect } from 'react-redux'
import { hideProjectDialog } from '../../components/ProjectDialog/modules/projectDialog'

import Portfolio from './components/Portfolio'

const mapDispatchToProps = {
  hideProjectDialog
}

const mapStateToProps = state => ({
  projectDialog: state.projectDialog
})

// Sync route definition
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)
