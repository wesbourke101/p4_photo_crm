import React from 'react'

function SingleProjectView({project}) {

  return (
    <div>
        <div className="team-members">

        </div>
        <div className="project">
            <h1>{project.title}</h1>
            <h4>{project.status}</h4>
            <p>{project.description}</p>
            <p>{project.due_date}</p>
            <p>{project.moodboard}</p>
            <button>Possible view button</button>
        </div>
    </div>
  )
}

export default SingleProjectView
