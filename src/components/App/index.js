import React, { Component } from 'react'
import './App.css'
import IdeaForm from '../IdeaForm'
import IdeaContainer from '../IdeaContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
          <IdeaForm addIdea={this.addIdea} />
        </header>
        <IdeaContainer ideas={this.state.ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
