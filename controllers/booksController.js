const Book = require('../model/book');

function getBooks(req, res, next) {
  Book
    .find()
    .exec()
    .then(books => res.json(books))
    .catch(next);
}

function postBook(req, res) {
  var newBook = new Book(req.body);
  newBook.save((err, book) => {
    if(err) {
      res.send(err);
    } else {
      res.json({ message: 'Book successfully added!', book });
    }
  });
}

function getBook(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then((book) => {
      if(!book) return res.notFound();
      res.json(book);
    })
    .catch(next);
}

function deleteBook(req, res) {
  Book.remove({ _id: req.params.id}, (err, result) => {
    res.json({ message: 'Book successfully deleted!', result });
  });
}

function updateBook(req, res) {
  Book.findById({ _id: req.params.id}, (err, book) => {
    if(err) res.send(err);
    Object.assign(book, req.body).save((err, book) => {
      if(err) res.send(err);
      res.json({ message: 'Book updated!', book});
    });
  });
}

module.exports = {
  index: getBooks,
  create: postBook,
  show: getBook,
  delete: deleteBook,
  update: updateBook
};
