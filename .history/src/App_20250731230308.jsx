import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Works } from './components/Works';
import { Aboutme } from './components/Aboutme' ;
import { Finalproject } from './components/Finalproject'
import { Kkubus } from './components/Kkubus';
import { Footer } from './components/Footer';
import { Class } from './components/Class';
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
