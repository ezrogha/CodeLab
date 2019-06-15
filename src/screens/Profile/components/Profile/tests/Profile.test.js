import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../index';

test('Profile snapshot test', () => {
  const wrapper = renderer.create(<Profile />);
  expect(wrapper).toMatchSnapshot();
});
