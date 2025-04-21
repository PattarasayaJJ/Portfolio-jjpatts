import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Works } from './components/Works';
import { Aboutme } from './components/Aboutme' ;
import { Experience } from './components/Experience';
import { Finalproject } from './components/Finaproject'
import { Miniproject } from './components/Miniproject';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<><Hero /><Projects /></>} />
            <Route path="/works" element={<><Works /></>}/>
            <Route path="/aboutme" element={<Aboutme />} /> 
            <Route path="/experience" element={<Experience />} />
            <Route path="/finalproject" element={<Finalproject />} />
            <Route path="/miniproject" element={<Miniproject />} />
          </Routes>
        </main>
        <Footer />
      
      </div>
    </Router>
  );
}
