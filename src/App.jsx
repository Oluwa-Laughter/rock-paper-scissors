import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BonusPage from "./pages/BonusPage";
import { GameProvider } from "./contexts/GameContext";
import { BonusProvider } from "./contexts/BonusGameContext";

function App() {
  return (
    <main className="mx-auto p-10">
      <GameProvider>
        <BonusProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bonus" element={<BonusPage />} />
            </Routes>
          </BrowserRouter>
        </BonusProvider>
      </GameProvider>
    </main>
  );
}

export default App;
