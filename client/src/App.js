import logo from "./logo.svg";
import "./App.css";
import "./components/IntroPage/IntroPage";
import IntroPage from "./components/IntroPage/IntroPage.jsx";
import Logo from "./img/logo.png"

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="logo_text">
        <h1>Today Remember</h1>
      </div>
      <IntroPage />
    </div>
  );
}

export default App;
