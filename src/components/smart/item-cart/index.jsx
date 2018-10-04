import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import css from './styles.css'

class ItemCart extends Component {
	render () {
		return (
			<div className={css.container}>
				<div className={css.box_a}>
					<h5>{this.props.product.name}</h5>
				</div>
				<div className={css.box_b}>
					<span>Cant. {this.props.product.units || 1}</span>
					<div>
						{/* <button type="button" className="btn btn-primary btn-sm mr-1">
							<FontAwesomeIcon icon="plus" />
						</button>
						<button type="button" className="btn btn-primary btn-sm mr-1">
							<FontAwesomeIcon icon="minus" />
						</button> */}
						<button type="button" className="btn btn-danger btn-sm" onClick={() => {this.props.onRemoveProduct(this.props.product)}}>
							<FontAwesomeIcon icon="trash" />
						</button>
					</div>
				</div>
				<div className={css.box_c}>
					<span><strong>{this.props.product.price}</strong></span>
				</div>
			</div>
		)
	}
}

export default ItemCart