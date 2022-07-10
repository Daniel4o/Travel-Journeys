import { Route, Routes } from 'react-router-dom';

import AllTravelJourneys from './pages/AllTravelJourneys';
import NewTravelJourney from './pages/NewTravelJourney';
import EditTravelJourney from './pages/EditTravelJorney';
import FavororiteTravelJourneys from './pages/FavoriteTravelJourneys';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/travel-journeys" element={<AllTravelJourneys />} />
        <Route path="/travel-journeys/add" element={<NewTravelJourney />} />
        <Route path="/favorites" element={<FavororiteTravelJourneys />} />
        <Route path="/travel-journeys/:id" element={<EditTravelJourney />} />

      </Routes>
    </Layout>
  )
}

export default App;
