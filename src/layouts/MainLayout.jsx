import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateSwitcher from '../components/StateSwitcher';
import { useState } from 'react';
import ScrollToTop from '../pages/ScrollToTop';
import park from "../assets/park3.avif"

const MainLayout = () => {
  const states = [
    { state: "hs", image: park, label: "HSLC" },
    { state: "hr", image: park, label: "HR" },
    { state: "jb", image: park, label: "JB" },
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

