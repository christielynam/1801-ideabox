import React from 'react';
import ReactDOM from 'react-dom';
import IdeaForm from '../IdeaForm/IdeaForm';
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
})
