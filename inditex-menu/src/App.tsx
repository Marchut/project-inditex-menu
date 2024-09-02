import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageTemplate from './pages/PageTemplate';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate />} />
        <Route path="/group" element={<PageTemplate />} />
        <Route path="/brands" element={<PageTemplate />} />
        <Route path="/sustainability" element={<PageTemplate />} />
        <Route path="/investors" element={<PageTemplate />} />
        <Route path="/talent" element={<PageTemplate />} />
        <Route path="/press" element={<PageTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;