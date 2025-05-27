import React from 'react'
import './Item.css'
import itemDemo from '../../assets/item.jpg'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Item = ({image, name, rating, price, sale}) => {
	const fullPrice = sale ? Math.round(price / (1 - sale / 100)) : price;
	const discount = sale ? `-${Math.round(sale)}%` : null;

  	return (
		<div className='item more'>
			<div className='item-container'>
				<img src={image || itemDemo} alt={name}/>
			</div>
			<div className='item-info'>
				<h2>{name}</h2>
				<div className='item-rating'>
					<div className='item-stars'>
						{Array.from({ length: 5 }, (_, index) => {
							if (index < Math.floor(rating)) {
								return <FaStar key={index} className='item-star' />
							} else if (index < rating) {
								return <FaStarHalfAlt key={index} className='item-star' />
							} else {
								return <FaRegStar key={index} className='item-star' />
							}
						})}
					</div>
					<p>{rating}/<span>5</span></p>
				</div>
				<div className='item-price-container'>
					<p className='item-price'>${price}</p>
					{sale && (
						<>
							<p className='item-sale'>${fullPrice}</p>
							<p className='item-discount'>{discount}</p>
						</>
					)}
				</div>
			</div>
		</div>
  	)
}

export default Item
