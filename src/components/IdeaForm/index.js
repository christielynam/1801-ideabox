import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='title'
          onChange={this.handleInputChange}
          value={this.state.title}
          name='title'
        />
        <input
          type='text'
          placeholder='body'
          onChange={this.handleInputChange}
          value={this.state.body}
          name='body'
        />
        <button>Submit</button>
      </form>
    )
  }
}

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
}

export default IdeaForm
