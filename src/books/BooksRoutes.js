import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BooksIndex from './BooksIndex';
import BooksShow from './BooksShow';
import BooksNew from './BooksNew';
import BooksEdit from './BooksEdit';

const BooksRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BooksIndex} />
      <Route path="/books/new" component={BooksNew} />
      <Route path="/books/:id/edit" component={BooksEdit} />
      <Route path="/books/:id" component={BooksShow} />
    </Switch>
  );
};

export default BooksRoutes;
