import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const DesktopNav = ({
  utilityLinks,
  navItems,
  openDropdown,
  setOpenDropdown,
  toggleDropdown,
  isActive,
}) => {
  return (
    <div>
      {/* Desktop nav */}
      <div className="flex flex-col justify-between gap-4 items-right">
        <div className="w-full hidden md:block">
          <div className="w-full items-end justify-between">
            <nav
              className="flex items-end justify-end gap-6 py-2 overflow-x-auto"
              aria-label="Utility navigation"
            >
              {utilityLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm whitespace-nowrap font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) =>
            item.dropdown && item.dropdown.length > 0 ? (
              <div key={item.path} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.path)}
                  aria-expanded={openDropdown === item.path}
                  className={`flex items-center gap-1 font-medium pb-1 transition-colors ${
                    isActive(item.path)
                      ? "text-gray-100 border-b-2 border-blue-600"
                      : "text-gray-300 hover:text-white"
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
                              ? "text-white font-medium"
                              : "text-gray-300"
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
                className={`text-sm md:text-md font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-gray-100 border-b-2 border-blue-600 pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
