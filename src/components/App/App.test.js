import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import IdeaContainer from '../IdeaContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // this test is not necessary... this is being tested with prop types
  it('renders an IdeaContainer with the correct props', () => {
    expect(wrapper.find(IdeaContainer).prop('ideas')).toEqual([])
    expect(wrapper.find(IdeaContainer).prop('removeIdea')).toEqual(wrapper.instance().removeIdea)
  })

  it('addIdea adds an idea to state', () => {
    const initialState = []
    const mockIdea = {title: 'hey', body: 'yall'}
    const expected = [{title: 'hey', body: 'yall', id: 5}]
    Date.now = jest.fn().mockImplementation(() => 5)

    wrapper.setState({ ideas: initialState })

    wrapper.instance().addIdea(mockIdea)

    expect(wrapper.state('ideas')).toEqual(expected)
    expect(wrapper.state('ideas').length).toEqual(1)
  })

  // it('does not add a new idea if addIdea is not passed the correct params', () => {
  //   const initialState = []
  //   const invalidIdea = {title: 'react is rad'}
  //
  //   wrapper.setState({ ideas: initialState })
  //
  //   wrapper.instance().addIdea(invalidIdea)
  //
  //   expect(wrapper.state('ideas')).toEqual(initialState)
  // })

  it('removeIdea removes an idea from state', () => {
    const initialState = [{title: 'hey', body: 'yall', id: 1}, {title: 'war', body: 'eagle', id: 2}]
    const expected = [{title: 'hey', body: 'yall', id: 1}]

    wrapper.setState({ ideas: initialState })

    wrapper.instance().removeIdea(2)

    expect(wrapper.state('ideas')).toEqual(expected)
  })

  it('does not remove an idea if an id is not passsed to removeIdea', ()  => {
    const initialState = [{title: 'hey', body: 'yall', id: 1}, {title: 'war', body: 'eagle', id: 2}]

    wrapper.setState({ ideas: initialState })

    wrapper.instance().removeIdea()

    expect(wrapper.state('ideas')).toEqual(initialState)
  })

})
