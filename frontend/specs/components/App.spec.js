import React from 'react';

import { render, screen } from '@testing-library/react';

import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../../src/App';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = mount(<App />);

  const text = wrapper.find('a').text();
  expect(text).toEqual('Learn React');
});
