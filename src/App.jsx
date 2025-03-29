import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import ProjectsPage from './Components/Projects/ProjectsPage';
import Footer from './Components/Footer/Footer';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';
import './index.css';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gradient-to-b from-white to-pink-50 min-h-screen relative overflow-hidden">
        <ParticlesBackground />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;