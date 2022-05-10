import React from 'react'

function CompletedCard({complete}) {
  const {id, client_id, description, due_date, moodboard, photographer_id, status, title} = complete
  return (
    <div id="classicCards">
        {description}<br/>
        {title}<br/>
        {moodboard}<br/>
        {status}
    </div>
  )
}

export default CompletedCard