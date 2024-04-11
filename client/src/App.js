import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/IntroPage/IntroPage";
import IntroPage from "./components/IntroPage/IntroPage.jsx";
import MainPage from "./components/main/MainPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
      </Routes>
    </Router>
  
    // <div className="App">
    //   <IntroPage />
    // </div>
  );
}

export default App;
