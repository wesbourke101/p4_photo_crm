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
     <div className="bg-slate-500">

        <div className="user-card">
            <div className="user-card-image-wrapper">
            <img className="user-card-image" src={currentUser.profile_picture}></img>
            </div>
            <div className="user-card-content">
                <h4 className="user-card-name">{currentUser.first_name} {currentUser.last_name}</h4>
                 <p className="user-card-title" >{currentUser.title}</p>
            </div>

        </div>

    
        <div className="user-card-content">
            <h1>Pending Approval</h1>
        </div>
        
        <div className="user-card-list-horizontal">
            <div>
                {mappedPending}
            </div>
        </div>
  
        
        <div>
            <h1>In Progress</h1>
        </div>
            
        <div className="user-card-list-horizontal">
            <div>
                {mappedInProgress}
            </div>
        </div>


        <div>
            <h1>Completed</h1>
        </div>

        <div>
            {mappedCompleted}
        </div>

        <div className="empty-bottom-div"> </div>

        
     </div>
    )
}

export default ProjectList


