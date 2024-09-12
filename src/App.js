import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import PlayersDetailsPage from "./Pages/PlayersDetailsPage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import QuestionPage from "./Pages/QuestionPage.jsx";
import ResultPage from "./Pages/ResultPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playersDetails" element={<PlayersDetailsPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
