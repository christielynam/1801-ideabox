import React from 'react';
import ReactDOM from 'react-dom';
import IdeaForm from '../IdeaForm';
import { shallow, mount} from 'enzyme';

describe('IdeaForm', () => {
  let addIdeaMock;
  let wrapper;

  beforeEach(() => {
    // Setup
    addIdeaMock = jest.fn()
    wrapper = shallow(<IdeaForm addIdea={addIdeaMock} />)
  })

  it('matches the sanpshot', () => {
    // Execution && Expectation
    expect(wrapper).toMatchSnapshot()
  })

  it('calls handleInputChange when title is changed', () => {
    // Setup
    wrapper = mount(<IdeaForm addIdea={addIdeaMock} />)
    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'something' } }

    // Execution
    wrapper.find('.title-input').simulate('change', mockEvent)

    // Expectation
    expect(spy).toHaveBeenCalled()
  })

  it('calls handleInputChange when body is changed', () => {
    // Setup
    wrapper = mount(<IdeaForm addIdea={addIdeaMock} />)
    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'something'} }

    // Execution
    wrapper.find('.body-input').simulate('change', mockEvent)

    // Expectation
    expect(spy).toHaveBeenCalled()
  })

  it('updates state when handleInputChange is called', () => {
    // Setup
    const mockEvent = { target: { name: 'title', value: 'something' } }

    // Execution
    wrapper.instance().handleInputChange(mockEvent)

    // Expectation
    expect(wrapper.state('title')).toBe('something')
  })

  it('calls handleSubmit onSubmit of the form', () => {
    // Setup
    wrapper = mount(<IdeaForm addIdea={addIdeaMock} />)
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate();

    // Execution
    wrapper.find('form').simulate('submit', mockEvent)

    // Expectation
    expect(spy).toHaveBeenCalled()
  })

  it('calls addIdea when handleSubmit is called', () => {
    // Setup
    const mockEvent = { preventDefault: jest.fn() }

    // Execution
    wrapper.instance().handleSubmit(mockEvent)

    // Expectation
    expect(addIdeaMock).toHaveBeenCalled()
  })
})
