import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from './components/dumb/header'
import WelcomeSign from './components/dumb/welcome-sign'
import ShoppingCart from './components/containers/shopping-cart'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

import './App.css'

library.add(faShoppingCart, faTimes)

class App extends Component {
  state = {
    isShoppingCartVisible: false
  }

  toggleIsShoppingCartVisible= () => {
    this.setState({isShoppingCartVisible: !this.state.isShoppingCartVisible})
  }

  render() {
    return (
      <div style={{backgroundColor: 'gray', width: '100%', height: '100%'}}>
        <Header title="El Baratón" 
          itemsCount={2} 
          isOpen={this.state.isShoppingCartVisible} 
          onClickBtnShoppingCart={this.toggleIsShoppingCartVisible} />
        <Container style={{backgroundColor: 'lightgreen', width: '100%', height: '100%', paddingTop: 56}}>
          <WelcomeSign msm="Sigue y disfruta de nuestros productos" />
          <ShoppingCart visible={this.state.isShoppingCartVisible} />
        </Container>
      </div>
    )
  }
}

export default App
