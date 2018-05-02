import React from 'react';
import ReactDOM from 'react-dom';
import IdeaContainer from '../IdeaContainer';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('IdeaContainer', () => {
  let wrapper;
  let mockIdeas;
  let removeIdeaMock;

  beforeEach(() => {
    removeIdeaMock = jest.fn()
    mockIdeas = [{title: 'hey', body: 'yall', id: 3}, {title: 'war', body: 'eagle', id: 5}]
    wrapper = shallow(<IdeaContainer ideas={mockIdeas} removeIdea={removeIdeaMock} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders all the ideas', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })
})
