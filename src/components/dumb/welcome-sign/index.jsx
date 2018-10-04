import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.css'

const WelcomeSign = ({ msm }) => (
	<div className={css.sign}>
		<div className={css.opacitylayer}>
			<h1 className={css.msmtxt}>{msm}</h1>
		</div>
	</div>
)

WelcomeSign.propTypes = {
	msm: PropTypes.string,
}

WelcomeSign.defaultProps = {
	msm: '¡Bienvenido!',
}

export default WelcomeSign
