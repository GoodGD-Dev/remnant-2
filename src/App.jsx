import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Checklist from './routes/Checklist';
import Test123 from './routes/Test123';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Checklist />} />

        <Route path="/checklist" element={<Checklist />} />
        <Route path="/test123" element={<Test123 />} />
      </Routes>
    </Router>
  );
}

export default App;
