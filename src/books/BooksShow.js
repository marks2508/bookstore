import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

const buttonStyles = {
  display: 'inline-block'
};

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
      <div className="container">
        <div className="row">
          <div className="col s4">
            <img src={`http://covers.openlibrary.org/b/isbn/${this.state.book.isbn}-L.jpg`} />
          </div>
          <div className="col s6">
            <h1>{this.state.book.title}</h1>
            <h2>{this.state.book.author}</h2>
            <h3>{this.state.book.year}</h3>
            <h4>{this.state.book.genre}</h4>
            <Link to={`/books/${this.state.book.id}/edit`}>
              <i className="material-icons">edit</i>
            </Link>
            <BackButton history={this.props.history} />
            <a><i onClick={this.deleteBook} className="material-icons">delete_forever</i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksShow;
