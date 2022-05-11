import React from 'react'

function FullProjectNav({ currentProject }) {
  return (
    <div>
        <div className="project">
            <h1>{currentProject.title}</h1>
            <h4>{currentProject.status}</h4>
            <p>{currentProject.description}</p>
            <p>{currentProject.due_date}</p>
            <p>{currentProject.moodboard}</p>
        </div>
    </div>
  )
}

export default FullProjectNav;
