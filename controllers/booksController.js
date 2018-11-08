const Book = require('../model/user');
const NytBooks = require('../model/NytBooks');

function getBooks(req, res) {
  Book
    .find()
    .exec()
    .then(books => res.status(200).json(books))
    .catch(err => res.status(500).json(err));
}

function getNytBooks(req, res) {
  NytBooks
    .find()
    .exec()
    .then(titles => res.status(200).json(titles))
    .catch(err => res.status(500).json(err));
}

function postBook(req, res) {
  Book
    .create(req.body)
    .then(book => res.status(201).json({ message: 'Book successfully added!', book }))
    .catch(err => res.status(500).json(err));
}

function getBook(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) {
        return res.status(404).json({ message: 'Could not find a book with that id', book });
      }
      return res.status(200).json(book);
    })
    .catch(err => res.status(500).json(err));
}

function deleteBook(req, res) {
  Book
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.status(204).json({ message: 'Book successfully deleted!' }))
    .catch(err => res.status(500).json(err));
}

function updateBook(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      book = Object.assign(book, req.body);
      return book.save();
    })
    .then(book => res.json(book))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  index: getBooks,
  nytIndex: getNytBooks,
  create: postBook,
  show: getBook,
  delete: deleteBook,
  update: updateBook
};
