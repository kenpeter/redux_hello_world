import React, { PropTypes } from 'react';

// because it is const, so just pass from parent
// hello is a component with button click
const Hi = ({ onClick, message }) => {
  return (
    <div>
      <h3>message: { message }</h3>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

Hi.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hi;
