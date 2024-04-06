import logo from "./logo.svg";
import "./App.css";
import "./components/IntroPage/IntroPage";
import IntroPage from "./components/IntroPage/IntroPage.jsx";

function App() {
  return (
    <div className="App">
      <h1>Today Remember</h1>
      <IntroPage />
    </div>
  );
}

export default App;
