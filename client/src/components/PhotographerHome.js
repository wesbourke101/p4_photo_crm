import React from 'react'
import SingleProjectView from './SingleProjectView';

/// Photographers ProjectList
function PhotographerHome({currentUserProjects, currentUser, setCurrentProject}) {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  console.log(currentUser.projects)
  const completed = currentUserProjects.filter((complete) => complete.status === 'Completed') //Why is this CurrentUser.projects instead of CurrentUserProjects?
  console.log(completed)
  const pending = currentUserProjects.filter((pend) => pend.status === 'pending approval')
  console.log(pending)
  const inProgress = currentUserProjects.filter((progress) => progress.status === 'In progress')
  console.log(inProgress)
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const mappedCompleted = completed.map((projects) => { return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject}/>})

  return (
    <div>
      {mappedCompleted}
    </div>
   )

}

export default PhotographerHome