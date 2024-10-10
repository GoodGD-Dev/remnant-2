import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './components/Header';
import Home from './routes/Home';
import Checklist from './routes/Checklist';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  // Obtenha a localização atual
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<Checklist />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <BackToTop />
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
