/* global describe, it, beforeEach, before, after, afterEach */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import BooksNew from '../../../src/books/BooksNew';

const bookData = [{
  id: 1,
  title: 'The day of the Jackal',
  author: 'Fredrick Forsyth',
  year: 1962,
  genre: 'crime'
}];

describe('BooksNew test', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: bookData});
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });
  after(done => {
    Axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <BooksNew />
      </MemoryRouter>
    );
    done();
  });
  
  it('should render without throwing an error', () => {
    expect(shallow(<BooksNew />).find('form.NewBook').exists()).toBe(true);
  });
});
