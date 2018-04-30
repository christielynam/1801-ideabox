import React from 'react'
import Card from './Card'

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

export default IdeaContainer
