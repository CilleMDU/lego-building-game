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
        <Route path="/randomizedword" element={<RandomizedWord />} />
        <Route path="/languageselect" element={<LanguageSelect />} />
        <Route path="/resetgame" element={<ResetGame />} />
      </Routes>
    </>
  );
}

export default App;