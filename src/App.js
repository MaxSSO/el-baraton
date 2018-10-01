import React, { Component } from 'react'
import { Button } from 'reactstrap'

import ShoppingCart from './components/containers/shopping-cart'
import './App.css';

class App extends Component {
  state = {
    shoppingCartVisible: false
  }
  showShoppingCart = () => {
    this.setState({shoppingCartVisible: true})
  }

  hideShoppingCart = () => {
    this.setState({shoppingCartVisible: false})
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: 'gray', width: '100%', height: '100%'}}>
        App
        <br />
        <Button onClick={this.showShoppingCart}>mostrar carrito!</Button>
        <Button onClick={this.hideShoppingCart}>ocultar carrito!</Button>
        <ShoppingCart visible={this.state.shoppingCartVisible} />
      </div>
    )
  }
}

export default App;
