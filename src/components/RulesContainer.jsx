import Close from "/images/icon-close.svg";
import Rules from "/images/image-rules.svg";
import RulesBonus from "/images/image-rules-bonus.svg";
import { useGame } from "../contexts/GameContext";
import { useBonus } from "../contexts/BonusGameContext";

function RulesContainer() {
  const { dispatch } = useGame();

  const { dispatch: dispatchBonus } = useBonus();

  function handleRuleClose() {
    if (location.pathname === "/bonus") {
      dispatchBonus({ type: "setIsRuleOpened", payload: false });
    } else {
      dispatch({ type: "setIsRuleOpened", payload: false });
    }
  }

  return (
    <div className="z-20">
      <div
        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full"
        onClick={handleRuleClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[41.5rem] bg-white rounded-[0.8rem] flex flex-col items-center justify-between p-[3.2rem]">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[3.2rem] text-grey font-bold leading-[3.2rem]  uppercase">
            Rules
          </h2>
          <img
            src={Close}
            alt="close"
            onClick={handleRuleClose}
            className="cursor-pointer"
          />
        </div>
        {location.pathname === "/bonus" ? (
          <img src={RulesBonus} alt="rules bonus" />
        ) : (
          <img src={Rules} alt="rules" />
        )}
      </div>
    </div>
  );
}

export default RulesContainer;
