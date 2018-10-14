import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage';

class App extends React.Component {
  render() {
    return (
      <Homepage />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
