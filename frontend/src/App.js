import React from 'react';
import { Header, About, Footer, Skills, Testimonial, Work } from './container';
import { Navbar } from './components'
import './App.scss'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;
