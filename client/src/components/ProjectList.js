import React from 'react'
import SingleProjectView from './SingleProjectView';

function ProjectList({currentUserProjects, currentUser, setCurrentProject}) {

    /////////////////////////////////////////////////////////////////////////
    const completed = currentUserProjects.filter((completedProject) => completedProject.status === 'Completed')
    const pending = currentUserProjects.filter((pendingProject) => pendingProject.status === 'Pending Approval')
    const inProgress = currentUserProjects.filter((progress) => progress.status === 'In Progress')
    ////////////////////////////////////////////////////////////////////////
    const mappedPending = pending.map((projects) => {return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject} />})
    const mappedInProgress = inProgress.map((projects) => {return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject} />})
    const mappedCompleted = completed.map((projects) => {return <SingleProjectView key={projects.id} project={projects} setCurrentProject={setCurrentProject}/>})
    ////////////////////////////////////////////////////////////////////////

    return (
     <div>
        <div>
            {currentUser.first_name}
            {currentUser.last_name}
        </div>
        <div>
            <h1>Completed</h1>
            <ul>
                {mappedCompleted}
            </ul>
        </div>
        <div>
            <h1>In Progress</h1>
            <ul>
                {mappedInProgress}
            </ul>
        </div>
        <div>
            <h1>Pending Approval</h1>
            <ul>
                {mappedPending}
            </ul>
        </div>
        
     </div>
    )
}

export default ProjectList


