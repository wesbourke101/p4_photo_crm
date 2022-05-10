import React from 'react'
// Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "Completed", client: c1, photographer: p1)

function AddProject() {
  function createNewProject(e) {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div>
        <div>
            <div id="classicCards">
                <form onSubmit={createNewProject}>
                    <label for="input_title">Title of job</label>
                    <input name="title" type="type" value="placeHolder"/>

                    <label for="input_description">Job description</label>
                    <input name="description" type="type" value="placeHolder"/>

                    <label for="input_due_date">Date of job</label>
                    <input name="due_date" type="datetime"/>

                    <label for="input_moodboard">Title of job</label>
                    <input name="moodboard" type="type" value="placeHolder"/>
                    <input name="status" type="type" value="placeHolder"/>
                    <select name="photographer">
                      <option value="null"> ---------look here------ </option>
                      <option value="photographerName">Name1</option>
                      <option value="photographerName">Name2</option>
                      <option value="photographerName">Name3</option>
                    </select>
                    <button type="submit">[X]</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProject