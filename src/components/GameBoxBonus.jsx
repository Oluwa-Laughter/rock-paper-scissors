import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import Spock from "/images/icon-spock.svg";
import Lizard from "/images/icon-lizard.svg";
import { useBonus } from "../contexts/BonusGameContext";

function GameBoxBonus() {
  const { dispatch } = useBonus();

  function getRandomComputerChoice() {
    const choices = [Rock, Paper, Scissors, Spock, Lizard];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function handlePlay(playerChoice) {
    const computerChoice = getRandomComputerChoice();

    dispatch({ type: "setPlayerChoice", payload: playerChoice });
    setTimeout(() => {
      dispatch({ type: "setComputerChoice", payload: computerChoice });
    }, 1000);

    dispatch({ type: "setPlayed", payload: "play" });
  }
  return (
    <section className="bg-pentagon bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full">
      <div
        className="absolute top-[25%] right-[13rem] h-[15rem] w-[15rem] lg:top-[30%] lg:right-1 cursor-pointer lg:max-w-[9.6rem] lg:h-[9.7rem] md:right-32 sm:-right-14"
        onClick={() => handlePlay(Paper)}
      >
        <img src={Paper} alt="paper" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[15rem] w-[15rem] cursor-pointer lg:top-16 lg:max-w-[9.6rem] lg:h-[9.7rem]"
        onClick={() => handlePlay(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
      </div>
      <div
        className="absolute -bottom-4 right-[23%] h-[15rem] w-[15rem] cursor-pointer lg:right-12 lg:bottom-8 lg:max-w-[9.6rem] lg:h-[9.7rem] md:right-[23%] sm:right-[13%]"
        onClick={() => handlePlay(Rock)}
      >
        <img src={Rock} alt="rock" />
      </div>
      <div
        className="absolute top-[25%] left-[13rem] h-[15rem] w-[15rem] cursor-pointer lg:left-1 lg:top-[30%] lg:max-w-[9.6rem] lg:h-[9.7rem] md:left-[15%] sm:left-[-6%]"
        onClick={() => handlePlay(Spock)}
      >
        <img src={Spock} alt="spock" />
      </div>
      <div
        className="absolute -bottom-4 left-[23%]  h-[15rem] w-[15rem] cursor-pointer lg:left-[10%] lg:bottom-8 lg:max-w-[9.6rem] lg:h-[9.7rem] md:left-[23%] sm:left-[13%]"
        onClick={() => handlePlay(Lizard)}
      >
        <img src={Lizard} alt="lizard" />
      </div>
    </section>
  );
}

export default GameBoxBonus;
