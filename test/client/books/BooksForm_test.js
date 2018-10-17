/* global describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BooksForm from '../../../src/books/BooksForm';

describe('BooksForm test', () => {
  it('should render four input fields', done => {
    const props = {
      book: {
        title: '',
        author: '',
        year: '',
        genre: ''
      },
      errors: {}
    };
    const wrapper = shallow(<BooksForm {...props} />);
    expect(wrapper.find('input').length).to.equal(4);
    done();
  });
});
