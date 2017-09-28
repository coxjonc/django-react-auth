import React, { Component, PropTypes } from 'react'

class FormGroup extends Component {

	constructor(props) {
		super(props)

		this.state = {
			value: props.value,
			touched: false,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.value !== nextProps.value) {
			this.setState({
				value: nextProps.value,
			})
		}
	}

	handleChange(event) {
		const value = event.target.value

		this.props.onChange(value)

		this.setState({
			value,
		})
	}

	handleBlur() {
		this.setState({
			touched: true,
		})
	}

	render() {
		const error = this.props.validate(this.state.value)
		const showError = error !== true && this.state.touched

		const { id, type } = this.props
		const { value } = this.state

		let control
		if (type === 'select') {
			control = (
				<select
					className="form-control"
					id={id}
					value={value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				>
					{
						this.props.options.map(option => (
							<option key={option.value} value={option.value}>{option.name}</option>
						))
					}
				</select>
			)
		} else {
			control = (
				<input
					type={type}
					className="form-control"
					id={id}
					placeholder={this.props.label}
					value={value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				/>
			)
		}

		return (
			<div className="form-group">
				<label htmlFor={id} className="col-sm-3 control-label">
					{this.props.label}
				</label>
				<div className={`col-sm-9 ${showError ? 'has-error' : ''}`}>
					{control}
					{
						showError &&
						<p className="text-danger no-margin-bottom">
							{error}
						</p>
					}
				</div>
			</div>
		)
	}
}

FormGroup.PropTypes = {
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
	validate: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
}

FormGroup.defaultProps = {
	type: 'text',
	value: '',
	options: [],
}

export default FormGroup;
