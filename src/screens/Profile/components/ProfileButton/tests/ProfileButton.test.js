import React from 'react';
import renderer from 'react-test-renderer';
import ProfileButton from '../index';

test('Profile snapshot test', () => {
  const wrapper = renderer.create(<ProfileButton />);
  expect(wrapper).toMatchSnapshot();
});
