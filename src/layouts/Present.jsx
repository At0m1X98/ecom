import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Present = () => {
  	return (
		<div className='present'>
			<Sidebar/>
			<Outlet/>
		</div>
  	)
}

export default Present
