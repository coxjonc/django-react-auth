import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

const AppContainer = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export default AppContainer