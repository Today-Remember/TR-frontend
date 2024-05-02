import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from "./components/IntroPage/IntroPage";
import MainPage from "./components/main/mainPage";
import DetailPage from "./components/detailPage/detailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
