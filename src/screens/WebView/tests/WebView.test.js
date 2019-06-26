import React from 'react';
import renderer from 'react-test-renderer';
import WebView from '../index';

test('WebView snapshot test', () => {
  const wrapper = renderer.create(<WebView />);
  expect(wrapper).toMatchSnapshot();
});
