import ChooseBoxes from "../components/ChooseBoxes";
import Footer from "../components/Footer";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import RulesContainer from "../components/RulesContainer";
import { useGame } from "../contexts/GameContext";

function HomePage() {
  const { played, isRuleOpened } = useGame();
  return (
    <section className="flex flex-col items-center min-h-screen py-20 lg:py-12 lg:px-12 md:px-6">
      <Header />
      {played === "start" && <GameBox />}
      {played === "play" && <ChooseBoxes />}
      <Footer />
      {isRuleOpened && <RulesContainer />}
    </section>
  );
}

export default HomePage;
