import React from 'react';

const BackButton = ({ history }) => {
  return (
    <div>
      <button onClick={history.goBack} className="main-button">
        <i className="material-icons">arrow_back</i></button>
    </div>
  );
};

export default BackButton;
