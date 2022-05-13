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
<<<<<<< HEAD

        <div className="card-body card" onClick={handleClick}>
            <h1 className="card-title">{project.title}</h1>
            <h4 className="card-status">Status: {project.status}</h4>
            <p className="card-status">Description: {project.description}</p>
            <p className="card-status">{project.due_date}</p>
            <p className="card__tagline">{project.moodboard}</p>
=======
        <div className="grid grid-rows-4 grid-flow-col gap-4" onClick={handleClick}>
            <h1>{project.title}</h1>
            <h4>{project.status}</h4>
            <p>{project.description}</p>
            <p>{project.due_date}</p>
            <p>{project.moodboard}</p>
>>>>>>> wesAfterHours12
        </div>
    </div>
  )
}

export default SingleProjectView
