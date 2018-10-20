/* globals api, expect, before, it, describe, afterEach, beforeEach */
require('../spec_helper');
const { dbURI } = require('../../config/environment');
const mongoose = require('mongoose');
const Book = require('../../model/book');

const bookData = [{
  title: 'Dracula',
  author: 'Brah Stoker',
  year: 1897,
  genre: 'Gothic horror'
}];
//Create a new collection called 'Name'
describe('Database Tests', function() {
//Before starting the test, create a sandboxed database connection
//Once a connection is established invoke done()
  before(function (done) {
    mongoose
      .connect(dbURI, { useMongoClient: true })
      .then(db => db.dropDatabase())
      .then(() => Book.create(bookData))
      .then(books => console.log(`${books.length} books created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close());
    done();
  });
  it('should connect to the db', done => {
    mongoose
      .connect(dbURI, { useMongoClient: true });
    done();
  });
  it('should then drop the database', done => {
    mongoose
      .connect(dbURI, { useMongoClient: true })
      .then(db => db.dropDatabase());
    done();
  });

});
