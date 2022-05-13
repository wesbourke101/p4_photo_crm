import React from 'react'
import { useNavigate } from "react-router-dom";


function SingleProjectView({ setCurrentProject, project, handleClick}) {
  let navigate = useNavigate()

  function handleClick() {
    console.log(project.id)
    setCurrentProject(project)
    navigate(`/project/${project.id}`)
 }

  return (
    <div>
        <div className="cards">

        </div>

        <div className="card-body card" onClick={handleClick}>
            <h1 className="card-title">{project.title}</h1>
            <h4 className="card-status">Status: {project.status}</h4>
            <p className="card-status">Description: {project.description}</p>
            <p className="card-status">{project.due_date}</p>
            <p className="card__tagline">{project.moodboard}</p>
        </div>
    </div>
  )
}

export default SingleProjectView
