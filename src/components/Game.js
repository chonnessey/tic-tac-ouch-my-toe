import React from 'react'
import Board from './Board'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // history: [{
      //   squares: Array(9).fill(null),
      //   positions: [null]   
      // }],
      // stepNumber: 0,
      // xIsNext: true,
    };
  }

  handleClick(i) {
    const reference = ['(1,1)', '(2,1)','(3,1)','(1,2)','(2,2)','(3,2)','(1,3)','(2,3)','(3,3)']
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length-1];
    console.log("history",history);
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_TURN",
      step: history.length
    }
    dispatch(action);
    const action2 = {
      type: "ADD_MOVE",
      history: history,
      squares: squares,
      positions: reference[i],
    }
    dispatch(action2);
    const action3 = {
      type: "ADD_STEP",
      stepNumber: history.length,
    }
    dispatch(action3);
  }

  jumpTo(step) {
    const { dispatch } = this.props;
    
    const action = {
      type: "ADD_STEP",
      stepNumber: step,
    }

    const action2 = {
      type: "TOGGLE_TURN",
      step: step
    }
    dispatch(action);
    dispatch(action2);

    console.log(this.props.stepNumber);
    console.log(step)
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const latest = history.length-1

    const moves = history.map((step, move) => {
      const desc = move ? // if
        'Go to move #' + move : //true
        'Go to game start'; //false

      return (
        <li key={move}>
          { (move === latest) 
            ? <button onClick={() => this.jumpTo(move)}><strong>{desc} {step.positions}</strong></button> 
            : <button onClick={() => this.jumpTo(move)}>{desc} {step.positions}</button>
          }
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>
            {status}
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const mapStateToProps = state => { 
  return {
    xIsNext: state.xIsNext,
    history: state.history,
    stepNumber: state.stepNumber,
  }
}

Game.propTypes = {
  xIsNext: PropTypes.bool,
  history: PropTypes.array,
  stepNumber: PropTypes.number,
}

Game = connect(mapStateToProps)(Game);

export default Game;