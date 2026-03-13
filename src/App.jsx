import { Routes, Route } from "react-router";
import Homepage from "./pages/homepage/homepage";
import RandomizedWord from "./pages/randomizedWord/randomizedWord";
import LanguageSelect from "./pages/languageSelect/languageSelect";
import ResetGame from "./pages/resetGame/resetGame";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/randomized-word" element={<RandomizedWord />} />
        <Route path="/language-select" element={<LanguageSelect />} />
        <Route path="/reset-game" element={<ResetGame />} />
      </Routes>
    </>
  );
}

export default App;