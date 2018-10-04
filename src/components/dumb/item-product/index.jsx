import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'

const ItemProduct = ({ product, imgsrc, onClickAdd }) => (
	<div className={css.container} style={{backgroundImage: `url(${imgsrc})`}}>
		<div className={css.label}>
			<div className={css.light} style={{backgroundColor: product.available ? 'green':'red'}}>
			</div>
			<div className={css.price}>
				<strong>{product.price}</strong>
			</div>
		</div>
		<div className={css.info}>
			<p>
				<strong>{product.name}</strong><br />
				<small>{product.quantity} Unds. en stock</small><br />
				<small>{product.available ? 'DISPONIBLE': 'NO DISPONIBLE'}</small><br />
				<button 
					className="btn btn-success btn-sm"
					type="button"  
					onClick={() => {onClickAdd(product)}}
					disabled={!product.available}>
					agregar
				</button>
			</p>
		</div>
	</div>
)

ItemProduct.propTypes = {
	product: PropTypes.object.isRequired,
	onClickAdd: PropTypes.func,
	imgsrc: PropTypes.string,
}

ItemProduct.defaultProps = {
	onClickAdd: () => {},
	imgsrc: 'https://static-s.aa-cdn.net/img/ios/986830424/e61db49e9bf61a26d1c87ec4fd5948a6?v=1',
}

export default ItemProduct
