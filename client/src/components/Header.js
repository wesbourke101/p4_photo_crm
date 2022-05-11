import React from 'react'
import NavBar from './NavBar'
import LogOut from './LogOut'

function Header({logUserOut}) {
  return (
    <div id="headerDiv">
         <NavBar />
         <LogOut logUserOut={logUserOut}/>
    </div>
  )
}

export default Header