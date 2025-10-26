import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // nécessaire pour les dropdowns
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ton Navbar
import { Home } from './pages/Home'; // Exemple de page
import About from './pages/About'; // Une autre page
import Team from './pages/Team'; // Une autre page
import Projects from './pages/Projects'; // Une autre page
import Events from './pages/Events';
import Contact from './pages/Contact'; // Une autre page
import Join from './pages/Join';
import Footer from './pages/Footer';


function App() {
  return (

    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
