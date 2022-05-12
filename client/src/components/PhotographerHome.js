import React from 'react'
import SingleProjectView from './SingleProjectView';

/// Photographers ProjectList
function PhotographerHome({currentUserProjects, currentUser, setCurrentProject}) {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  console.log(currentUser.projects)
  const completed = currentUserProjects.filter((complete) => complete.status === 'Completed') //Why is this CurrentUser.projects instead of CurrentUserProjects?
  console.log(completed)
  const pending = currentUserProjects.filter((pend) => pend.status === 'Pending Approval')
  console.log(pending)
  const inProgress = currentUserProjects.filter((progress) => progress.status === 'In Progress')
  console.log(inProgress)
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const mappedCompleted = completed.map((projects) => { return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject}/>})
  const mappedPending = pending.map((projects) => { return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject}/>})
  const mappedProgress = inProgress.map((projects) => { return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject}/>})
  console.log(currentUser)
  return (
    <div>
      <div>
        -----------------------------------------
        <h2>{currentUser.first_name} {currentUser.last_name}</h2>
        <text>Photographer</text><br/>
        <p>Bio:</p>
        <p>{currentUser.bio}</p>

        <a href={currentUser.website}>{currentUser.first_name}'s website</a><br/>
        -----------------------------------------
      </div>  
      <div>
        {mappedCompleted}
      </div>  
        <>---------------------------------</><br/>
      <div>  
        {mappedPending}
      </div>    
        <>---------------------------------</><br/>
      <div>  
        {mappedProgress}
      </div>
    </div>
   )

}

export default PhotographerHome