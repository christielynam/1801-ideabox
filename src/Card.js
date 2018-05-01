import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, body, id, removeIdea }) => {
  return(
    <div>  
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default Card
