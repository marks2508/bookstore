import React from 'react';
import Axios from 'axios';


const cardContentStyle = {
  height: '290px',
  width: 'auto'
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
        console.log('State: ', this.state.books);
      })
      .catch(err => console.log('Error: ', err));
  }

  render() {

    return (
      <div className="container">
        <h1>The top 20 New York Times Bestsellers</h1>
        <h3>as of {this.state.date}</h3>
        <div className="row">
          {this.state.books.map(book => {
            return (
              <div key={book.Number} className="col s3">
                <div className="card">
                  <div style={cardContentStyle} className="card-content">
                    <br />
                    <p>{book.title}</p>
                    <hr />
                    <p>{book.author}</p>
                    <p>{book.isbns.isbn13}</p>
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
