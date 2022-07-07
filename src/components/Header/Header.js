import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import { ChevronDownIcon} from '@chakra-ui/icons'

function Header() {
  return (
    <div className='header'>
        <div className='header-items'>
            <div className='header-item'><img src={logo} className='header-logo'></img></div>
            <div className='header-item header-need'>Rent</div>
            <div className='header-item header-need'>Buy</div>
            <div className='header-item header-need'>Sell</div>
            <div className='header-item'>Manage Property <ChevronDownIcon/></div>
            <div className='header-item'>Resources <ChevronDownIcon/></div>
        </div>
        <div className='header-items'>
            <div className='header-item header-btn'>Login</div>
            <div className='header-item header-btn'>Signup</div>            
        </div>

    </div>
  )
}

export default Header