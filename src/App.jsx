import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Staffs from "./pages/Staffs";
import Admissions from "./pages/Admissions";
import Profile from "./Abouts/Profile";
import Principal from "./Abouts/Principal";
import Founder from "./Abouts/Founder";
import Philosophy from "./Abouts/Philosophy";
import Milestones from "./Abouts/Milestones";
import Campus from "./pages/Campus";
import CampusDetail from "./pages/CampusDetail";
import Alumni from "./pages/Alumni";
import NewsDetails from "./pages/NewsDetails";
import News from "./pages/News";
import Disclosures from "./pages/Disclosures";
import Loading from "./components/Loading";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ManagementAbout = lazy(() => import("./Abouts/Management"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="campus" element={<Campus />} />
          <Route path="staff" element={<Staffs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="disclosures" element={<Disclosures />} />
        </Route>
        <Route path="/about" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="principal" element={<Principal />} />
          <Route path="founder" element={<Founder />} />
          <Route path="milestones" element={<Milestones />} />
          <Route path="educational-philosophy" element={<Philosophy />} />
          <Route path="management" element={<ManagementAbout />} />
        </Route>
        <Route path="/campus" element={<MainLayout />}>
          <Route index element={<Campus />} />
          <Route path=":id" element={<CampusDetail />} />
        </Route>
        <Route path="/news" element={<MainLayout />}>
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
