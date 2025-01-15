import GameBox from "../components/GameBox";
import Header from "../components/Header";

function HomePage() {
  return (
    <section className="flex flex-col items-center min-h-screen py-20 lg:py-12 lg:px-12 md:px-6">
      <Header />
      <GameBox />
    </section>
  );
}

export default HomePage;
