import * as types from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return state.concat([{
        messageId: action.messageId,
        message: action.message,
      }])
    case types.HIDE_MESSAGE:
      return state.filter(message => (message.messageId !== action.messageId))
    default:
      return state
  }
}
