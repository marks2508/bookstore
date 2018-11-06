import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const cardStyle = {
  width: '192px'
};

const imageStyle = {
  width: 'auto',
  maxHeight: '294px',
  height: '100%',
  padding: '2px'
};


const cardContent = {
  height: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Niramit'
};

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
              <div key={book.id} className="col s2">
                <div className="card" style={cardStyle}>
                  <div className="card-image" >
                    <Link to={`/books/${book.id}`}><img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} style={imageStyle}/></Link>
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
