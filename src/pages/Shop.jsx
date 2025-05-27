import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import ItemList from '../components/ItemsList/ItemList.jsx'
import { filterItems } from '../logic/getSelectionItem'
import "../App.css"

const Shop = () => {
	const [filters, setFilter] = React.useState({
		brands: [],
		categories: [],
		subcategories: [],
		ratings: [],
		maxPrice: 10000,
	});

	const filteredItems = filterItems(filters);

  	return (
		<div className='shop'>
			<div className='present-container'>
				<Sidebar filters={filters} setFilter={setFilter} items={filteredItems} />
				<div className='outlet-container'>
					<ItemList items={filteredItems} />
				</div>
			</div>
		</div>
  	)
}

export default Shop
