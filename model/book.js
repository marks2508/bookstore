const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, require: true },
    genre: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

BookSchema.pre('save', next => {
  now = new Date();
  if (!createdAt) {
    this.createdAt = now;
  }
  next();
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
