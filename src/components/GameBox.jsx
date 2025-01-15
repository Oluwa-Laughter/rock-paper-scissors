import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import { useGame } from "../contexts/GameContext";

function getRandomComputerChoice() {
  const choices = [Rock, Paper, Scissors];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function GameBox() {
  const { dispatch } = useGame();

  function handleChoice(playerChoice) {
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
        className="absolute left-1 top-8 h-[12rem] w-[12rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:left-64 lg:top-12 md:top-6 md:left-[13rem] "
        onClick={() => handleChoice(Paper)}
      >
        <img src={Paper} alt="paper" />
        <div className="h-full w-full hover:bg-hover-bg absolute top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
      <div
        className="absolute right-1 top-8 h-[12rem] w-[12rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:right-64 lg:top-12 md:top-6 md:right-[13rem]"
        onClick={() => handleChoice(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
        <div className="h-full w-full hover:bg-hover-bg  absolute top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[12rem] w-[12rem] cursor-pointer lg:w-[13rem] lg:h-[13rem] lg:bottom-12 sm:bottom-0 sm:left-1/2"
        onClick={() => handleChoice(Rock)}
      >
        <img src={Rock} alt="rock" />
        <div className="h-full w-full hover:bg-hover-bg absolute top-[-2.5rem] left-[-2.5rem] sm:hidden"></div>
      </div>
    </section>
  );
}

export default GameBox;
