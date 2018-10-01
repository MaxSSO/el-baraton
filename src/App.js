import React, { Component } from 'react'
import Header from './components/dumb/header'
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
      <div style={{backgroundColor: 'gray', width: '100%', height: '100%'}}>
        <Header title="El Baratón" />
        <div className="container" style={{backgroundColor: 'lightgreen', width: '100%', height: '100%', paddingTop: 56}}>
          <Button onClick={this.showShoppingCart}>mostrar carrito!</Button>
          <Button onClick={this.hideShoppingCart}>ocultar carrito!</Button>
          <ShoppingCart visible={this.state.shoppingCartVisible} />
        </div>
      </div>
    )
  }
}

export default App;
