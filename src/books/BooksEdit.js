import React from 'react';
import Axios from 'axios';

import BooksForm from './BooksForm';

class BooksEdit extends React.Component {
  state = {
    book: {
      title: '',
      author: '',
      year: '',
      genre: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const book = Object.assign({}, this.state.book, { [name]: value });
    this.setState({ book });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/books/${this.props.match.params.id}`, this.state.book)
      .then(res => this.props.history.push(`/books/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BooksForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        book={this.state.book}
      />
    );
  }
}

export default BooksEdit;
