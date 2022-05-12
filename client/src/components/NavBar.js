import React from 'react'
import { Link } from "react-router-dom";

function NavBar({currentUser}) {
  return (
    <div>
      {currentUser.bio 
        ?      
          <nav>
            <Link to="/home">Home</Link>
          </nav>  
        :      
          <nav>
              <Link to="/">Login</Link> | {" "}
              <Link to="/my_projects">My Projects</Link> | {" "}
              <Link to="/add_project">Create New Project</Link>
              <Link to="/project/:id"></Link>
          </nav>}

    </div>
  )
}

export default NavBar