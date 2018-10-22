import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BooksRoutes from './books/BooksRoutes';
import Login from './auth/login';
import Register from './auth/register';
import Navbar from './utility/Navbar';

import './scss/style.scss';

const homepage = {
  textAlign: 'center'
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />  
          </header>
          <main>
            <BooksRoutes />
          </main>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
