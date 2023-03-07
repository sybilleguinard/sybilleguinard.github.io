import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutAdmin from '../pages/admin/AboutAdmin'
import ProjetAdmin from '../pages/admin/ProjetAdmin'
import ArtworksAdmin from '../pages/admin/ArtworksAdmin';
import Artworks from '../pages/Artworks';
import '../stylesheets/main.css';
import HomeAdmin from '../pages/admin/HomeAdmin';
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
                    <Route path="/artworks" element={<Artworks/>} />
                    <Route path="/projets" element={<Projets/>} />
                    <Route path="/detail-projet" element={<DetailProjet/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<About/>} />

                    <Route path='/admin-panel/home' element={<HomeAdmin />}/>
                    <Route path='/admin-panel/about' element={<AboutAdmin />}/>
                    <Route path='/admin-panel/projet' element={<ProjetAdmin />}/>
                    <Route path='/admin-panel/artworks' element={<ArtworksAdmin />}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
