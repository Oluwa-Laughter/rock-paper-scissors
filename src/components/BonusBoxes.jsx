import { useEffect } from "react";
import { useBonus } from "../contexts/BonusGameContext";
import Choice from "./Choice";
import ChooseBox from "./ChooseBox";
import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import Spock from "/images/icon-spock.svg";
import Lizard from "/images/icon-lizard.svg";

function BonusBoxes() {
  const { dispatch, playerChoice, computerChoice, winner } = useBonus();

  const player = winner === "player";
  const computer = winner === "computer";

  useEffect(
    function () {
      if (playerChoice !== null && computerChoice !== null) {
        setTimeout(() => {
          let newWinner = null;

          if (playerChoice === Scissors && computerChoice === Paper) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Paper && computerChoice === Rock) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Rock && computerChoice === Lizard) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Lizard && computerChoice === Spock) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Spock && computerChoice === Scissors) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Paper && computerChoice === Spock) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Scissors && computerChoice === Lizard) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Lizard && computerChoice === Paper) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Spock && computerChoice === Rock) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === Rock && computerChoice === Scissors) {
            newWinner = "player";
            dispatch({ type: "setScore", payload: 1 });
          } else if (playerChoice === computerChoice) {
            newWinner = "draw";
          } else {
            newWinner = "computer";
            dispatch({ type: "setScore", payload: -1 });
          }
          dispatch({ type: "setWinner", payload: newWinner });
        }, 1000);
      }
    },
    [playerChoice, computerChoice, dispatch]
  );
  return (
    <div
      className={`mt-28 gap-28 justify-center items-center grid  ${
        winner ? "grid-cols-3" : "grid-cols-2"
      } lg:grid-cols-2 sm:gap-12`}
    >
      <ChooseBox heading="You picked" type={playerChoice} isWinner={player} />
      {winner && <Choice />}
      <ChooseBox
        heading="The house picked"
        type={computerChoice}
        isWinner={computer}
      />
    </div>
  );
}

export default BonusBoxes;
