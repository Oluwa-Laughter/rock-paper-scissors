import BonusHeader from "../components/BonusHeader";
import Footer from "../components/Footer";
import RulesContainer from "../components/RulesContainer";
import { useBonus } from "../contexts/BonusGameContext";

function BonusPage() {
  const { played, isRuleOpened } = useBonus();
  return (
    <section className="flex flex-col min-h-screen items-center lg:py-10 lg:px-12 sm:mx-0 md:px-0">
      <BonusHeader />
      <Footer />
      {isRuleOpened && <RulesContainer />}
    </section>
  );
}

export default BonusPage;
