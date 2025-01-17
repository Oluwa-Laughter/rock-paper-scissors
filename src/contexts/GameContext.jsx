import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const GameContext = createContext();

const initialState = {
  played: "start",
  score: 0,
  playerChoice: null,
  computerChoice: null,
  winner: null,
  isRuleOpened: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setScore": {
      const newScore = state.score + action.payload;
      const updatedScore = newScore < 0 ? 0 : newScore;
      return {
        ...state,
        score: updatedScore,
      };
    }
    case "setPlayerChoice":
      return { ...state, playerChoice: action.payload };
    case "setComputerChoice":
      return { ...state, computerChoice: action.payload };
    case "setPlayed":
      return { ...state, played: action.payload };
    case "setWinner":
      return { ...state, winner: action.payload };
    case "playAgain":
      return { ...initialState, score: state.score };
    case "setIsRuleOpened":
      return { ...state, isRuleOpened: action.payload };
    case "resetGame":
      return { ...initialState, score: state.score };
    default:
      throw new Error("Invalid action type");
  }
}
function GameProvider({ children }) {
  const [
    { score, playerChoice, played, computerChoice, winner, isRuleOpened },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      dispatch({ type: "setScore", payload: parseInt(savedScore) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <GameContext.Provider
      value={{
        score,
        playerChoice,
        played,
        computerChoice,
        winner,
        isRuleOpened,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error("useGame is used outside of its provider");

  return context;
}

export { GameProvider, useGame };
