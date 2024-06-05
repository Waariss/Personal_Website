import React from 'react';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import PDFViewer from './PDFViewer';
import P5Wrapper from './components/p5_1';
import HTBAchievements from './components/Room';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/pdf/:pdfId" element={<PDFViewer />} />
          <Route path="/p5project" element={<P5Wrapper />} />
          <Route path="/htb" element={<HTBAchievements />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
