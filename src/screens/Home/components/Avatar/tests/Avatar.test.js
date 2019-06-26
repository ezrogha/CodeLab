import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../index';

test('Avatar snapshot test', () => {
  const wrapper = renderer.create(<Avatar />);
  expect(wrapper).toMatchSnapshot();
});
