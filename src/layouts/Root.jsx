import React from 'react'
import "../App.css"
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import NavDeal from '../components/NavDeal/NavDeal'
import Footer from '../components/Footer/Footer'

const Root = () => {
  	return (
		<div className='root'>
			<NavDeal/>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</div>
  	)
}

export default Root
