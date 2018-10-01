import React from 'react'
import PropTypes from 'prop-types'
import { Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const Header = ({ title }) => (
	<Navbar fixed="top" color="light" light >
    <NavbarBrand href="/">
			{title}
		</NavbarBrand> 
    <Nav className="ml-auto" navbar>
      <NavItem>
				<Button>carrito</Button>
      </NavItem>
    </Nav>    
  </Navbar>
)

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {
  title: ''
}

export default Header
