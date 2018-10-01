import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ItemsOnCart extends Component {
	goToDeliver = () => {
		this.props.history.push('/deliver');
	}

  render () {
		return (
			<div className="container">
				Items on cart!
				<Button onClick={this.goToDeliver}>resumen</Button>
			</div>
		)
	}
}