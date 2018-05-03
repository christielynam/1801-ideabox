import React from 'react';
import ReactDOM from 'react-dom';
import IdeaForm from '../IdeaForm';
import { shallow, mount} from 'enzyme';

describe('IdeaForm', () => {
  let addIdeaMock;
  let wrapper;

  beforeEach(() => {
    addIdeaMock = jest.fn()
    wrapper = shallow(<IdeaForm addIdea={addIdeaMock} />)
  })

  it('matches the sanpshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls setState when title is changed', () => {
    const spy = spyOn(wrapper.instance(), 'setState')
    const mockEvent = { target: { value: 'something' } }

    wrapper.find('.title-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('calls setState when body is changed', () => {
    const spy = spyOn(wrapper.instance(), 'setState')
    const mockEvent = { target: { value: 'something'} }

    wrapper.find('.body-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('updates state when handleInputChange is called', () => {
    const mockEvent = { target: { name: 'title', value: 'something' } }

    wrapper.instance().handleInputChange(mockEvent)

    expect(wrapper.state('title')).toBe('something')
  })

  it('should call handleSubmit onSubmit of the form', () => {
    wrapper = mount(<IdeaForm addIdea={addIdeaMock} />)

    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should call addIdea onSubmit of the form', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('form').simulate('submit', mockEvent)

    expect(addIdeaMock).toHaveBeenCalled()
  })
})
