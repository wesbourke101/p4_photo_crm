import React from 'react'

function CompletedCard({complete}) {
  const {id, client_id, description, due_date, moodboard, photographer_id, status, title} = complete
  return (
    <div>
        {description}
        {title}
        {moodboard}
        {status}
    </div>
  )
}

export default CompletedCard