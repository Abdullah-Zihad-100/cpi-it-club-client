import { useEffect, useState } from "react";
import bg from "../assets/bgImg.png";

const calculateWinner = (board) => {
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
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const GameSec = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  // Click the Target Game
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(true);

  useEffect(() => {
    const moveTarget = () => {
      const top = Math.random() * 80 + "%";
      const left = Math.random() * 80 + "%";
      setPosition({ top, left });
    };
    const interval = setInterval(moveTarget, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isGameActive) return;
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [isGameActive]);

  return (
    <div
      className="min-h-screen w-full relative text-white px-4 pt-36 pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-lg z-0"></div>

      {/* Tic Tac Toe */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold drop-shadow-lg">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-2 w-72">
          {board.map((cell, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              className="w-24 h-24 text-3xl font-bold bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              {cell}
            </button>
          ))}
        </div>
        <div className="text-lg">
          {winner ? (
            <p className="text-green-300 font-semibold">🎉 {winner} wins!</p>
          ) : board.every(Boolean) ? (
            <p className="text-yellow-300 font-semibold">😮 It's a draw!</p>
          ) : (
            <p className="text-blue-200">Turn: {isXTurn ? "X" : "O"}</p>
          )}
        </div>
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer"
        >
          Reset Game
        </button>
      </div>

      {/* Click the Target Game */}
      <div className="relative z-10 mt-20">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-lg">
          Click the Target
        </h1>
        <div className="relative w-full h-[400px] bg-white/10 rounded-2xl border border-white/20 overflow-hidden flex items-center justify-center">
          <h2 className="absolute top-4 left-4 text-lg font-semibold bg-blue-600 px-4 py-1 rounded-full">
            Score: {score}
          </h2>
          <h2 className="absolute top-4 right-4 text-lg font-semibold bg-pink-600 px-4 py-1 rounded-full">
            Time: {timeLeft}s
          </h2>

          {isGameActive ? (
            <button
              onClick={() => setScore(score + 1)}
              style={{ top: position.top, left: position.left }}
              className="absolute sm:w-12 w-6 h-6 sm:h-12 bg-green-400 hover:bg-green-500 rounded-full transition-all duration-150 shadow-lg"
            />
          ) : (
            <p className="text-white text-xl font-semibold">
              ⏰ Time’s up! Final Score: {score}
            </p>
          )}

          <button
            onClick={() => {
              setScore(0);
              setTimeLeft(30);
              setIsGameActive(true);
            }}
            className="absolute bottom-4 px-4 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameSec;
