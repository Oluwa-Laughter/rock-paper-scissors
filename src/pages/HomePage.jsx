import ChooseBoxes from "../components/ChooseBoxes";
import Footer from "../components/Footer";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import RulesContainer from "../components/RulesContainer";
import { useGame } from "../contexts/GameContext";

function HomePage() {
  const { played, isRuleOpened } = useGame();
  return (
    <section className="flex flex-col min-h-screen items-center lg:py-10 lg:px-12 md:px-0">
      <Header />
      {played === "start" && <GameBox />}
      {played === "play" && <ChooseBoxes />}
      <Footer />
      {isRuleOpened && <RulesContainer />}
    </section>
  );
}

export default HomePage;
