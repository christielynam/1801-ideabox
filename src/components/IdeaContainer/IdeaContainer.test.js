import React from 'react';
import ReactDOM from 'react-dom';
import IdeaContainer from '../IdeaContainer';
import { shallow } from 'enzyme';

describe('IdeaContainer', () => {

  it('matches the snapshot', () => {
    const removeIdeaMock = jest.fn()
    const wrapper = shallow(<IdeaContainer ideas={[]} removeIdea={removeIdeaMock} />)

    expect(wrapper).toMatchSnapshot()
  })
})
