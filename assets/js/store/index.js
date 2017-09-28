import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers'
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

export default (initial_state = {}) => {
	// let middleware = applyMiddleware(routerMiddleware(history));
	// console.log("firstMiddleware: " + middleware)
	// if (process.env.NODE_ENV !== 'production') {
	// 	middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
	// }

	const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
	});

	const store = createStore(
		reducers,
		initial_state,
		applyMiddleware(reduxThunk, logger)
	)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
		const nextReducer = require('../reducers') // eslint-disable-line global-require
		store.replaceReducer(nextReducer)
		})
	}

	return store
}
