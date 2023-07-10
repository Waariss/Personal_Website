import React from 'react';
import Navigation from './Navbar';
import Portfolio from './Portfolio';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
