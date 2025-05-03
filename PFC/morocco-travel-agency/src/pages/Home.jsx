// src/pages/Home.jsx
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';
import DestinationGrid from '../components/sections/DestinationGrid';
import SpecialOffers from '../components/ui/SpecialOfferCard';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import Footer from '../components/common/Footer';

const Home = () => {
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <DestinationGrid />
        <SpecialOffers />
        <Testimonials />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;