/* global describe, it, beforeEach, before, after, afterEach */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import BooksIndex from '../../../src/books/BooksIndex';

const bookData = [{
  id: 1,
  title: 'The day of the Jackal',
  author: 'Fredrick Forsyth',
  year: 1962,
  genre: 'crime'
},{
  id: 2,
  title: 'Strangers',
  author: 'Jeroski Lebowksi',
  year: 1923,
  genre: 'mystery'
}];

describe('BooksIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: bookData });
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
        <BooksIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should display book items', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.books').length).to.equal(2);
      done();
    });
  });

  it('should display links to show pages', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.books a').length).to.equal(2);
      expect(wrapper.find({ href: '/books/1' }).length).to.eq(1);
      expect(wrapper.find({ href: '/books/2' }).length).to.eq(1);
      done();
    });
  });

});
