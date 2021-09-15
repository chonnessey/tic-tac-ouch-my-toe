import React from 'react';
import Square from './Square';
import PropTypes from "prop-types";

function Board(props) {

  function renderSquare(i) { // method for Board, calling from Square class
    return ( 
      <Square 
        value={props.squares[i]}
        onBoardClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.object,
  onClick: PropTypes.func,
}

export default Board;