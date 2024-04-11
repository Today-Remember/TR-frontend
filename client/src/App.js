import "./App.css";
import "./components/IntroPage/IntroPage";
import IntroPage from "./components/IntroPage/IntroPage.jsx";
function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <IntroPage />
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </Router>
  
    // <div className="App">
    //   <IntroPage />
    // </div>
>>>>>>> Stashed changes
  );
}

export default App;
