const router = require('express').Router();
const books = require('../controllers/booksController');
const auth = require('../controllers/authController');

router.route('/books')
  .get(books.index);

router.route('/books/new')
  .post(books.create);

router.route('/nytimes')
  .get(books.nytIndex);

router.route('/books/:id')
  .get(books.show)
  .put(books.update)
  .delete(books.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*', (req, res) => res.notFound());

module.exports = router;
