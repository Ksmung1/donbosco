import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import gallery from "../data/gallery";
import DesktopNav from "./DesktopNav";

// Helper function to get image from gallery by filename
const getImageFromGallery = (filename) => {
  const image = gallery.find(
    (item) =>
      item.file?.toLowerCase() === filename.toLowerCase() ||
      item.file?.toLowerCase().includes(filename.toLowerCase())
  );
  return image?.src || null;
};

const logo = getImageFromGallery("logo.png") || getImageFromGallery("logo");

const utilityLinks = [
  { path: "/alumni", label: "Alumni Association" },
  { path: "/disclosures", label: "Disclosures" },
  { path: "/news", label: "News" },
];

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/academics", label: "Academics" },
  { path: "/admissions", label: "Admissions" },
  { path: "/campus", label: "Campus" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
  // { path: "/admissions", label: "Admissions", dropdown: [...] }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (path) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
  };

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0  left-0 right-0 z-50 w-full">
        {/* Utility Navigation Bar */}

        <nav
          className="w-full border-b lg:py-1 border-white/20 border-b border-gray-200 backdrop-blur-md bg-blue-800 shadow-lg"
          aria-label="Primary navigation"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Container */}
            <div className="flex w-full items-center  justify-between">
              {/* Logo */}
              <div className="flex items-center gap-1 py-1 md:gap-3">
                <Link to="/" className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full rounded-full overflow-hidden flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm"
                    aria-hidden
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col  font-serif">
                    <span className="inline-block text-base md:text-xl lg:text-2xl  text-gray-100">
                      Don Bosco
                    </span>
                    <span className="inline-block text-xs md:text-md lg:text-2xl font-extralight text-gray-100">
                      Higher Secondary School
                    </span>
                    <span className="inline-block text-xs md:text-md lg:text-md text-gray-300">
                      Salem Veng | Churachandpur
                    </span>
                  </div>
                </Link>
              </div>

              <DesktopNav
                utilityLinks={utilityLinks}
                navItems={navItems}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                toggleDropdown={toggleDropdown}
                isActive={isActive}
              />
              {/* Right: mobile toggle */}
              <div className=" md:hidden flex items-center gap-3">
                {/* placeholder for future CTA on desktop */}
                <div className="hidden md:flex items-center text-sm text-gray-300" />

                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="ml-2 p-2 rounded-full text-gray-300 hover:bg-white/30 transition md:hidden"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile nav panel */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isOpen
                ? "max-h-[480px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) =>
                item.dropdown && item.dropdown.length > 0 ? (
                  <div key={item.path}>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.path)}
                      className="flex w-full items-center justify-between text-base font-medium text-gray-300"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.path ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.path && (
                      <div className="mt-2 ml-3 space-y-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={`block text-sm ${
                              isActive(sub.path)
                                ? "text-white font-medium"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`block text-base font-medium ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* spacer removed so no empty space now */}
    </>
  );
}
