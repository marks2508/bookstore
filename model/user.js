const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const bookSchema = mongoose.Schema({
  title: { type: String, required: 'Please specify a title' },
  author: { type: String, required: 'Please specify a author' },
  year: { type: Number, require: 'Please specify a year' },
  genre: { type: String, required: 'Please specify a genre' },
  isbn: { type: String, required: 'Please enter the ISBN number' },
  description: { type: String }
});

bookSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj,json) {
    delete json._id;
    delete json.__v;
  }
});

bookSchema.methodsbelongsTo = function belongsTo(user) {
  return user._id.equals(this.ownedBy.id);
};


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  books: [bookSchema]
});

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
