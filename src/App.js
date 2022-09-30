import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Event from './components/Event';
// import Button from './components/Button';
import Home from './components/Home';
import Create from './routes/Create';
import Event from './routes/Event';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
};

export default App;
