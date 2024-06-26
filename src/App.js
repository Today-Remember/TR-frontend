import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/Intro/IntroPage";
import MainPage from "./components/main/MainPage";
import DetailPage from "./components/detail/DetailPage";
import HelpPage from "./components/help/HelpPage";
import SigninPage from "./components/signin/SigninPage";
import Navigation from "./components/shared/components/Navigation/MainNavigation";
import CalendarPage from "./components/calendar/CalendarPage";
import { AuthProvider } from "./components/shared/context/AuthContext";

function App() {


  return (
    <AuthProvider>
    <Router>

      <Navigation />
      <Routes>
        <Route path="/" element={<IntroPage
        />} />
        
        
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail/:date" element={<DetailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      
    </Router>
    </AuthProvider>
  );
}

export default App;
