import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTravelJourneys from './pages/AllTravelJourneys';
import NewTravelJourney from './pages/NewTravelJourney';
import FavororiteTravelJourneys from './pages/FavoriteTravelJourneys';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllTravelJourneys />} />
        <Route path="/new-journey" element={<NewTravelJourney />} />
        <Route path="/favorites" element={<FavororiteTravelJourneys />} />
      </Routes>
    </Router>
  )
}

export default App;
