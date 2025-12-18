import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Staffs from "./pages/Staffs";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import PhysicsLab from "./facilities/PhysicsLab";
import ChemistryLab from "./facilities/ChemistryLab";
import BiologyLab from "./facilities/BiologyLab";
import Playground from "./facilities/Playground";
import Library from "./facilities/Library";
import ComputerLab from "./facilities/ComputerLab";
import Auditorium from "./facilities/Auditorium";
import StaffRoom from "./facilities/StaffRoom";
import Infrastructure from "./facilities/Infrastructure";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Management = lazy(() => import("./pages/Management"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));

const App = () => {
  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="staff" element={<Staffs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="management" element={<Management />} />
        </Route>
        <Route path="/facilities" element={<MainLayout />}> 
          <Route index element={<Facilities />} />
          <Route path="lab-physics" element={<PhysicsLab />} />
          <Route path="lab-chemistry" element={<ChemistryLab />} />
          <Route path="lab-bio" element={<BiologyLab />} />
          <Route path="playground" element={<Playground />} />
          <Route path="library" element={<Library />} />
          <Route path="computers" element={<ComputerLab />} />
          <Route path="auditorium" element={<Auditorium />} />
          <Route path="staffroom" element={<StaffRoom />} />
          <Route path="scenery" element={<Infrastructure />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
