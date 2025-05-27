import React from 'react'
import './Sidebar.css'

const Sidebar = ({filters, setFilter, items}) => {
	const brands = [...new Set(items.map(item => item.brand))];
	const categories = [...new Set(items.map(item => item.category))];
	const subcategories = [...new Set(items.map(item => item.subcategory))];
	const ratings = [...new Set(items.map(item => item.rating))];

	const handleCheckboxChange = (key, value) => {
		setFilter(prev => {
			const values = new Set(prev[key]);
			values.has(value) ? values.delete(value) :values.add(value);
			return {
				...prev,
				[key]: Array.from(values),
			};
		});
	};

	const handlePriceChange = (e) => {
		setFilter(prev => ({ ...prev, maxPrice: Number(e.target.value) }));
	}

  	return (
		<div className='sidebar'>
			<div className='sidebar-container'>
				<div className='brand'>
					<h4>Brands</h4>
					<ul>
						{brands.map((brand) => (
							<li key={brand}>
								<label>
									<input
										type='checkbox'
										onChange={() => handleCheckboxChange('brands', brand)}
										checked={filters.brands.includes(brand)}
									/>
									{brand}
								</label>
							</li>
						))}
					</ul>
				</div>

				<div className='category'>
					<h4>Categories</h4>
					<ul>
						{categories.map((category) => (
							<li key={category}>
								<label>
									<input
										type='checkbox'
										onChange={() => handleCheckboxChange('categories', category)}
										checked={filters.categories.includes(category)}
									/>
									{category}
								</label>
							</li>
						))}
					</ul>
				</div>
				<div className='subcategory'>
					<h4>Subcategories</h4>
					<ul>
						{subcategories.map((subcategory) => (
							<li key={subcategory}>
								<label>
									<input
										type='checkbox'
										onChange={() => handleCheckboxChange('subcategories', subcategory)}
										checked={filters.subcategories.includes(subcategory)}
									/>
									{subcategory}
								</label>
							</li>
						))}
					</ul>
				</div>

				<div className='price'>
					<h4>Price: ${filters.maxPrice}</h4>
					<input
						type='range'
						min="0"
						max="10000"
						step="10"
						value={filters.maxPrice}
						onChange={handlePriceChange}
					/>
				</div>

				<div className='rating'>
					<h4>Ratings</h4>
					<ul>
						{ratings.map((rating) => (
							<li key={rating}>
								<label>
									<input
										type='checkbox'
										onChange={() => handleCheckboxChange('ratings', rating)}
										checked={filters.ratings.includes(rating)}
									/>
									{rating}+ Stars
								</label>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
  	)
}

export default Sidebar
