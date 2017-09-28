import * as types from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return action.user
    case types.LOGOUT_USER:
      return initialState
    default:
      return state
  }
}
