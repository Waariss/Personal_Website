import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio';

const PDFViewer = lazy(() => import('./PDFViewer'));
const P5SketchPage = lazy(() => import('./components/P5SketchPage'));
const HTBAchievementsPage = lazy(() => import('./components/HTBAchievementsPage'));
const EightKsecAI = lazy(() => import('./components/8ksec-AI'));

const ROUTES = [
  { path: '/', element: <Portfolio /> },
  { path: '/pdf/:pdfId', element: <PDFViewer /> },
  { path: '/p5project', element: <P5SketchPage /> },
  { path: '/htb', element: <HTBAchievementsPage /> },
  { path: '/8ksec-AI', element: <EightKsecAI /> },
];

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="App">
        <Suspense fallback={<div className="app-loading">Loading…</div>}>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
