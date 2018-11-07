import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

const buttonStyles = {
  padding: '0px'
};

const detailStyle = {
  fontFamily: 'Playfair Display'
};

const detailStyleItalic = {
  fontFamily: 'Playfair Display',
  fontStyle: 'italic',
  color: '#606060'
};
const detailStyleTitle = {
  fontFamily: 'Playfair Display',
  fontStyle: 'bold',
  color: '#767676'
};

const buttons = {

};

const listStyle = {
  backgroundColor: '#f5f5f5',
  clear: 'both',
  content: '',
  display: 'table',
  listStyle: 'none',
  padding: 0,
  margin: 'auto auto 4em'
};

const bookPreview = {
  width: '14em',
  textAlign: 'center',
  float: 'left',
  padding: '0 1em',
  position: 'relative',
  zIndex: '1'
};

const previewSummary = {
  paddingLeft: '15em',
  position: 'relative',
  height: 'auto'
};

const imageStyle = {
  height: 'auto'
};

const bookContainer = {
  height: 'auto',
  width: '900px',
  margin: '0 auto'
};

const titleText = {
  fontFamily: 'Playfair Display'
};

const descText = {
  fontFamily: 'Playfair Display'
}

const buyBookStyle = {
  backgroundColor: 'mediumblue',
  marginTop: '70px',
  width: '150px',
  height: '40px',
  color: 'white',
  fontFamily: 'Playfair Display',
  fontStyle: 'bold',
  padding: '10px'
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

          </div>
          <div className="col s12">
            <div style={listStyle}>
              <div style={bookContainer}>
                <div style={bookPreview}>
                  <img style={imageStyle} src={`http://covers.openlibrary.org/b/isbn/${this.state.book.isbn}-M.jpg`} />
                  <hr />
                  <ul className={buttons}>
                    <li><Link to={`/books/${this.state.book.id}/edit`}>
                      <i className="material-icons" style={buttonStyles}>edit</i>
                    </Link></li>
                    <li><a><i onClick={this.deleteBook} style={buttonStyles} className="material-icons">delete_forever</i></a></li>
                    <li><BackButton style={buttonStyles} history={this.props.history} /></li>
                  </ul>
                  <hr />
                  <button style={buyBookStyle}>Buy book</button>
                </div>
                <div style={previewSummary}>
                  <h3 style={detailStyleTitle}>{this.state.book.title}</h3>
                  <h5 style={detailStyleItalic}>{this.state.book.author}</h5>
                  <p style={detailStyle}>{this.state.book.year}</p>
                  <p style={descText}>{this.state.book.description}</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksShow;
