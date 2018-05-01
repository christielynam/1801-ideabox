import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const IdeaContainer = ({ ideas, removeIdea }) => {

  const ideaCards = ideas.map((idea, index) =>
    <Card
      {...idea}
      key={idea.id}
      removeIdea={removeIdea}
    />)

  return (
    <div>
      {ideaCards}
    </div>
  )
}

IdeaContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default IdeaContainer
