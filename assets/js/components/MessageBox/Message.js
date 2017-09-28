import React, { PropTypes } from 'react'

const Message = ({ message, onDismiss }) => (
  <div className="alert alert-info" role="alert">
    <button type="button" className="close" aria-label="Close" onClick={() => onDismiss(message.messageId)}>
      <span aria-hidden="true">&times;</span>
    </button>
    {message.message}
  </div>
)

Message.propTypes = {
  message: PropTypes.object.isRequired,
  onDismiss: PropTypes.func.isRequired,
}

export default Message
