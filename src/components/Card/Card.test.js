import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index';
import { shallow, mount, render } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let removeIdeaMock;
  let expectedId;

  beforeEach(() => {
    removeIdeaMock = jest.fn()
    expectedId = 2

    wrapper = shallow(<Card title='title' body='body' id={expectedId} removeIdea={removeIdeaMock} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('calls removeIdea with the correct id', () => {
    const button = wrapper.find('button')
    button.simulate('click')

    expect(removeIdeaMock).toHaveBeenCalledWith(expectedId)
  })
})
