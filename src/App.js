import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/Intro/IntroPage";
import MainPage from "./components/main/MainPage";
import DetailPage from "./components/detail/DetailPage";
import HelpPage from "./components/help/HelpPage";
import SigninPage from "./components/signin/SigninPage";
import Navigation from "./components/shared/components/Navigation/MainNavigation";
import CalendarPage from "./components/calendar/CalendarPage";

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);

  useEffect(() => {
    const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserLoggedInData &&
      storedUserLoggedInData.token &&
      new Date(storedUserLoggedInData.expiration) > new Date()
    ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const isLoggedInHandler = () => {
    setIsLoggedIn(true);
  };


  return (
    <Router>
      <Navigation />
      <Routes>
      <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/main" /> : <IntroPage isLoggedIn={isLoggedIn} isLoggedInHandler={isLoggedInHandler} />}
        />    
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail/:date" element={<DetailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
