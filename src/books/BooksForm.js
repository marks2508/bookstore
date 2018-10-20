import React from 'react';

import BackButton from '../utility/BackButton';

function BooksForm({ history, handleSubmit, handleChange, book, errors }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="NewBook">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error"><small>{errors.title}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
          {errors.author && <p className="error"><small>{errors.author}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={book.year}
            onChange={handleChange}
          />
          {errors.year && <p className="error"><small>{errors.year}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
          {errors.genre && <p className="error"><small>{errors.genre}</small></p>}
        </div>
        <button className="btn waves-effect waves-light" disabled={formInvalid}><i className="material-icons right">send</i>
        </button>
        <div>
          <BackButton history={history} />
        </div>
      </form>
    </div>
  );
}

export default BooksForm;
