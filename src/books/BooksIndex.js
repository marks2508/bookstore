import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const cardStyle = {
  width: 'auto',
  maxHeight: '294px',
  height: '100%',
  padding: '2px'
};


const cardContent = {
  height: '10em',
  fontFamily: 'Niramit'
};

class BooksIndex extends React.Component {
  state = {
    books: [],
    list: []
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
              <div key={book.id} className="col s2">
                <div className="card">
                  <div className="card-image" >
                    <img src={book.image} style={cardStyle}/>
                  </div>
                  <div className="card-content" style={cardContent}>
                    <h6>{book.title}</h6>
                    <p>{book.author}</p>
                    <hr />
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
