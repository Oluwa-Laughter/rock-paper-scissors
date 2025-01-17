import { useNavigate } from "react-router";
import { useGame } from "../contexts/GameContext";
import { Link } from "react-router";

function SwitchGameSection() {
  const { dispatch } = useGame();

  const navigate = useNavigate();

  const bonusSection = location.pathname === "/bonus";

  function toggleSection() {
    if (bonusSection) {
      navigate("/");
      //  bonusDispatch({ type: "resetGame" });
    } else {
      navigate("/bonus");
      dispatch({ type: "resetGame" });
    }
  }

  return (
    <Link
      className={`border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 mt-auto self-start  hover:bg-score hover:text-grey transition-all duration-300 lg:self-center lg:mt-20 `}
      to={bonusSection ? "/" : "/bonus"}
      onClick={toggleSection}
    >
      {bonusSection ? "Home" : "Bonus"}
    </Link>
  );
}

export default SwitchGameSection;
