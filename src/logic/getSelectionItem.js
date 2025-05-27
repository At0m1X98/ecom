import items from '../data/items.js'
import adminData from '../data/admin.js'

const mergeItems = items.map(item => {
	const adminInfo = adminData.find(a => a.id === item.id)
	return {
		...item,
		...adminInfo,
		createdAt: new Date(adminInfo?.createdAt.createdAt || null),
	}
})

export const getSelectionItem = (selection) => {
	if(selection === 'top') {
		return {
			title: 'TOP SELLING',
			link: '/top-selling',
			items: [...mergeItems]
				.sort((a, b) => b.sold - a.sold)
				.slice(0, 4),
		}
	}

	if(selection === 'new') {
		return {
			title: 'NEW ARRIVAL',
			link: '/new-arrival',
			items: [...mergeItems]
				.sort((a, b) => b.createdAt - a.createdAt)
				.slice(0, 4),
		}
	}

	return {title: '', link: '', items: []}
}

//get a single product
export const getProductById = (id) => {
	return mergeItems.find(item => item.id === Number(id)) || null;
}

export const filterItems = ({ brands = [], categories = [], subcategories = [], ratings = 0, maxPrice = 10000 }) => {
	return mergeItems.filter(item => {
		const matchesBrand = brands.length ? brands.includes(item.brand) : true;
		const matchesCategory = categories.length ? categories.includes(item.category) : true;
		const matchesSubcategory = subcategories.length ? subcategories.includes(item.subcategory) : true;
		const matchesPrice = item.price <= maxPrice;
		const matchesRating = ratings.length
			? ratings.some(r => item.rating >= r)
			: true;
		return matchesBrand && matchesCategory && matchesSubcategory && matchesPrice && matchesRating;
	})
}