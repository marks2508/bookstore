import React from 'react';
import productData from './data';
import { Grid, Row } from 'react-bootstrap';
import Product from './Product';
import SearchBar from './SearchBar';
import _ from 'lodash';

class ProductGrid extends React.Component {

  state = {
    products: productData,
    sortBy: 'title',
    sortDirection: 'desc',
    query: ''
  };

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
    const orderedProducts = _.sortBy(this.state.products, [sortBy], [sortDirection]);
    const products = _.filter(orderedProducts, (product) => regex.test([product.title, product.author]));
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
