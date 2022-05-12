import React from 'react'
import NavBar from './NavBar'
import LogOut from './LogOut'

function Header({logUserOut, currentUser}) {
  return (
    <div id="headerDiv">
         <NavBar currentUser={currentUser}/>
         <LogOut logUserOut={logUserOut}/>
    </div>
  )
}

export default Header