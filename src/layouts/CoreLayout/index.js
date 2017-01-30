import { connect } from 'react-redux';
import { switchLanguage } from '../../store/intl';

import CoreLayout from './CoreLayout'

const mapDispatchToProps = {
  switchLanguage : (lang) => switchLanguage(lang)
}

const mapStateToProps = (state) => ({
  intl : state.intl
})

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
