const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Book = require('../model/book');

const bookData = [{
  title: 'Dracula',
  author: 'Brah Stoker',
  year: 1897,
  genre: 'Gothic horror',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51AyaDWVYPL._SX313_BO1,204,203,200_.jpg'
},{
  title: 'Heart of Darkness',
  author: 'Joseph Conrad',
  year: 1899,
  genre: 'Physchological fiction',
  image: 'https://images-na.ssl-images-amazon.com/images/I/41BLYAxh2nL._SX323_BO1,204,203,200_.jpg'
},{
  title: 'The Outsider',
  author: 'Albert Camus',
  year: 1942,
  genre: 'Philosophical fiction',
  image: 'https://images-na.ssl-images-amazon.com/images/I/41fS4PrK6PL._SX326_BO1,204,203,200_.jpg'
},{
  title: 'One day in the life of Ivan Denisovich',
  author: 'Aleksandr Solzhenitsyn',
  year: 1963,
  genre: 'Historical fiction',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51qUuX4UFuL._SX324_BO1,204,203,200_.jpg'
},{
  title: 'On the road',
  author: 'Jack Kerouac',
  year: 1957,
  genre: 'Travel',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51jCXlx5amL._SX320_BO1,204,203,200_.jpg'
},{
  title: 'The elegance of the hedgehog',
  author: 'Muriel Barbery',
  year: 2008,
  genre: 'Comedy',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51s0pS5CrNL._SX322_BO1,204,203,200_.jpg'
},{
  title: 'The haunted hotel',
  author: 'Wilkie Collins',
  year: 1889,
  genre: 'Horror',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51yb3YLdwnL._SX324_BO1,204,203,200_.jpg'
},{
  title: 'The gentleman in Moscow',
  author: 'Amor Towles',
  year: 2016,
  genre: 'Comedy',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51k%2BlXZyJ6L._SX322_BO1,204,203,200_.jpg'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
