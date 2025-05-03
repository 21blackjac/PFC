import { Routes, Route, Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
// import About from './pages/About';
// import Destinations from './pages/Destinations';
// import Tours from './pages/Tours';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

function App() {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route index  element={<Home />} />
          {/* 
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          */}
        </Route>
      </Routes>
  );
}

export default App;
