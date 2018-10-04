import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormFilter extends Component {
	state = {
		availability: 'all',
		price: 'all',
		units: 'all'
	}

	onChangeAvailability = (event) => {
		const newState = {...this.state}
		newState.availability = event.target.value
		this.setState(newState)
		this.props.onChange(newState)
	}

	onChangePrice = (event) => {
		const newState = {...this.state}
		newState.price = event.target.value
		this.setState(newState)
		this.props.onChange(newState)
	}

	onChangeUnits = (event) => {
		const newState = {...this.state}
		newState.units = event.target.value
		this.setState(newState)
		this.props.onChange(newState)
	}

	render () {
		return (
			<form>
				<div className="form-group">
					<label>
						<strong>Filtrar</strong>
					</label>
				</div>
				<div className="form-group">
					<label>
						Estado del producto
					</label>
					<select 
						className="form-control"
						value={this.state.availability}
						onChange={this.onChangeAvailability}>
						<option value="all">cualquier estado</option>
						<option value="available">disponible</option>
						<option value="notavailable">no disponible</option>
					</select>
				</div>
				<div className="form-group">
					<label>
						Precio del producto
					</label>
					<select 
						className="form-control"
						value={this.state.price}
						onChange={this.onChangePrice}>
						<option value="all">cualquier precio</option>
						<option value="0-5">menor a $5,000</option>
						<option value="5-10">$5,000 - $10,000</option>
						<option value="10-15">$10,000 - $15,000</option>
						<option value="15-20">$15,000 - $20,000</option>
						<option value="20-0">mayor a $20,000</option>
					</select>
				</div>
				<div className="form-group">
					<label>
						Unidades (Unds.) en stock
					</label>
					<select 
						className="form-control"
						value={this.state.units}
						onChange={this.onChangeUnits}>
						<option value="all">cualquier cantidad</option>
						<option value="250">más de 250 Unds.</option>
						<option value="500">más de 500 Unds.</option>
						<option value="750">más de 750 Unds.</option>
						<option value="1000">más de 1000 Unds.</option>
					</select>
				</div>
			</form>
		)
	}
}

FormFilter.propTypes = {
	onChange: PropTypes.func
}

FormFilter.defaultProps = {
	onChange: () => {}
}

export default FormFilter
