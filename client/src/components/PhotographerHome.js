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

  return (
    <div>
      {mappedCompleted}
      <>---------------------------------</><br/>
      {mappedPending}
      <>---------------------------------</><br/>
      {mappedProgress}
    </div>
   )

}

export default PhotographerHome