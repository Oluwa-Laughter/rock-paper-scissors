import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import { useGame } from "../contexts/GameContext";

function getRandomComputerChoice() {
  const choices = [Rock, Paper, Scissors];

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function GameBox() {
  const { dispatch } = useGame();

  function handlePlay(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    dispatch({ type: "setPlayerChoice", payload: playerChoice });
    setTimeout(() => {
      dispatch({ type: "setComputerChoice", payload: computerChoice });
    }, 1000);

    dispatch({ type: "setPlayed", payload: "play" });
  }

  return (
    <section className="bg-triangle bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full">
      <div
        className="absolute left-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:left-80 lg:top-12 sm:top-6 sm:-left-8"
        onClick={() => handlePlay(Paper)}
      >
        <img src={Paper} alt="paper" />
        <div className="h-full w-full hover:bg-hover-bg absolute top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
      <div
        className="absolute right-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:right-80 lg:top-12  sm:top-6 sm:-right-8 "
        onClick={() => handlePlay(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
        <div className="h-full w-full hover:bg-hover-bg  absolute  top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[24.8rem] w-[25.2rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:bottom-12 sm:bottom-0 sm:left-1/2"
        onClick={() => handlePlay(Rock)}
      >
        <img src={Rock} alt="rock" />
        <div className="h-full w-full hover:bg-hover-bg absolute  top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
    </section>
  );
}

export default GameBox;
