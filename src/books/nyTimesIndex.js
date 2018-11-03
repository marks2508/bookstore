import React from 'react';
import Axios from 'axios';

const cardContent = {
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Niramit'
};

const cardStyle = {
  width: '100%',
  height: '294px',
  padding: '2px'
};


class NyTimesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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
        <h1>The top 20 New York Times Bestsellers</h1>
        <h3>as of {this.state.date}</h3>
        <div className="row">
          {this.state.books.map((book, i) => {
            return (
              <div key={i} className="col s3">
                <div className="card">
                  {book.isbns.map((isbn, i) => (
                    <div key={i} className="card-image">
                      <img src={`http://covers.openlibrary.org/b/isbn/${isbn.isbn10}-M.jpg`} style={cardStyle}/>
                    </div>
                  ))}
                  <div className="card-content" style={cardContent}>
                    <br />
                    <p>{book.title}</p>
                    <hr />
                    <p>{book.author}</p>
                    <hr />
                    <a href={'https://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=' + book.title}>Buy the book</a>
                    <hr />
                    <p className="published">Published by: {book.publisher}</p>
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

export default NyTimesIndex;
