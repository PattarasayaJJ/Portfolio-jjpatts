import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Works } from './components/Works'; // <- สร้างไว้ด้วยนะครับ
import { Aboutme } from './components/Aboutme' ;
import { Experience } from './components/Experience';

export function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<><Hero /><Projects /></>} />
            <Route path="/works" element={<Works />} />
            <Route path="/aboutme" element={<Aboutme />} /> // ✅ path = "/aboutme"
            <Route path="/experience" element={<Experience />} />


            {/* เพิ่ม Route สำหรับ Experiens / About me ได้ตรงนี้ */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
