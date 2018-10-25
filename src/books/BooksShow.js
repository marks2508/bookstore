import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

class BooksShow extends React.Component {
  state = {
    book: {}
  }


  componentWillMount() {
    Axios
      .get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = () => {
    Axios
      .delete(`/api/books/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Title: {this.state.book.title}</h1>
        <h2>Author: {this.state.book.author}</h2>
        <h3>Year: {this.state.book.year}</h3>
        <h4>Genre: {this.state.book.genre}</h4>
        <Link to={`/books/${this.state.book.id}/edit`}>
          <i className="material-icons">edit</i>
        </Link>
        <BackButton history={this.props.history} />
        <button className="delete-button" onClick={this.deleteBook}><i className="material-icons">delete_forever</i></button>
      </div>
    );
  }
}

export default BooksShow;
