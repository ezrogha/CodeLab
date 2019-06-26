import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import List, { GET_DEVS } from '../index';

const mocks = [
  {
    request: {
      query: GET_DEVS,
      variables: {
        query: 'location:lagos language:javascript',
      },
    },
    result: {
      data: {
        search: {
          edges: [],
        },
      },
    },
  },
];

test('List renders without error', () => {
  const wrapper = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <List />
    </MockedProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
