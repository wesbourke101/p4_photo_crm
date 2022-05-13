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



    <div className="custom-container-full-proj">
        <div className="full-proj-nav-custom-card">
            <h1>{currentProject.title}</h1>
            <h4>{currentProject.status}</h4>
            <p>{currentProject.description}</p>
            <p>{currentProject.due_date}</p>
            <p>{currentProject.moodboard}</p>

            <div className="button-layout-new-proj">
                <button className="button-design-2-form" onClick={modalPopUp}>Edit</button>
                <p> </p>
                <button className="button-design" onClick={() => onDeleteProject(currentProject.id)}>Delete</button>
                {toggleUpdateModal ? <UpdateModal setToggleUpdateModal={setToggleUpdateModal} onUpdateProject={onUpdateProject}/> : null}
            </div>
        </div>
    </div>
   </div>
  )
}

export default FullProjectNav;





