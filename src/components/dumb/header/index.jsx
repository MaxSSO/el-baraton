import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ title, itemsCount, isOpen, onClickBtnShoppingCart }) => (
	<Navbar fixed="top" color="light" light>
    <NavbarBrand href="/">
			{title}
		</NavbarBrand> 
    <Nav className="ml-auto" navbar>
      <NavItem>
				<Button onClick={onClickBtnShoppingCart} outline>
					<FontAwesomeIcon icon={isOpen ? 'times' : 'shopping-cart'} />
					{ !isOpen && <Badge className="ml-1" color="danger">{itemsCount}</Badge> }
				</Button>
      </NavItem>
    </Nav>    
  </Navbar>
)

Header.propTypes = {
	title: PropTypes.string,
	itemsCount: PropTypes.number,
	isOpen: PropTypes.bool,
	onClickBtnShoppingCart: PropTypes.func
}

Header.defaultProps = {
	title: '',
	itemsCount: 0,
	isOpen: false,
	onClickBtnShoppingCart: () => {}
}

export default Header
