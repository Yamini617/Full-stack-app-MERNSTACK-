
import { Outlet } from 'react-router-dom';
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer
import './styles/App.css';  // Import any global styles if needed

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />   {/* Render Header at the top */}
      <main>
        <Outlet />  {/* This is where routed components like Home, Login, Register will be rendered */}
      </main>
      <Footer />   {/* Render Footer at the bottom */}
    </div>
  );
};

export default RootLayout;
