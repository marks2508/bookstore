const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Book = require('../model/book');

const bookData = [{
  title: 'Dracula',
  author: 'Brah Stoker',
  year: 1897,
  genre: 'Gothic horror',
  isbn: '014143984X'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51AyaDWVYPL._SX313_BO1,204,203,200_.jpg'
},{
  title: 'Heart of Darkness',
  author: 'Joseph Conrad',
  year: 1899,
  genre: 'Physchological fiction',
  isbn: '0141441674'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/41BLYAxh2nL._SX323_BO1,204,203,200_.jpg'
},{
  title: 'The Outsider',
  author: 'Albert Camus',
  year: 1942,
  genre: 'Philosophical fiction',
  isbn: '0141182504'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/41fS4PrK6PL._SX326_BO1,204,203,200_.jpg'
},{
  title: 'One day in the life of Ivan Denisovich',
  author: 'Aleksandr Solzhenitsyn',
  year: 1963,
  genre: 'Historical fiction',
  isbn: '0140020535'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51qUuX4UFuL._SX324_BO1,204,203,200_.jpg'
},{
  title: 'On the road',
  author: 'Jack Kerouac',
  year: 1957,
  genre: 'Travel',
  isbn: '9780141182674'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51jCXlx5amL._SX320_BO1,204,203,200_.jpg'
},{
  title: 'The divine comedy',
  author: 'Dante Alighieri',
  year: 1480,
  genre: 'Poetry',
  isbn: '9781857151831'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51s0pS5CrNL._SX322_BO1,204,203,200_.jpg'
},{
  title: 'The haunting of hill house',
  author: 'Shirley Jackson',
  year: 1889,
  genre: 'Horror',
  isbn: ' 0140071083'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51yb3YLdwnL._SX324_BO1,204,203,200_.jpg'
},{
  title: '1984',
  author: 'George Orwell',
  year: 1949,
  genre: 'Political satire',
  isbn: '9780141187761'
  // image: 'https://images-na.ssl-images-amazon.com/images/I/51k%2BlXZyJ6L._SX322_BO1,204,203,200_.jpg'
},{
  title: 'The catcher in the rye',
  author: 'J.D Salinger',
  year: '1945',
  genre: 'Existenital philosophy',
  isbn: '0241950430'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Book.create(bookData))
  .then(books => console.log(`${books.length} books created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
