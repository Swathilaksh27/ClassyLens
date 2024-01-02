// AcceptButton.js
import React from 'react';

const AcceptButton = ({ onClick }) => {
  return (
    <button className="accept-button" onClick={onClick}>
      Accept
    </button>
  );
};

export default AcceptButton;
