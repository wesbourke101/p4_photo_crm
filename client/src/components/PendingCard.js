import React from 'react'

function PendingCard({pend}) {
    const {id, client_id, description, due_date, moodboard, photographer_id, status, title} = pend

  return (
    <div id="classicCards">
        {description}<br/>
        {title}<br/>
        {moodboard}<br/>
        {status}
    </div>
  )
}

export default PendingCard