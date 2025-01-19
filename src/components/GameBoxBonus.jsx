import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import Spock from "/images/icon-spock.svg";
import Lizard from "/images/icon-lizard.svg";
import { useBonus } from "../contexts/BonusGameContext";

function getRandomComputerChoice() {
  const choices = [Rock, Paper, Scissors, Spock, Lizard];

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function GameBoxBonus() {
  const { dispatch } = useBonus();

  function handlePlay(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    dispatch({ type: "setPlayerChoice", payload: playerChoice });
    setTimeout(() => {
      dispatch({ type: "setComputerChoice", payload: computerChoice });
    }, 1000);

    dispatch({ type: "setPlayed", payload: "play" });
  }
  return (
    <section className="bg-pentagon bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full"></section>
  );
}

export default GameBoxBonus;
