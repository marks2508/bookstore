import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ handleSort, handleSearch }) => {
  return (
    <Row>
      <Col md={2}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="title|asc">Title (A - Z)</option>
            <option value="title|desc">Title (Z - A)</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
