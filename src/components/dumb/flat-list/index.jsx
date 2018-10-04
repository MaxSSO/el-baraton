import React from 'react'
import PropTypes from 'prop-types'

const FlatList = ({ data, renderItem }) => (
	<div>
		{ 
			data.map((item, index) => (
				renderItem(item, index)
			))
		}
	</div>
)

FlatList.propTypes = {
	data: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired
}

export default FlatList
