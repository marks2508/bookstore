import React from 'react';
import { Col } from 'react-bootstrap';

const Product = ({ title, author, genre, image }) => {
  return (
    <Col md={4} sm={6}>
      <img src={image} alt={name} />
      <h4>{title}</h4>
      <p>{author}</p>
      <p>{genre}</p>      
    </Col>
  );
};

export default Product;
