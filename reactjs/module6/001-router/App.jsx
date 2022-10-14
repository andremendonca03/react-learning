import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;