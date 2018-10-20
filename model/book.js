const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: 'Please specify a title' },
    author: { type: String, required: 'Please specify a author' },
    year: { type: Number, require: 'Please specify a year' },
    genre: { type: String, required: 'Please specify a genre' },
    image: {type: String, required: 'Please supply an image'}
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
