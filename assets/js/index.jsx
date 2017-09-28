import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-hot-loader/patch';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store'
import AppContainer from './containers/AppContainer';
import routes from './routes'
import * as types from './actions/types'

const initialState = {};
const store = createStore(initialState);
const token = localStorage.getItem('token')
if(token) {
	const username = localStorage.getItem(token)
	store.dispatch({
		type: types.LOGIN_USER,
		user: {
			username,
		},
	})
}
ReactDOM.render(
	<AppContainer store={store}>
		{routes}
	</AppContainer>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept('./reducers', () => {
		ReactDOM.render(
			<AppContainer store={store}>
				{routes}
			</AppContainer>,
			document.getElementById('app')
		)
	})
}


