import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BooksIndex extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    Axios
      .get('/api/books/')
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.books.map(book => {
            return (
              <div key={book.id} className="col 2">
                <div className="card">
                  <div className="card-image">
                    <img src={book.image} />
                  </div>
                  <div className="card-content">
                    <h6>{book.title}</h6>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/books/${book.id}`}>Info on the book</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BooksIndex;
