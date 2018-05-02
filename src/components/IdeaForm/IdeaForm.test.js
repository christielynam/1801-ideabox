import React from 'react';
import ReactDOM from 'react-dom';
import IdeaForm from '../IdeaForm';
import { shallow, mount, render } from 'enzyme';

describe('IdeaForm', () => {
  let wrapper;

  beforeEach(() => {
    const addIdeaMock = jest.fn()
    wrapper = shallow(<IdeaForm addIdea={addIdeaMock} />)
  })

  it('matches the sanpshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('calls handleInputChange when title is changed', () => {

    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    const mockEvent = { target: { value: 'something'}}

    wrapper.update()

    wrapper.find('.title-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it.skip('calls handleInputChange when body is changed', () => {
    const spy = spyOn(wrapper.instance(), 'handleInputChange')

    const mockEvent = { target: { value: 'something'}}

    wrapper.find('.body-input').simulate('change', mockEvent)

  })

  it('updates state when handleInputChange is called', () => {
    const mockEvent = { target: { name:
      'title', value: 'something'}}

    wrapper.instance().handleInputChange(mockEvent)

    expect(wrapper.state()['title']).toBe('something')
  })

  it('should call handleSubmit onSubmit of the form', () => {

  })
})
