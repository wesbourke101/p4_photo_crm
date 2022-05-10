import React from 'react'

function InProgressCard({progress}) {
    const {id, client_id, description, due_date, moodboard, photographer_id, status, title} = progress

  return (
    <div id="classicCards">
        {description}<br/>
        {title}<br/>
        {moodboard}<br/>
        {status}
    </div>
  )
}

export default InProgressCard