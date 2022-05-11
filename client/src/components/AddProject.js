import React, {useState} from 'react'

function AddProject() {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    due_date: Date.now(),
    moodboard: "",
    photographer: ""
  });

  function newProjectAction(e) {
    setNewProject({...newProject, [e.target.name]: e.target.value})
  }

  function createNewProject(e) {
    e.preventDefault()
    console.log(newProject)
  }
  
  return (
    <div>
        <div>
            <div >
              
                <form onSubmit={createNewProject} id="classicCards">
                    <label for="input_title">Title of job</label>
                    <input onChange={newProjectAction} name="title" type="type" value={newProject.title}/>

                    <label for="input_description">Job description</label>
                    <input onChange={newProjectAction} name="description" type="type" value={newProject.description}/>

                    <label for="input_due_date">Date of job</label>
                    <input onChange={newProjectAction} name="due_date" type="datetime-local" value={newProject.due_date}/>

                    <label for="input_moodboard">Title of job</label>
                    <input onChange={newProjectAction} name="moodboard" type="type" value={newProject.moodboard}/>

                    <select name="photographer" onChange={newProjectAction} value={newProject.photographer}>
                      <option value="null"> ---------look here------ </option>
                      <option value="wes">Name1</option>
                      <option value="caleb">Name2</option>
                      <option value="chett">Name3</option>
                    </select>
                    <button type="submit">[X]</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProject