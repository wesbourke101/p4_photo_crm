import React from 'react'
import CompletedCard from './CompletedCard'
import InProgressCard from './InProgressCard'
import PendingCard from './PendingCard'

function ClientStatusCards({currentUserProjects, currentUser}) {
    //////////////////////////////////////////////////////////////////////////
    const completed = currentUserProjects.filter((completedProject) => completedProject.status === 'Completed')
    const pending = currentUserProjects.filter((pendingProject) => pendingProject.status === 'pending approval')
    const inProgress = currentUserProjects.filter((progress) => progress.status === 'In progress')
    ////////////////////////////////////////////////////////////////////////
    const mappedPending = pending.map((pend) => {return <PendingCard pend={pend}/>})
    const mappedInProgress = inProgress.map((progress) => {return <InProgressCard progress={progress}/>})
    const mappedCompleted = completed.map((complete) => {return <CompletedCard complete={complete}/>})
    ////////////////////////////////////////////////////////////////////////
  
    return (
        <div className="flex-container" id="mainDivcard">
            <div className='flex-container' id="clientNameCardDiv"> 
                Client Info: <br/> 
                <div id="classicCards">{currentUser.first_name} {currentUser.last_name}</div>
            </div>
            <div className='flex-container' id="pendingApprovalCardDiv">
                Pending approval: <br/> 
                {mappedPending}
            </div>
            <div className='flex-container' id="inProgressCardDiv">
                In progress: <br/> 
                {mappedInProgress}
            </div>
            <div className='flex-container' id="completedCardDiv">
                Completed jobs: <br/> 
                {mappedCompleted}
            </div>
        </div>
    )
}

export default ClientStatusCards