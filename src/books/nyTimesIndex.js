import React from 'react';
import Axios from 'axios';

const cardStyle = {
  height: 'auto',
  width: '300px'
};

const cardContent = {
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Playfair Display'
};

const cardImageStyle = {
  width: '100%',
  height: '100%',
  padding: '20px'
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
  height: 'auto',
  display: 'block'
};

const imageStyle = {
  height: 'auto'
};

const bookContainer = {
  height: '300px',
  width: '900px'
};

const titleText = {
  fontFamily: 'Playfair Display'
};

class NyTimesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      details: [],
      date: new Date().toLocaleDateString()
    };
  }

  componentDidMount() {
    Axios
      .get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=e997f05814364df0abe920851e28e713')
      .then(res => {
        console.log('Data: ', res.data.results);
        this.setState({ books: res.data.results });
        console.log('State: ', this.state.books[0].isbns[0].isbn10);
      })
      .catch(err => console.log('Error: ', err));
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <h5 style={titleText} className="col s12">The top 20 New York Times Bestsellers</h5>
        <p style={titleText} className="col 12">as of {this.state.date}</p>
        <div className="row">
          {this.state.books.map((book, i) => {
            return (
              <div key={i}>
                {book.isbns.map((isbn, i) => (
                  <div key={i} className="col s12">
                    <ul style={listStyle}>
                      <li>
                        <div style={bookContainer}>
                          <div style={bookPreview} className="book-preview">
                            <img style={imageStyle} src={`http://covers.openlibrary.org/b/isbn/${isbn.isbn13}-M.jpg`}/>
                          </div>
                          <div style={previewSummary}>
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                            <p>{isbn.isbn10}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default NyTimesIndex;
