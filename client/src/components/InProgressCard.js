import React from 'react'

function InProgressCard({progress}) {
    const {id, client_id, description, due_date, moodboard, photographer_id, status, title} = progress

  return (
    <div>
        {description}
        {title}
        {moodboard}
        {status}
    </div>
  )
}

export default InProgressCard