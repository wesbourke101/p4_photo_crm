import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/">Login</Link> | {" "}
            <Link to="/my_projects">My Projects</Link> | {" "}
            <Link to="/add_project">My Projects</Link>
      </nav>
    </div>
  )
}

export default NavBar