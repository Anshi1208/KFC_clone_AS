import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import ImageSlider from './components/ImageSlider';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <ImageGrid />
      <ImageSlider />
      <Footer />
      <Routes>

        
        <Route path="/menu" element={<Menu />} />
      </Routes>
      
    </div>
  );
}

export default App;
