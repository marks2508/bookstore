import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import BooksRoutes from './books/BooksRoutes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1><Link to="/">Bookstore</Link></h1>
            <h2>For the bookworms of this world</h2>
          </header>
          <main>
            <BooksRoutes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
