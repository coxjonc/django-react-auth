import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hideMessage } from '../../actions/messages'
import Message from './Message'

class MessageBox extends Component {
	constructor(props) {
		super(props)
		this.handleDismiss = this.handleDismiss.bind(this)
	}

	handleDismiss(messageId) {
		this.props.dispatch(hideMessage(messageId))
	}

	render() {
		const { messages } = this.props

		return (
			<div>
				{messages.map(message => (
					<Message key={message.messageId} message={message} onDismiss={this.handleDismiss} />
				))}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages
	}
}

MessageBox.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object).isRequired,
	dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(MessageBox)
