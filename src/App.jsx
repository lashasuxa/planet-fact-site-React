
import Navbar from './assets/components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';
import PlanetSection from './assets/components/PlanetSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/:planetName" element={<PlanetSection />} />
          <Route path="/" element={<Navigate to="/mercury" />} /> {/* Redirect to /mercury by default */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}



export default App;
