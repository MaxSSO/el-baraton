import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemsOnCart from '../../smart/items-on-cart'
import ItemsToDeliver from '../../smart/items-to-deliver'
import './styles.css'

export default class ShoppingCart extends Component {
	render () {
		const aux = this.props.visible ? '80%' : '0'
		return (
			<div className="sidenav" style={{height: aux}}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact render={props => <ItemsOnCart {...props} />} />
						<Route path="/deliver" render={props => <ItemsToDeliver {...props} />} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}