import React, { useState } from 'react'

function UpdateModal({ setToggleUpdateModal, onUpdateProject }) {

    const [updateProject, setUpdateProject] = useState({
        status: ""
    })

    function inputSelector(e) {
        setUpdateProject({...updateProject, [e.target.name]: e.target.value})
    }

    function updateStatus(e) {
        e.preventDefault()
        onUpdateProject(updateProject)
    }

  return (
    <div className='modal'>
        <div className='modal_content card'>
            <div className='modal_header'>
            <button className="button-design"  onClick={() => setToggleUpdateModal(false)}>Close</button>
                <h4 className='modal_title'> Update Status </h4>
            </div>
            <div className='modal_body'>

                <form onSubmit={updateStatus}>
                        <label> Status </label>
                        <select value={updateProject.status} onChange={inputSelector} name="status" >
                            <option value="Pending Approval"> Pending Approval </option>
                            <option value="In Progress"> In Progress </option>
                            <option value="Completed"> Completed </option>
                        </select>
                    <button className="button-design-2" type="submit">Update Status</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateModal