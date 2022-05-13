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

        <div className="user-card">
            <div className="user-card-image-wrapper">
            <img className="user-card-image" src={currentUser.profile_picture}></img>
            </div>
            <div className="user-card-content">
                <h4 className="user-card-name">{currentUser.first_name} {currentUser.last_name}</h4>
                 <p className="user-card-title" >{currentUser.title}</p>
            </div>

        </div>

    
        <div className="categories">
            <h1 className="categories-styling">Pending Approval</h1>
        </div>
        
        <div className="custom-project-container">
            <div className="user-card-list-horizontal">
                    {mappedPending}
            </div>
        </div>
        
        <div className="categories">
            <h1 className="categories-styling">In Progress</h1>
        </div>

        <div className="custom-project-container">
            <div className="custom-project-card-layout">
                {mappedInProgress}
            </div>
        </div>


        <div className="categories">
            <h1 className="categories-styling">Completed</h1>
        </div>

        <div className="custom-project-container">
        <div>
            {mappedCompleted}
        </div>  
        </div>


        <div className="empty-bottom-div"> </div>

        
     </div>
    )
}

export default ProjectList


