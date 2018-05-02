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

  it('calls setState when title is changed', () => {

    const spy = spyOn(wrapper.instance(), 'setState')
    const mockEvent = { target: { value: 'something'} }

    wrapper.find('.title-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('calls setState when body is changed', () => {
    const spy = spyOn(wrapper.instance(), 'setState')
    const mockEvent = { target: { value: 'something'}}

    wrapper.find('.body-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('updates state when handleInputChange is called', () => {
    const mockEvent = { target: { name:
      'title', value: 'something'} }

    wrapper.instance().handleInputChange(mockEvent)

    expect(wrapper.state()['title']).toBe('something')
  })

  it('should call addIdea onSubmit of the form', () => {
    console.log(wrapper.props('addIdea'));
    const spy = spyOn(wrapper.props(), 'addIdea')
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('form').simulate('submit', mockEvent)

    expect(spy).toHaveBeenCalled()
  })
})
