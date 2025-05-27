import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<div className='navbar-logo'>
					<Link to="/" style={{textDecoration: "none"}}><h1>E-COM</h1></Link>
				</div>
				<div className='navbar-links'>
					<ul>
						<li><Link to='/shop' className='link'>Shop</Link></li>
						<li><Link to="/sale" className='link'>On Sale</Link></li>
						<li><Link to="New Arrivals" className='link'>New Arrivals</Link></li>
						<li><Link to="/Brands" className='link'>Brands</Link></li>
					</ul>
				</div>
				<div className='navbar-search'>
					<input type="text" placeholder='Search for products' />
					<button><FaSearch /></button>
				</div>
				<div className='navbar-user'>
					<Link to="/cart" className='link'><FaShoppingCart className='icon'/></Link>
					<Link to="/login" className='link'><FaUser className='icon'/></Link>
				</div>
			</div>
		</div>
  	)
}

export default Navbar
