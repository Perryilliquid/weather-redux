import React from 'react';
import { mount } from 'enzyme';
import LoadingContainer from './LoadingContainer';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingContainer />', () => {
  let component;

  const ComponentStub = () => <div />

  beforeEach(() => {
    component = mount(<LoadingContainer loading={false}><ComponentStub /></LoadingContainer>);
  });

  it('should render the loading component when loading', () => {
    component.setProps({ loading: true });

    expect(component.find(LoadingSpinner).length).toEqual(1);
  });

  it('should render children when not loading', () => {
    component.setProps({ loading: false });

    expect(component.find(ComponentStub).length).toEqual(1);
  });
});
