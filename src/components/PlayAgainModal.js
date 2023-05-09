import React from "react";

const PlayAgainModal = ({ playAgainHandler, message, amountWon }) => {
  return (
    <div className="amountWonMsg">
      <span>
        {message} <span>{amountWon}$</span>
      </span>
      <button onClick={playAgainHandler} className="playAgain">
        Play Again
      </button>
    </div>
  );
};

export default PlayAgainModal;
