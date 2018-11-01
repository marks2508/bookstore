import React from 'react';
import Axios from 'axios';
import { Grid, Row } from 'react-bootstrap';
import Product from './Product';
import SearchBar from './SearchBar';
import _ from 'lodash';

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
        <Row>
          {products.map((product, i ) => <Product key={i} {...product} />)}
        </Row>
      </Grid>
    );
  }
}

export default ProductGrid;
