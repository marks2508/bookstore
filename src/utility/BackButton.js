import React from 'react';

const BackButton = ({ history }) => {
  return (
    <div>
      <a><i onClick={history.goBack} className="material-icons">arrow_back</i></a>
    </div>
  );
};

export default BackButton;
