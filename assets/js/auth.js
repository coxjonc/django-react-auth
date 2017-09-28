import * as types from './actions/types'
import { showMessage } from './actions/messages'

const getToken = (username, pass, cb) => {
	$.ajax({
		type: 'POST',
		url: '/api/obtain-auth-token/',
		data: {
			username: username,
			password: pass
		},
		success: function (res) {
			cb({
				authenticated: true,
				token: res.token
			})
		},
		error: (xhr, status, err) => {
			cb({
				authenticated: false
			})
		}
	})
}

export const login = (username, pass, cb) => {
	if (localStorage.token) {
		if (cb) cb(localStorage.token)
		return
	}
	getToken(username, pass, (res) => {
		if (res.authenticated) {
			localStorage.token = res.token
			if (cb) {
				cb(localStorage.token);
			}
		} else {
			if (cb) cb(null)
		}
	})
}

export const logout = () => {
	delete localStorage.token
}

export const loggedIn = () => {
	return !!localStorage.token
}

export const changePassword = (username, newpass, cb) => {
	var result
	$.ajax({
		type: 'POST',
		url: '/api/users/i/change-password/',
		data: {
			username: username,
			newpass: newpass
		},
		datatype: 'json',
		headers: {
			'Authorization': 'Token ' + localStorage.token
		},
		success: function (res) {
			console.log("Password changed successfully.")
			result = res.status
			cb(result)
		},
		error: (xhr, status, err) => {
			console.log("Change Password error")
			result = status
			cb(result)
		}
	})
}



