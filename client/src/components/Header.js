import React from 'react'
import NavBar from './NavBar'
import LogOut from './LogOut'

function Header({logUserOut, currentUser}) {
  return (
    <div id="headerDiv">
        <ul>
            <NavBar logUserOut={logUserOut} currentUser={currentUser}/>
        </ul> 
    </div>
  )
}

export default Header