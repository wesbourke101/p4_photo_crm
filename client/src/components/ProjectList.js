import React from 'react'
// import { useNavigate } from "react-router-dom";
import SingleProjectView from './SingleProjectView';

function ProjectList({currentUserProjects, currentUser}) {

    /////////////////////////////////////////////////////////////////////////
    const completed = currentUserProjects.filter((completedProject) => completedProject.status === 'Completed')
    const pending = currentUserProjects.filter((pendingProject) => pendingProject.status === 'pending approval')
    const inProgress = currentUserProjects.filter((progress) => progress.status === 'In progress')
    ////////////////////////////////////////////////////////////////////////
    const mappedPending = pending.map((projects) => {return <SingleProjectView key={projects.id} project={projects}/>})
    const mappedInProgress = inProgress.map((projects) => {return <SingleProjectView key={projects.id} project={projects}/>})
    const mappedCompleted = completed.map((projects) => {return <SingleProjectView key={projects.id} project={projects}/>})
    ////////////////////////////////////////////////////////////////////////
    return (
     <div>
        <div>
            {currentUser.first_name}
            {currentUser.last_name}
        </div>
        <div>
            <h1>Complete</h1>
            <ul>
                {mappedCompleted}
            </ul>
        </div>
        <div>
            <h1>In-Progress</h1>
            <ul>
                {mappedInProgress}
            </ul>
        </div>
        <div>
            <h1>Pending</h1>
            <ul>
                {mappedPending}
            </ul>
        </div>
        
     </div>
    )
}

export default ProjectList


// onClick={() => {
//     setCurrentProject(projects)
//     navigate(`/my_projects/${currentProject.id}`)
// }}


