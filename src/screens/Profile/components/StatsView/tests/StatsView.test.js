import React from 'react';
import renderer from 'react-test-renderer';
import StatsView from '../index';

test('Profile snapshot test', () => {
  const wrapper = renderer.create(<StatsView />);
  expect(wrapper).toMatchSnapshot();
});
