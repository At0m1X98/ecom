import React from 'react'
import "./Hero.css"
import hero from "../../assets/images/hero.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  	return (
		<div className='hero'>
			<div className='hero-container'>
				<div className='hero-text'>
					<h1>
						FIND YOUR DREAM 
						PRODUCT TODAY
					</h1>
					<p>
						Discover the latest and greatest products that suit your needs. 
						Whether you're looking for electronics, fashion, or home goods, 
						we've got you covered. Shop now and experience the best deals!
					</p>
					<Link to="/shop" className='btn'>Shop Now</Link>
					<div className='calc-container'>
						<div className='calc'>
							<h2>200+</h2>
							<p>International Brands</p>
						</div>
						<div className='calc'>
							<h2>2,000+</h2>
							<p>High-Quality Products</p>
						</div>
						<div className='calc'>
							<h2>30,000+</h2>
							<p>Happy Customers</p>
						</div>
					</div>
				</div>
				<div className='hero-image'>
					<img src={hero} alt="hero" />
				</div>
			</div>
		</div>
  	)
}

export default Hero
