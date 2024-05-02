import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from "./components/IntroPage/IntroPage";
import MainPage from "./components/main/mainPage";
import DetailPage from "./components/detailPage/detailPage";

function App() {
  return (
    <div className="App">
      <IntroPage />
    </div>
  );
}

export default App;
