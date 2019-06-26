import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../index';

test('ListItem snapshot test', () => {
  const wrapper = renderer.create(<ListItem />);
  expect(wrapper).toMatchSnapshot();
});
