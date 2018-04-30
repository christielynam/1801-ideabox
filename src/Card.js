import React from 'react'

const Card = ({ title, body, id, removeIdea }) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>Delete</button>
    </div>
  )
}

export default Card
