import React, { Component, PropTypes } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
export default class UserListView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
		this.loadUserListData = this.loadUserListData.bind(this)
	}

	componentDidMount() {
		this.loadUserListData()
	}

	loadUserListData() {
		$.ajax({
			method: 'GET',
			url: '/api/users/',
			datatype: 'json',
			headers: {
				'Authorization': 'Token ' + localStorage.token
			},
			success: function (res) {
				this.setState({ users: res })
			}.bind(this),
			fail: function (err) {
				console.log("error message: " + err.message)
			}
		})
	}
	render() {
		var rows = [];
		this.state.users.map((user, index) => {
			rows.push(
				<tr key={index}>
					<th>{index + 1}</th>
					<th>{user.username}</th>
				</tr>
			)
		})

		return (
			<div>
				<h1>Super User Table</h1>
				{this.state.users ?
					<table className="table">
						<thead>
							<tr>
								<th>User ID</th>
								<th>User Name</th>
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
					:
					<table className="table">
						<thead>
							<tr>
								<th>User ID</th>
								<th>User Name</th>
							</tr>
						</thead>
					</table>
				}
			</div>
		)
	}
}