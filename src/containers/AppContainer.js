import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

import IntlWrapper from './IntlWrapper';

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <IntlWrapper>
            <Router history={browserHistory} children={routes} />
          </IntlWrapper>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
