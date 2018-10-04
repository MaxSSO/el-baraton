import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormOrder extends Component {
	state = {
		orderType: 'none',
		availability: 'available',
		price: 'mayor',
		units: 'mayor',
	}

	onChangeAvailability = (event) => {
		this.setState({availability: event.target.value})
	}

	onChangePrice = (event) => {
		this.setState({price: event.target.value})
	}

	onChangeUnits = (event) => {
		this.setState({units: event.target.value})
	}

	onChangeOrderType = (event) => {
		this.setState({orderType: event.target.value})
	}

	getActiveSelectForm = () => {
		switch (this.state.orderType) {
			case 'availability':
				return (
					<div className="form-group">
						<select 
							className="form-control"
							value={this.state.availability}
							onChange={this.onChangeAvailability}>
							<option value="available">primero Unds. disponibles</option>
							<option value="noavailable">primero Unds. no disponibles</option>
						</select>
					</div>
				)
			case 'price':
				return (
					<div className="form-group">
						<select 
							className="form-control"
							value={this.state.price}
							onChange={this.onChangePrice}>
							<option value="mayor">mayor a menor precio</option>
							<option value="minor">menor a mayor precio</option>/option>
						</select>
					</div>
				)
			case 'units':
				return (
					<div className="form-group">
						<select 
							className="form-control"
							value={this.state.units}
							onChange={this.onChangeUnits}>
							<option value="mayor">mayor a menor Unds.</option>
							<option value="minor">menor a mayor Unds.</option>/option>
						</select>
					</div>
			 	)
			default:
				return null
		}
	}

	componentDidUpdate = () => {
		this.props.onChange(this.state)
	}

	render () {
		const SelectForm = this.getActiveSelectForm()
		return (
			<form>
				<div className="form-group">
					<label>
						<strong>Ordenar</strong>
					</label>
				</div>
				<div className="form-group">
					<label>
						Ordenar productos por:
					</label>
					<div className="form-check">
						<input 
							className="form-check-input" 
							type="radio"
							value="availability"
							checked={this.state.orderType === 'availability'}
							onChange={this.onChangeOrderType} />
						<label className="form-check-label">
							estado
						</label>
					</div>
					<div className="form-check">
						<input 
							className="form-check-input" 
							type="radio" 
							value="price"
							checked={this.state.orderType === 'price'}
							onChange={this.onChangeOrderType} />
						<label className="form-check-label">
							precio
						</label>
					</div>
					<div className="form-check disabled">
						<input 
							className="form-check-input" 
							type="radio" 
							value="units"
							checked={this.state.orderType === 'units'}
							onChange={this.onChangeOrderType} />
						<label className="form-check-label" >
							Unds. en stock
						</label>
					</div>
					<div className="form-check disabled">
						<input 
							className="form-check-input" 
							type="radio"
							value="none"
							checked={this.state.orderType === 'none'}
							onChange={this.onChangeOrderType} />
						<label className="form-check-label">
							no ordenar
						</label>
					</div>
				</div>
				{ SelectForm }
			</form>
		)
	}
}

FormOrder.propTypes = {
	onChange: PropTypes.func
}

FormOrder.defaultProps = {
	onChange: () => {}
}

export default FormOrder
