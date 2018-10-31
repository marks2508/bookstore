const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: 'Please specify a title' },
    author: { type: String, required: 'Please specify a author' },
    year: { type: Number, require: 'Please specify a year' },
    genre: { type: String, required: 'Please specify a genre' },
    isbn: { type: String, required: 'Please enter the ISBN number' }
  });

BookSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj,json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('book', BookSchema);
