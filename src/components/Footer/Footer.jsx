import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { RiPaypalLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='footer-news'>
					<div className='footer-news-title'>
						<h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
					</div>
					<div className='footer-news-input'>
						<input type='email' placeholder='Enter your email' />
						<button>Subscribe to Newwsletter</button>
					</div>
				</div>
				<div className='footer-infos'>
					<div className='footer-intro'>
						<h1>E-COM</h1>
						<p>We have product that suits your needs and which you're proud to buy.</p>
						<div className='footer-socials'>
							<a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
								<FaTwitter className='footer-icon' />
							</a>
							<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
								<FaFacebook className='footer-icon' />
							</a>
							<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
								<FaInstagram className='footer-icon' />
							</a>
						</div>
					</div>
					<div className='info'>
						<h2>Company</h2>
						<ul>
							<li><a href='/about'>About Us</a></li>
							<li><a href='/contact'>Contact Us</a></li>
							<li><a href='/privacy'>Privacy Policy</a></li>
							<li><a href='/terms'>Terms of Service</a></li>
						</ul>
					</div>
					<div className='info'>
						<h2>Help</h2>
						<ul>
							<li><a href='/customer-support'>Customer Support</a></li>
							<li><a href='/shipping'>Shipping</a></li>
							<li><a href='/returns'>Returns</a></li>
							<li><a href='/privacy-policy'>Privacy Policy</a></li>
						</ul>
					</div>
					<div className='info'>
						<h2>FAQ</h2>
						<ul>
							<li><a href='/account'>Account</a></li>
							<li><a href='/manag-deliveries'>Manage Deliveries</a></li>
							<li><a href='/orders'>Orders</a></li>
							<li><a href='/Paymens'>Payments</a></li>
						</ul>
					</div>
				</div>
				<div className='footer-end'>
						<p>E-COM @ 2000-2024. All Rights Reserved</p>
					<div className='footer-cards'>
						<FaCcVisa className='footer-card' />
						<FaCcMastercard className='footer-card' />
						<RiPaypalLine className='footer-card' />
						<FaApplePay className='footer-card' />
						<FaGooglePay className='footer-card' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
