import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import DestinationCard from '../components/ui/DestinationCard';
import { Outlet } from 'react-router-dom';



const MainLayout = ({ children }) => {
  console.log({children})
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;