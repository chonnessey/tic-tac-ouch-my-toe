import React from 'react';
// import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onBoardClick}
    >
      {props.value}
    </button>
  ); 
}

// Square.PropTypes

export default Square;