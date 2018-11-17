import React from 'react';

const about = {
  fontFamily: 'Playfair Display',
  color: 'DarkGrey',
  fontSize: '18px'
};

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col s6">
          <p style={about}>Founded in 1945 BookWorm books is an old fashioned independent bookshop in London. Its beautiful eighteenth century premises is home to an astonishing 30,000 titles, carefully selected by staff with nearly 100 years of bookselling – and reading – between them, making BookWorm books a legend among bibliophiles in London and around the world. We offer a range of services, from our renowned quarterly catalogues, mail order and subscriptions to creating and maintaining libraries, both public and private, wedding lists and working with charities.</p>
        </div>
      </div>
    );
  }
}

export default About;
