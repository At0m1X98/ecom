import React from 'react'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import { useParams } from 'react-router-dom'

const Product = () => {
	const { id } = useParams();

  	return (
		<div className='product'>
			<ProductInfo productId={id}/>
		</div>
  	)
}

export default Product
