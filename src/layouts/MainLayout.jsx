import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateSwitcher from '../components/StateSwitcher';
import { useState } from 'react';
import ScrollToTop from '../pages/ScrollToTop';
import image from "../assets/donbosco.avif"
import image2 from "../assets/corridor.avif"
import image3 from "../assets/garden.avif"

const MainLayout = () => {
  const states = [
    { state: "hs", image: image, label: "HSLC" },
    { state: "hr", image: image2, label: "HR" },
    { state: "jb", image: image3, label: "JB" },
  ];
  const [state, setState] = useState("hs");
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="">
          <Outlet context={{state, setState, states}}/>
        </main>
        <Footer />
        <StateSwitcher state={state} setState={setState} states={states} />
      </div>
  );
};

export default MainLayout;

