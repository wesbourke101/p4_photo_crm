import React from 'react'
import { useState } from 'react'
import UpdateModal from './UpdateModal'

function FullProjectNav({ onDeleteProject, currentProject, onUpdateProject }) {

  const [toggleUpdateModal, setToggleUpdateModal] = useState(false)    

  function modalPopUp() {
      setToggleUpdateModal(true)
  }

  return (
   <div>
        <div className="project">
            <h1>{currentProject.title}</h1>
            <h4>{currentProject.status}</h4>
            <p>{currentProject.description}</p>
            <p>{currentProject.due_date}</p>
            <p>{currentProject.moodboard}</p>
            <button onClick={modalPopUp}>Edit</button>
            <button onClick={() => onDeleteProject(currentProject.id)}>Delete</button>
            {toggleUpdateModal ? <UpdateModal setToggleUpdateModal={setToggleUpdateModal} onUpdateProject={onUpdateProject}/> : null}
        </div>
   </div>
  )
}

export default FullProjectNav;





