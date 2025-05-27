import React from 'react'
import '../App.css'
import Hero from '../components/Hero/Hero'
import Brands from '../components/Brands/Brands'
import SelectItem from '../components/SelectItem/SelectItem'

const Home = () => {
  	return (
		<div className='home'>
			<Hero/>
			<Brands/>
			<SelectItem selection='new'/>
			<SelectItem selection='top'/>
		</div>
  	)
}

export default Home
