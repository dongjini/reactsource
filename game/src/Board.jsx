import React from "react";
import Square from "./Square";
import { useState } from "react";

// 승자 계산
function calcWinner(squares) {
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
}

const Board = ({ xIsNext, squares, onPlay }) => {
  // 승자 확인
  const winner = calcWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  const handleClick = (idx) => {
    // 이미 값이 있는 경우에는 돌아가기
    if (squares[idx] || calcWinner(squares)) return;

    // 원본 배열 복사
    const copySquares = squares.slice();

    if (xIsNext) {
      copySquares[idx] = "X";
      // setXIsNext(false);
    } else {
      copySquares[idx] = "O";
      // setXIsNext(true);
    }
    // setSquares(copySquares);
    onPlay(copySquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square className="square" value={squares[0]} handleClick={() => handleClick(0)} />
        <Square className="square" value={squares[1]} handleClick={() => handleClick(1)} />
        <Square className="square" value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square className="square" value={squares[3]} handleClick={() => handleClick(3)} />
        <Square className="square" value={squares[4]} handleClick={() => handleClick(4)} />
        <Square className="square" value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square className="square" value={squares[6]} handleClick={() => handleClick(6)} />
        <Square className="square" value={squares[7]} handleClick={() => handleClick(7)} />
        <Square className="square" value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
