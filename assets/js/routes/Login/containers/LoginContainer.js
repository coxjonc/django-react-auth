import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import {login} from '../../../auth'
import { showMessage } from '../../../actions/messages'
import * as types from '../../../actions/types'

class LoginContainer extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(username, password) {
		login(username, password, (token) => {
			if (token) {
				this.props.dispatch({
					type: types.LOGIN_USER,
					user: {
						username,
					},
				})
				localStorage.setItem(token, username)
				this.props.router.push('/app/')
			} else {
				this.props.dispatch(showMessage('Invalid username and password.'))
			}
		})
	}

	render() {
		return (
			<LoginView
				handleSubmit={this.handleSubmit} />
		)
	}
}

LoginContainer.propTypes = {
	dispatch: PropTypes.func.isRequired,
}

export default connect()(LoginContainer)