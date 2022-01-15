import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from '../src/Pages/About/About';
import Home from '../src/Pages/Home/Home';
import Guides from '../src/Pages/Guides/Guides';
import Tasks from './Pages/Tasks/Tasks';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/' element={<About/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/guides' element={<Guides/>} />
        <Route path='/tasks' element={<Tasks/>} />
      </Routes>
    </Router>
  );
}

export default App;
