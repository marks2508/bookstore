import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../lib/Auth';

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

class UsersLibrary extends React.Component {
  state = {
    user: {
      books: []
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/books/${Auth.getPayload().userId}`)
      .then(res => this.setState({user: res.data}, () => console.log('State: ', this.state.user)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.state.user.books.map((book, i) => {
            return (
              <div key={i} className="col s2">
                    <div className="card" style={cardStyle}>
                      <div className="card-image" >
                        <Link to={`/books/${Auth.getPayload().userId}`}><img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} style={imageStyle}/></Link>
                      </div>
                      <div className="card-content" style={cardContent}>
                        <h6>{book.title}</h6>
                        <hr />
                        <p>{book.author}</p>
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

export default UsersLibrary;
