import { useState } from 'react';
import './App.css';
import data from './data.json';
import Navbar from './assets/components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  console.log(data[0].images.planet);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        {data.map(planet => (
          <Route
            key={planet.name}
            path={`/${planet.name.toLowerCase()}`}
            element={<img src={planet.images.planet} alt={`Planet ${planet.name}`} />}
          />
        ))}
      </Routes>
     
    </Router>
  );
}

export default App;
