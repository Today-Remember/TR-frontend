import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/Intro/IntroPage";
import MainPage from "./components/main/MainPage";
import DetailPage from "./components/detail/DetailPage";
import HelpPage from "./components/help/HelpPage";
import SigninPage from "./components/signin/SigninPage";
import Navigation from "./components/shared/components/Navigation/MainNavigation";
import CalendarPage from "./components/calendar/CalendarPage";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
