import ChooseBoxes from "../components/ChooseBoxes";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import { useGame } from "../contexts/GameContext";

function HomePage() {
  const { played } = useGame();
  return (
    <section className="flex flex-col items-center min-h-screen py-20 lg:py-12 lg:px-12 md:px-6">
      <Header />
      {played === "start" && <GameBox />}
      {played === "play" && <ChooseBoxes />}
    </section>
  );
}

export default HomePage;
