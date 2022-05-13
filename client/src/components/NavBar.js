import React from 'react'
import { Link } from "react-router-dom";
import LogOut from './LogOut';

function NavBar({currentUser, logUserOut}) {
  return (
    <div>
      {currentUser.bio 
        ?      
          <nav>
            <li><Link id="linkElement" to="/home">Home</Link></li>
            <li id="liLogOut"><LogOut logUserOut={logUserOut}/></li>
          </nav>  
        :      
          <nav>
              <li><Link id="linkElement" to="/">Login</Link></li>
              <li><Link id="linkElement" to="/my_projects">My Projects</Link></li>
              <li><Link id="linkElement" to="/add_project">Create New Project</Link></li>
              <li id="liLogOut"><LogOut logUserOut={logUserOut}/></li>
              <Link to="/project/:id"></Link>
          </nav>}

    </div>
  )
}

export default NavBar