import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.dive().find('div').length).toBe(1);
  });
  it('should contain LogIn button by default', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.dive().contains('login')).toBe(true);
  });
  it('should not contain Leader Board by default', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.dive().contains('Leader Board')).toBe(false);
  });
  it('should not contain LogIn button if user has already logged in', () => {
    const wrapper = shallow(<NavBar isLoggedIn />);
    expect(wrapper.dive().contains('login')).toBe(false);
  });
  it('should contain Leader Board by default', () => {
    const wrapper = shallow(<NavBar isLoggedIn />);
    expect(wrapper.dive().contains('Leader Board')).toBe(true);
  });
});
