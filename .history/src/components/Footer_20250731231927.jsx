import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div className="text-center md:text-left gradient-text ">
          <h2 className="text-lg font-semibold">Contact Me</h2>
          <p className="text-sm mt-2">Email: jj.pattarasaya@gmail.com</p>
          <p className="text-sm">Phone: 099-209-5588</p>
          <p className="text-sm">Khon Kaen 40000, Thailand</p>

        </div>

        <div className="flex space-x-4 ">
        <a href="https://github.com/PattarasayaJJ" target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/favicons/favicon.png" alt="GitHub" />

  </a>
         
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6 ">
        © {new Date().getFullYear()} JJPatts. All rights reserved.
      </div>
    </footer>
  );
}
