import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/Intro/IntroPage";
import MainPage from "./components/main/MainPage";
import DetailPage from "./components/detail/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
