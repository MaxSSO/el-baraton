import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FlatList from '../../dumb/flat-list'
import ItemCart from '../../smart/item-cart'
import FormCart from '../../smart/form-cart'
import css from './styles_list.css'
import './styles.css'

export default class ShoppingCart extends Component {
	state = {
		modal: false
	}

	toggle = () => {
    this.setState({modal: !this.state.modal});
  }

	onChangeForm = (form) => {
	
	}

	onHandleRemove = (product) => {
		this.props.onRemoveProduct(product)
	}

	clear = () => {
		this.toggle()
		this.props.onClearProducts()
	}

	render () {
		const aux = this.props.visible ? '80%' : '0'
		return (
			<div className="sidenav" style={{height: aux, paddingTop: 15}}>
				<div className="container scroll" style={{backgroundColor: 'white'}}>
					<div className={css.header}>
						<h3>Tu carrito</h3>
					</div>
					<div>
						<FlatList 
							data={this.props.productsList} 
							renderItem={(element, index) => (
								<ItemCart
									product={element}
									onRemoveProduct={this.onHandleRemove}
									key={index} />
							)} 
						/>
					</div>
					<div className="pt-4">
						<FormCart onChange={this.onChangeForm} />
					</div>
					<div>
						<button type="button" className="btn btn-primary mb-4" onClick={this.toggle}>
							REALIZAR PEDIDO!
						</button>
					</div>
				</div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
						Confirmación pedido
					</ModalHeader>
          <ModalBody>
            ¿Deseas confirmar tú pedido?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.clear}>Confirmar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
			</div>
		)
	}
}