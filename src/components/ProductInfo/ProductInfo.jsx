import React from 'react'
import './ProductInfo.css'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { getProductById } from '../../logic/getSelectionItem';

const ProductInfo = ({ productId }) => {
	const product = getProductById(productId)

	if(!product) {
		return <div>Product not found</div>
	}

	const discountedPrice = product.sale
		? (product.price * (1 - product.sale / 100)).toFixed(2)
		: product.price.toFixed(2)

	console.log("Loaded product with ID:", productId);

  	return (
		<div className='productInfo'>
		  	<div className='product-container'>
				<div className='product-header'>
					<div className='product-images'>
						<div className='product-smallImage'>
							<img src={product.img} alt='product' />
							<img src={product.img} alt='product' />
							<img src={product.img} alt='product' />
						</div>
						<div className='product-image'>
							<img src={product.img} alt='product' />
						</div>
					</div>
					<div className='product-info'>
						<h2>{product.name}</h2>			
						<div className='product-rating'>
							<div className='product-stars'>
								{Array.from({ length: 5 }, (_, index) => {
									if (index < Math.floor(product.rating)) {
										return <FaStar key={index} className='item-star' />
									} else if (index < product.rating) {
										return <FaStarHalfAlt key={index} className='item-star' />
									} else {
										return <FaRegStar key={index} className='item-star' />
									}
								})}
							</div>
							<p>{product.rating}/<span>5</span></p>
						</div>
						<div className='product-price-container'>
							<p className='product-price'>{discountedPrice}</p>
							{product.sale && <p className='product-sale'>${product.price}</p>}
							{product.sale && <p className='product-discount'>-{product.sale}%</p>}
						</div>
						<p className='desc'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
						</p>
						<div className='product-order'>
							<div className='product-quantity'>
								<button>-</button>
								<input type='number' value={1} />
								<button>+</button>
							</div>
							<button className='product-add'>Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  	)
}

export default ProductInfo
