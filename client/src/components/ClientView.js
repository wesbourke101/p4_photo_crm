import React from 'react'
import ProjectList from './ProjectList';

function ClientView({currentUserProjects, setCurrentProject, currentProject, currentUser}) {


    return (
     <div>
         <div>
             <ProjectList currentUser={currentUser} currentProject={currentProject} setCurrentProject={setCurrentProject} currentUserProjects={currentUserProjects}/>
         </div>
    </div>
    )
}

export default ClientView