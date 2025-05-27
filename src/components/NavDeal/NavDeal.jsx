import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import "./NavDeal.css"

const NavDeal = () => {
const [showDeal, setShowDeal] = React.useState(true);

const handleClose = (e) => {
	setShowDeal(false);
	console.log("Deal closed");
}

  	return (
		<div className='nav-deal' style={{ display: showDeal ? "flex" : "none" }}>
			<div className='nav-deal-container'>
				<div className='nav-deal-info'>
					<p>Sign-up and get 20% off to your first order!</p>
					<a href="/signup" className='nav-deal-btn'>Sign Up Now</a>
				</div>
				<button onClick={handleClose}><MdOutlineCancel /></button>
			</div>
		</div>
  	)
}

export default NavDeal
