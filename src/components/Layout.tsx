import React from 'react';
import Header from './Header';
import ClinicSection from './ClinicSection';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header/>
      <main>
        <ClinicSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;