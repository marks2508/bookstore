/* global describe, it, beforeEach, before, after, afterEach */

import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import BooksEdit from '../../../src/books/BooksEdit';

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

describe('BooksEdit test', () => {
  // let wrapper = null;
  // let promise = null;
  //
  // before(done => {
  //   promise = Promise.resolve({ data: bookData });
  //   sinon.stub(Axios, 'get').returns(promise);
  //   done();
  // });
  //
  // after(done => {
  //   Axios.get.restore();
  //   done();
  // });
  //
  // beforeEach(done => {
  //   wrapper = mount(
  //     <MemoryRouter>
  //       <BooksEdit />
  //     </MemoryRouter>
  //   );
  //   done();
  // });

  it('should test existance', done => {
    const wrapper = shallow(<BooksEdit />);
    expect(wrapper.exists()).toBe(true);
    done();
  });


});
