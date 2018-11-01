import React, { Component } from 'react';
import Axios from 'axios';
import Suggestions from './Suggestions';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  componentWillMount() {
    Axios
      .get('/api/books')
      .then(res => this.setState({results: res.data}))
      .catch(err => console.log(err));
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  }


  render() {
    return (
      <form>
        <input
          placeholder="Search..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
