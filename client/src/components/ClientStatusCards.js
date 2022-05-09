import React from 'react'

function ClientStatusCards() {
  return (
    <div className="flex-container" id="mainDivcard">
        <div className='flex-container' id="clientNameCardDiv"> 
            make client name card here 
        </div>
        <div className='flex-container' id="pendingApprovalCardDiv">
            make pending approval cards
        </div>
        <div className='flex-container' id="inProgressCardDiv">
            make in progress cards
        </div>
        <div className='flex-container' id="completedCardDiv">
            make completed cards
        </div>
    </div>
  )
}

export default ClientStatusCards