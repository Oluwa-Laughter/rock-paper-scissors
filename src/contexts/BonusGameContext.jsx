import { createContext, useContext, useEffect, useReducer } from "react";

const BonusContext = createContext();

const initialState = {
  played: "start",
  score: 0,
  winner: null,
  playerChoice: null,
  computerChoice: null,
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

function BonusProvider({ children }) {
  const [
    { played, isRuleOpened, playerChoice, computerChoice, winner, score },
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
    <BonusContext.Provider
      value={{
        played,
        isRuleOpened,
        playerChoice,
        computerChoice,
        winner,
        score,
        dispatch,
      }}
    >
      {children}
    </BonusContext.Provider>
  );
}

function useBonus() {
  const context = useContext(BonusContext);
  if (context === undefined) {
    throw new Error("useBonus is used outside of its provider");
  }
  return context;
}

export { BonusProvider, useBonus };
