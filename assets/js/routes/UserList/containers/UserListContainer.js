import React, { Component, PropTypes } from 'react'
import UserListView from '../components/UserListView'
export default class UserListContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<UserListView />
		)
	}
}