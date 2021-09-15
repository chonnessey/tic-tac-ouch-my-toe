import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function Square(props) {
//   return (
//     <button 
//       className="square" 
//       onClick={props.onBoardClick}
//     >
//       {props.value}
//     </button>
//   ); 
// }

// class Board extends React.Component {

//   renderSquare(i) { // method for Board, calling from Square class
//     return ( 
//       <Square 
//         value={this.props.squares[i]}
//         onBoardClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//         positions: [null]   
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const reference = ['(1,1)', '(2,1)','(3,1)','(1,2)','(2,2)','(3,2)','(1,3)','(2,3)','(3,3)']
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length -1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       stepNumber: history.length,
//       history: history.concat([{
//         squares: squares,
//         positions: reference[i],
//       }]),
//       xIsNext: !this.state.xIsNext,
//     })
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);
//     const latest = history.length-1

//     const moves = history.map((step, move) => {
//       const desc = move ? // if
//         'Go to move #' + move : //true
//         'Go to game start'; //false

//       return (
//         <li key={move}>
//           { (move === latest) 
//             ? <button onClick={() => this.jumpTo(move)}><strong>{desc} {step.positions}</strong></button> 
//             : <button onClick={() => this.jumpTo(move)}>{desc} {step.positions}</button>
//           }
//         </li>
//       )
//     })

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)} />
//         </div>
//         <div className="game-info">
//           <div>
//             {status}
//           </div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);