import BonusBoxes from "../components/BonusBoxes";
import BonusHeader from "../components/BonusHeader";
import Footer from "../components/Footer";
import GameBoxBonus from "../components/GameBoxBonus";
import RulesContainer from "../components/RulesContainer";
import { useBonus } from "../contexts/BonusGameContext";

function BonusPage() {
  const { played, isRuleOpened } = useBonus();
  return (
    <section className="flex flex-col min-h-screen items-center lg:py-10">
      <BonusHeader />
      {played === "start" && <GameBoxBonus />}
      {played === "play" && <BonusBoxes />}
      <Footer />
      {isRuleOpened && <RulesContainer />}
    </section>
  );
}

export default BonusPage;
