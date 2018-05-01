import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';

describe('Card', () => {
  it('calls removeIdea with the correct id', () => {
    const removeIdeaMock = jest.fn()
    const expectedId = 2

    const renderedComponent = shallow(<Card title='title' body='body' id={expectedId} removeIdea={removeIdeaMock} />)

    const button = renderedComponent.find('button')
    button.simulate('click')

    expect(removeIdeaMock).toHaveBeenCalledWith(expectedId)
  })
})
