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
        <h1>Welcome to the amazing bookstore!</h1>
        <Link to="/books/new" className="add book"><i className="btn-floating btn-large waves-effect waves-light red">add</i>Add a new book</Link>
        {this.state.books.map(book => {
          return(
            <div key={book.id} className="books">
              <Link to={`/books/${book.id}`}>
                <h1>Title: {book.title}</h1>
              </Link>
              <h2>Author: {book.author}</h2>
              <h3>Genre: {book.genre}</h3>
              <h4>Year: {book.year}</h4>
            </div>
          );
        })}
      </div>

    );
  }
}

export default BooksIndex;
