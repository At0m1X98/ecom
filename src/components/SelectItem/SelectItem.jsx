import React from 'react'
import './SelectItem.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import { getSelectionItem } from '../../logic/getSelectionItem'
import Item from '../Item/Item'

const SelectItem = ({ selection }) => {
	const { title, link, items } = getSelectionItem(selection);

  	return (
		<div className='selectItem'>
			<div className='selectItem-container'>
				<div className='selectItem-nadpis'>
					<h1>{title}</h1>
				</div>
				<div className='selectItem-items'>
					{items.map((item) => (
						<Link to={`/product/${item.id}`} className='link'>
							<Item
								key={item.id}
								name={item.name}
								rating={item.rating}
								price={item.price}
								sale={item.sale}
							/>
						</Link>
					))}
				</div>
				<Link to={link} className='selectItem-btn'>View All</Link>
			</div>
		</div>
  	)
}

export default SelectItem
