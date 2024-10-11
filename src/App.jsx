import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  return (
    <Router>
      <Header />
      <Routes>
        {[
          { path: "/", element: <Home /> },
          { path: "/checklist", element: <Checklist /> }
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <TransitionGroup>
                <CSSTransition key={path} classNames="fade" timeout={300}>
                  {element}
                </CSSTransition>
              </TransitionGroup>
            }
          />
        ))}
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;