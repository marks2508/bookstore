import React from 'react';
import Axios from 'axios';
import Link from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import Product from './Product';
import SearchBar from './SearchBar';
import _ from 'lodash';

const cardStyle = {
  width: 'auto',
  maxHeight: '294px',
  height: '100%',
  padding: '2px'
};


const cardContent = {
  height: '10em',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Niramit'
};

class ProductGrid extends React.Component {

  state = {
    books: [],
    sortBy: 'title',
    sortDirection: 'desc',
    query: ''
  };

  componentWillMount() {
    Axios
      .get('/api/books')
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  }

  handleSort = e => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection});
  }

  handleSearch = e => {
    this.setState({query: e.target.value}, () => console.log(this.state));
  }

  sortingAndFiltering = () => {
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedProducts = _.sortBy(this.state.books, [sortBy], [sortDirection]);
    const products = _.filter(orderedProducts, (book) => regex.test([book.title, book.author]));
    return products;
  }

  render() {
    const products = this.sortingAndFiltering();
    return (
      <Grid>
        <SearchBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
        />
        <div className="row">
          {products.map((product, i ) => {
            return (
              <div key={i} className="col s3">
                <div className="card">
                  <div className="card-image" >
                    <img src={`http://covers.openlibrary.org/b/isbn/${product.isbn}-L.jpg`} style={cardStyle}/>
                  </div>
                  <div className="card-content" style={cardContent}>
                    <h6>{product.title}</h6>
                    <p>{product.author}</p>
                    <hr />
                    <p>{product.genre}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default ProductGrid;
