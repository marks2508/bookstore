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

  it('should populate the form', done => {
    const props = {
      book: {
        title: 'title',
        author: 'author',
        year: Number,
        genre: 'genre'
      },
      errors: {}
    };
    const wrapper = shallow(<BooksForm {...props} />);
    expect(wrapper.find({ value: 'title' }).length).to.equal(1);
    expect(wrapper.find({ value: 'author' }).length).to.equal(1);
    expect(wrapper.find({ value: Number }).length).to.equal(1);
    expect(wrapper.find({ value: 'genre'}).length).to.equal(1);

    done();
  });

  it('should correctly display errors', done => {
    const props = {
      book: {
        title: '',
        author: '',
        year: '',
        genre: ''
      },
      errors: {
        title: 'Title is required',
        author: 'Author is required',
        year: 'Year is required',
        genre: 'Genre is required'
      }
    };
    const wrapper = shallow(<BooksForm {...props} />);
    expect(wrapper.find('.error').length).to.equal(4);
    done();
  });
});
