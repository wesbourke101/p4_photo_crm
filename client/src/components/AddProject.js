import React, {useState, useEffect} from 'react'

function AddProject({postNewProjy, currentUser}) {
  ///////////////////////////////////////////////////////////////////
  const [photoGraphers, setPhotoGraphers] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/photographers`)
    .then( res => res.json())
    .then( data => setPhotoGraphers(data))
    .catch( error => console.log(error.message));
  },[])
  ///////////////////////////////////////////////////////////////////
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    due_date: Date.now(),
    moodboard: "",
    photographer: "",
    status: "pending approval",
    photographer_id: 0,
    client_id: currentUser.id
  });

  function newProjectAction(e) {
    setNewProject({...newProject, [e.target.name]: e.target.value})
  }

  function createNewProject(e) {
    e.preventDefault()
    postNewProjy(newProject)
  }
  const photographerMappedOptions = photoGraphers.map((photoOption) => {return <option value={photoOption.id} >{photoOption.first_name} {photoOption.last_name}</option> })
  return (
    <div>
        <div>
            <div >
                <form onSubmit={createNewProject} id="classicCards">
                    <label for="input_title">Title of job:</label>
                    <input onChange={newProjectAction} name="title" type="type" value={newProject.title}/>

                    <label for="input_description">Job description:</label>
                    <input onChange={newProjectAction} name="description" type="type" value={newProject.description}/>

                    <label for="input_due_date">Date of job:</label>
                    <input onChange={newProjectAction} name="due_date" type="datetime-local" value={newProject.due_date}/>

                    <label for="input_moodboard">Moodboard:</label>
                    <input onChange={newProjectAction} name="moodboard" type="type" value={newProject.moodboard}/>

                    <label for="input_moodboard">Photographer:</label>
                      <select name="photographer_id" onChange={newProjectAction} value={newProject.photographer_id}>
                        <option value="null"> ---------look here------ </option>
                        {photographerMappedOptions}
                      </select>
                    <button type="submit">Submit Job</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProject