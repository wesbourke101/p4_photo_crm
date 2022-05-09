import React from 'react'
import CompletedCard from './CompletedCard'
import InProgressCard from './InProgressCard'
import PendingCard from './PendingCard'


function ClientStatusCards({photoProjects}) {
    //////////////////////////////////////////////////////////////////////////
    // console.log(photoProjects)
    const completed = photoProjects.filter((completedProject) => completedProject.status === 'Completed')
    // console.log(completed)
    const pending = photoProjects.filter((pendingProject) => pendingProject.status === 'pending approval')
    // console.log(pending)
    const inProgress = photoProjects.filter((progress) => progress.status === 'In progress')
    // console.log(inProgress)
    ////////////////////////////////////////////////////////////////////////
    const mappedPending = pending.map((pend) => {return <PendingCard pend={pend}/>})
    const mappedInProgress = inProgress.map((progress) => {return <InProgressCard progress={progress}/>})
    const mappedCompleted = completed.map((complete) => {return <CompletedCard complete={complete}/>})
    ////////////////////////////////////////////////////////////////////////
    return (
    <div className="flex-container" id="mainDivcard">
        <div className='flex-container' id="clientNameCardDiv"> 
            make client name card here 
        </div>
        <div className='flex-container' id="pendingApprovalCardDiv">
            make pending approval cards
            {mappedPending}
        </div>
        <div className='flex-container' id="inProgressCardDiv">
            make in progress cards
            {mappedInProgress}
        </div>
        <div className='flex-container' id="completedCardDiv">
            make completed cards
            {mappedCompleted}
        </div>
    </div>
  )
}

export default ClientStatusCards