import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/academics", label: "Academics" },
  { path: "/management", label: "Management" },
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
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <nav
          className="w-full border-b border-white/20 backdrop-blur-md bg-white shadow-lg"
          aria-label="Primary navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full bg-[linear-gradient(135deg,#ffffff9f,#00000011)] flex items-center justify-center text-sm font-bold text-[var(--primary,#059669)] shadow-sm"
                    aria-hidden
                  >
                    DB
                  </div>
                  <span className="hidden sm:inline-block font-semibold text-gray-800">
                    Don Bosco
                  </span>
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex flex-1 items-center justify-center gap-8">
                {navItems.map((item) =>
                  item.dropdown && item.dropdown.length > 0 ? (
                    <div key={item.path} className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.path)}
                        aria-expanded={openDropdown === item.path}
                        className={`flex items-center gap-1 text-sm font-medium pb-1 transition-colors ${
                          isActive(item.path)
                            ? "text-gray-900 border-b-2 border-[var(--primary,#059669)]"
                            : "text-gray-800 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 mt-[1px] transition-transform ${
                            openDropdown === item.path ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === item.path && (
                        <div className="absolute left-0 mt-3 min-w-[220px] bg-white rounded-md shadow-lg border border-gray-100">
                          <div className="py-2">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                                  isActive(sub.path)
                                    ? "text-black font-medium"
                                    : "text-gray-700"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-gray-900 border-b-2 border-[var(--primary,#059669)] pb-1"
                          : "text-gray-800 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* Right: mobile toggle */}
              <div className="flex items-center gap-3">
                {/* placeholder for future CTA on desktop */}
                <div className="hidden md:flex items-center text-sm text-gray-600" />

                <button
                  onClick={() => setIsOpen((v) => !v)}
                  className="ml-2 p-2 rounded-full text-gray-800 hover:bg-white/30 transition md:hidden"
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
                      className="flex w-full items-center justify-between text-base font-medium text-gray-800"
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
                                ? "text-black font-medium"
                                : "text-gray-600 hover:text-black"
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
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
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
      <div className="h-14"></div>


      {/* spacer removed so no empty space now */}
    </>
  );
}
