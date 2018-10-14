const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Book = require('../model/book');

const bookData = [{
  title: 'Book1',
  author: 'Author 1',
  year: 1984,
  genre: 'fiction'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
