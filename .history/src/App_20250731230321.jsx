import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Aboutme } from './components/Aboutme' ;
import { Footer } from './components/Footer';
import { Nine } from './components/Nine';
export function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<><Hero /> </>} />
            <Route path="/works" element={<><Works /></>}/>
            <Route path="/aboutme" element={<Aboutme />} /> 
       

          </Routes>
        </main>
        <Footer />
      
      </div>
    </Router>
  );
}
