import { useGame } from "../contexts/GameContext";

function Header() {
  const { score } = useGame();
  return (
    <header className="flex items-center py-8 px-10 justify-between border-[3px] border-border-color rounded-3xl max-w-[70rem] w-full md:px-6">
      <div>
        <img src="/images/logo.svg" className="sm:w-[80%] w-full" alt="logo" />
      </div>
      <div className="bg-score py-6 px-20 rounded-[0.8rem] shadow-box-sh flex flex-col items-center lg:py-4 lg:px-10">
        <p className="text-blue uppercase text-[1.6rem] font-semibold tracking-[0.25rem] lg:text-[1.4rem]">
          Score
        </p>
        <h2 className="text-[6.4rem] leading-[6.4rem] font-bold text-grey lg:text-[4rem]">
          {score}
        </h2>
      </div>
    </header>
  );
}

export default Header;
