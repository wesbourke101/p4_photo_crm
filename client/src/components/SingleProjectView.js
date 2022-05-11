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
        <div className="team-members">

        </div>
        <div className="project" onClick={handleClick}>
            <h1>{project.title}</h1>
            <h4>{project.status}</h4>
            <p>{project.description}</p>
            <p>{project.due_date}</p>
            <p>{project.moodboard}</p>
        </div>
    </div>
  )
}

export default SingleProjectView
