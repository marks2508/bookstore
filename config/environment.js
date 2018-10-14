const port = process.env.PORT || 8080;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/bookstore';
const secret = process.env.SECRET || 'f^dh@CVis--[P';

module.exports = {
  port,
  dbURI,
  secret
};
