import React from 'react'
import { Component, PropTypes } from 'react'
import Header from '../Header'
import MessageBox from '../MessageBox'
export default class MainLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container">
				<Header />
				<MessageBox />
				{this.props.children}
			</div>
		)
	}
}

MainLayout.propTypos = {
	children: PropTypes.element.isRequired
}