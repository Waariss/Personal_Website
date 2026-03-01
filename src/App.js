import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';

const PDFViewer = lazy(() => import('./PDFViewer'));
const P5Wrapper = lazy(() => import('./components/p5_1'));
const HTBAchievements = lazy(() => import('./components/Room'));
const EightKsecAI = lazy(() => import('./components/8ksec-AI'));
const ROUTES = [
  { path: '/', element: <Portfolio /> },
  { path: '/pdf/:pdfId', element: <PDFViewer /> },
  { path: '/p5project', element: <P5Wrapper /> },
  { path: '/htb', element: <HTBAchievements /> },
  { path: '/8ksec-AI', element: <EightKsecAI /> },
];

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

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
