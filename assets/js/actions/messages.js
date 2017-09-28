import * as types from './types'

let globalMessageId = 0

export const showMessage = message => dispatch => (
  new Promise((resolve) => {
    globalMessageId += 1

    const messageId = globalMessageId

    dispatch({
      type: types.SHOW_MESSAGE,
      messageId,
      message,
    })

    setTimeout(() => {
      dispatch(hideMessage(messageId)) // eslint-disable-line no-use-before-define
      resolve()
    }, 3000)
  })
)

export const hideMessage = messageId => ({
  type: types.HIDE_MESSAGE,
  messageId,
})
