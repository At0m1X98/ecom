import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ items: propItems}) => {
	let filteredItems = propItems;

	try {
		const context = useOutletContext();
		if(!filteredItems) filteredItems = context.filteredItems || [];
	} catch {
		filteredItems = filteredItems || [];
	}

  	return (
		<div className='itemlist'>
			{filteredItems.map(item => (
				<Item
					key={item.id}
					image={item.image}
					name={item.name}
					rating={item.rating}
					price={item.price}
					sale={item.sale}
				/>
			))}
		</div>
  	)
}

export default ItemList
