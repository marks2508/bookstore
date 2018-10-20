/* global describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BrowserHistory } from 'react-router';
import BackButton from '../../../src/utility/BackButton';

describe('Backbutton test', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<BackButton />).find('button.main-button').exists()).toBe(true);
  });
});
