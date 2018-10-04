import React, { Component } from 'react'
import ItemCart from '../item-cart'
import css from './styles.css'


export default class ItemsOnCart extends Component {
	state={

	}
	
	goToDeliver = () => {
		this.props.history.push('/deliver');
	}

  render () {
		console.log('itemcart render')
		return (
			<div className="container" style={{backgroundColor: 'white'}}>
				<div className={css.header}>
					<h3>Tu carrito</h3>
					<h3><small>SUBTOTAL</small> $54,000</h3>
				</div>
				<div>
					<ItemCart />
				</div>
			</div>
		)
	}
}