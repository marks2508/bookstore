import React from 'react';
import Axios from 'axios';

import BooksForm from './BooksForm';

class BooksNew extends React.Component {
  state = {
    book: {
      title: '',
      author: '',
      year: '',
      genre: '',
      isbn: '',
      image: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const book = Object.assign({}, this.state.book, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ book, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.book);
    Axios
      .post('/api/books', this.state.book)
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <BooksForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        book={this.state.book}
        errors={this.state.errors}
      />
    );
  }
}

export default BooksNew;
