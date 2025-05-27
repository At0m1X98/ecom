import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  	return (
		<div className='sidebar'>
			<div className='sidebar-container'>
				<div className='brand'>
					<ul>
						<li>Brand1</li>
						<li>Brand2</li>
						<li>Brand3</li>
						<li>Brand4</li>
					</ul>
				</div>
				<div className="sidebar-category">
					<ul>
						<li>Category1</li>
						<li>Category2</li>
						<li>Category3</li>
						<li>Category4</li>
					</ul>
				</div>
				<div className='sidebar-subcategory'>
					<ul>
						<li>Subcategory1</li>
						<li>Subcategory2</li>
						<li>Subcategory3</li>
						<li>Subcategory4</li>
					</ul>
				</div>
				<div className='sidebar-price'>
					<input type='range' min='1' max='10000' />
				</div>
				<div className='sidebar-rating'>
					<ul>
						<li>Rating 1</li>
						<li>Rating 2</li>
						<li>Rating 3</li>
						<li>Rating 4</li>
					</ul>
				</div>
			</div>
		</div>
  	)
}

export default Sidebar
