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
  fontFamily: 'Playfair Display'
};

class BooksIndex extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    Axios
      .get('/api/books/')
      .then(res => this.setState({books: res.data}))
      .then(console.log('try' ,this.state.books))
      .catch(err => console.log(err));
  }

  render() {
    console.log('State: ', this.state.books);
    return (
      <div>
        <div className="row">
          {this.state.books.map((books, i) => {
            return (
              <div key={i} className="col s2">
                <div className="card" style={cardStyle}>
                  <div className="card-image" >
                    <Link to={`/books/${books.id}`}><img src={`http://covers.openlibrary.org/b/isbn/${books.isbn}-L.jpg`} style={imageStyle}/></Link>
                  </div>
                  <div className="card-content" style={cardContent}>
                    <h6>{books.title}</h6>
                    <hr />
                    <p>{books.author}</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/books/${books._id}`}>Info on the book</Link>
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
