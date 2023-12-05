import React from 'react';
import Navigation from './Navbar';
import Portfolio from './Portfolio';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import PDFViewer from './PDFViewer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/pdf/:pdfId" element={<PDFViewer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
