import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Artworks from '../pages/Artworks';
import '../stylesheets/main.css';
import Projets from '../pages/Projets';
import DetailProjet from '../pages/DetailProjet';
import Contact from '../pages/Contact';
import About from '../pages/About';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artworks" element={<Artworks />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/detail-projet" element={<DetailProjet />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
