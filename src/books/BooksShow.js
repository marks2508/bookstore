import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

const buttonStyles = {
  display: 'inline-block'
};

const detailStyle = {
  fontFamily: 'Playfair Display'
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
          <div className="col s6">
            <img src={`http://covers.openlibrary.org/b/isbn/${this.state.book.isbn}-L.jpg`} />
          </div>
          <div className="col s6">
            <h3 style={detailStyle}>{this.state.book.title}</h3>
            <h5 style={detailStyle}>{this.state.book.author}</h5>
            <p style={detailStyle}>{this.state.book.year}</p>
            <p style={detailStyle}>{this.state.book.genre}</p>
            <Link to={`/books/${this.state.book.id}/edit`}>
              <i className="material-icons" style={buttonStyles}>edit</i>
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
