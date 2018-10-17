/* globals api, expect, it, describe, afterEach, beforeEach */
require('../spec_helper');

const Book = require('../../model/book');

// Index Route
describe('GET /api/books', () => {
  beforeEach(done => {
    Book
      .create({
        title: 'The hare with amber eyes',
        author: 'Edmund de Waal',
        year: 2010,
        genre: 'Biography'
      })
      .then(() => done())
      .catch(done);
  });

  it('should return a 200 response', done => {
    api
      .get('/api/books')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return an array of books', done => {
    api
      .get('/api/books')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of book objects with specific properties', done => {
    api
      .get('/api/books')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body)
          .to.be.an('array')
          .and.have.property(0)
          .and.have.all.keys([
            'id',
            'title',
            'author',
            'year',
            'genre'
          ]);
        done();
      });
  });
});

// Post Route
describe('POST /api/books', () => {
  it('should return a 201 response', done => {
    api
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({
        title: 'The sugar barons',
        author: 'Matthew Parker',
        year: 2005,
        genre: 'Historical Non-Fiction'
      })
      .expect(201, done);
  });

  it('should return created book data in response body', done => {
    api
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({
        title: 'The sugar barons',
        author: 'Matthew Parker',
        year: 2005,
        genre: 'Historical Non-Fiction'
      })
      .end((err, res) => {
        expect(res.body.book)
          .to.be.an('object')
          .and.has.keys([
            'id',
            'title',
            'author',
            'year',
            'genre'
          ]);
        done();
      });
  });

  it('should return a 500 response if required field is left blank', done => {
    api
      .post('/api/books')
      .set('Accept', 'application.json')
      .send({
        title: 'For whom the bell tolls',
        author: '',
        year: 1963,
        genre: 'fition'
      })
      .expect(500, done);
  });
});

// Show Route
describe('GET /api/books/:id', () => {
  let testBook = null;

  beforeEach(done => {
    Book.create({
      title: 'The zoo',
      author: 'Christopher Wilson',
      year: 2017,
      genre: 'Satire'
    })
      .then(bookData => {
        testBook = bookData;
        done();
      })
      .catch(done);
  });

  it('should return a 200 response', done => {
    api
      .get(`/api/books/${testBook.id}`)
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return a 404 response for wrong book id', done => {
    api
      .get('/api/books/5bc4527fe6b2cc21799999zz')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it('should return book data in response body', done => {
    api
      .post('/api/books')
      .set('Accept', 'application/json')
      .send({
        title: 'The zoo',
        author: 'Christopher Wilson',
        year: 2017,
        genre: 'Satire'
      })
      .end((err, res) => {
        expect(res.body)
          .to.be.an('object');
        done();
      });
  });


});

// Delete Route
describe('DELETE /api/books/:id', () => {
  let testBook = null;
  beforeEach(done => {
    Book.create({
      title: 'The zoo',
      author: 'Christopher Wilson',
      year: 2017,
      genre: 'Satire'
    })
      .then(bookData => {
        testBook = bookData;
        done();
      })
      .catch(done);
  });
  it('should return a 204 response', done => {
    api
      .delete(`/api/books/${testBook.id}`)
      .set('Accept', 'application/json')
      .expect(204, done);
  });
});

// Put Route
describe('PUT /api/books', () => {
  let testBook = null;
  beforeEach(done => {
    Book.create({
      title: 'The zoo',
      author: 'Christopher Wilson',
      year: 2017,
      genre: 'Satire'
    })
      .then(bookData => {
        testBook = bookData;
        done();
      })
      .catch(done);
  });
  it('should return a 201 response', done => {
    api
      .put(`/api/books/${testBook.id}`)
      .set('Accept', 'application.json')
      .send({
        title: 'The crazy zoo',
        author: 'Christopher the bear Wilson',
        year: 2020,
        genre: 'Goofball comedy'
      })
      .expect(200, done);
  });
});
