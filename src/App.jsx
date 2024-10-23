import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Checklist from "./routes/Checklist";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <BackToTop />
    </Router>
  );
}

// Componente para gerenciar animações de rota
function AnimatedRoutes() {
  const location = useLocation(); // Obtém a localização atual

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
