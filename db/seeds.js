const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Book = require('../model/book');

const bookData = [{
  title: 'Dracula',
  author: 'Brah Stoker',
  year: 1897,
  genre: 'Gothic horror'
},{
  title: 'Heart of Darkness',
  author: 'Joseph Conrad',
  year: 1899,
  genre: 'Physchological fiction'
},{
  title: 'The Outsider',
  author: 'Albert Camus',
  year: 1942,
  genre: 'Philosophical fiction'
},{
  title: 'One day in the life of Ivan Denisovich',
  author: 'Aleksandr Solzhenitsyn',
  year: 1963,
  genre: 'Historical fiction'
},{
  title: 'On the road',
  author: 'Jack Kerouac',
  year: 1957,
  genre: 'Travel'
},{
  title: 'The elegance of the hedgehog',
  author: 'Muriel Barbery',
  year: 2008,
  genre: 'Comedy'
},{
  title: 'The haunted hotel',
  author: 'Wilkie Collins',
  year: 1889,
  genre: 'Horror'
},{
  title: 'The gentleman in Moscow',
  author: 'Amor Towles',
  year: 2016,
  genre: 'Comedy'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
