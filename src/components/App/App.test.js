import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import { shallow, mount, render } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders an IdeaContainer with the correct props', () => {
    //const mockRemoveIdea = jest.fn()
    //wrapper.instance().removeIdea = mockRemoveIdea
    expect(wrapper.find(IdeaContainer).prop('ideas')).toEqual([])
    expect(wrapper.find(IdeaContainer).prop('removeIdea')).toEqual(wrapper.instance().removeIdea)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('removeIdea', () => {
    it('changes state', () => {
      const initialState = [{title: 'hey', body: 'yall', id: 1}, {title: 'war', body: 'eagle', id: 2}]
      const expected = [{title: 'hey', body: 'yall', id: 1}]
      wrapper.setState({ ideas: initialState })

      wrapper.instance().removeIdea(2)

      expect(wrapper.state('ideas')).toEqual(expected)
    })
  })
})
