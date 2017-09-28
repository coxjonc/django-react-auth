import * as types from './types'

export const loginUserRequest = (username, password) => ({
  type: types.LOGIN_USER_REQUEST,
  username,
  password,
})

export const loginUser = user => ({
  type: types.LOGIN_USER,
  user,
})

export const logoutUserRequest = () => ({
  type: types.LOGOUT_USER_REQUEST,
})

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
})

export const changePasswordRequest = password => ({
  type: types.CHANGE_PASSWORD_REQUEST,
  password,
})
