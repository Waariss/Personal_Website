import React, { Suspense, lazy, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';

const PDFViewer = lazy(() => import('./PDFViewer'));
const P5Wrapper = lazy(() => import('./components/p5_1'));
const HTBAchievements = lazy(() => import('./components/Room'));
const EightKsecAI = lazy(() => import('./components/8ksec-AI'));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Let layout settle before scrolling (images, collapses, etc.).
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="App">
        <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/pdf/:pdfId" element={<PDFViewer />} />
            <Route path="/p5project" element={<P5Wrapper />} />
            <Route path="/htb" element={<HTBAchievements />} />
            <Route path="/8ksec-AI" element={<EightKsecAI />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
