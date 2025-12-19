import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StateSwitcher = ({ state, setState, states }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!states || !setState || !state) return null;

  return (
    <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center justify-center gap-3">
      {/* State Switcher Buttons */}
      <div
        className={`flex flex-col gap-3 relative mb-12 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {states.map((slidePreview, index) => {
          const isActivePreview = slidePreview.state === state;
          return (
            <button
              key={index}
              onClick={() => {
                setState(slidePreview.state);
              }}
              className={`group relative h-16 w-24 overflow-hidden rounded-2xl border transition-all duration-300 shadow-lg ${
                isActivePreview
                  ? "border-blue-500 shadow-blue-200 scale-105 bg-white"
                  : "border-gray-200 hover:border-blue-300 hover:scale-105 opacity-90 bg-white"
              }`}
              title={`Switch to ${slidePreview.label}`}
            >
              <img
                src={slidePreview.image}
                alt={slidePreview.label}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full backdrop-blur-sm px-2 py-0.5 text-[8px] font-medium text-white shadow-sm bg-black/40">
                {slidePreview.label}
              </span>
              {isActivePreview && (
                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-500 shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StateSwitcher;
