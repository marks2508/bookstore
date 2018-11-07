import React from 'react';

const buttonStyles = {

};

const BackButton = ({ history }) => {
  return (
    <div>
      <a><i style={buttonStyles} onClick={history.goBack} className="material-icons">arrow_back</i></a>
    </div>
  );
};

export default BackButton;
