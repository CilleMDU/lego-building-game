import { Routes, Route } from "react-router";
import homepage from "./pages/homepage/homepage";
import randomizedWord from "./pages/randomizedWord/randomizedWord";
import languageSelect from "./pages/languageSelect/languageSelect";
import resetGame from "./pages/resetGame/resetGame";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<homepage />} />
        <Route path="/randomized-word" element={<randomizedWord />} />
        <Route path="/language-select" element={<languageSelect />} />
        <Route path="/reset-game" element={<resetGame />} />
      </Routes>
    </>
  );
}

export default App;