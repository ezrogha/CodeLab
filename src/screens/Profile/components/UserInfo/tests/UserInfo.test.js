import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from '../index';

test('Profile snapshot test', () => {
  const wrapper = renderer.create(<UserInfo />);
  expect(wrapper).toMatchSnapshot();
});
