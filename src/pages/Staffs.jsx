import React from "react";
import { useOutletContext } from "react-router-dom";
import { staffsData } from "../data/staffsData";
import SlideIn from "../effects/SlideIn";

const Staffs = () => {
  const { state } = useOutletContext();

  // Filter staff by state, handling both single state and array of states
  const filteredStaffs = staffsData.filter((staff) => {
    if (Array.isArray(staff.state)) {
      return staff.state.includes(state);
    }
    return staff.state === state;
  });

  return (
    <div>
      <section className="py-24 bg-gray-50">
        <SlideIn direction="up" delay={0.1}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Our Teachers
              </h2>
            </div>

            {filteredStaffs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No staff members found for this section.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {filteredStaffs.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x200?text=Staff";
                        }}
                      />
                    </div>

                    <div className="p-3">
                      <div className="text-xs text-gray-500 uppercase font-semibold">
                        {item.position}
                      </div>
                      <div className="mt-1 font-medium text-gray-900">
                        {item.name}
                      </div>
                      {item.email && (
                        <div className="mt-1 text-xs text-gray-500">
                          {item.email}
                        </div>
                      )}
                      {item.subject && (
                        <div className="mt-1 text-xs text-blue-600">
                          {Array.isArray(item.subject)
                            ? item.subject.join(", ")
                            : item.subject}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </SlideIn>
      </section>
    </div>
  );
};

export default Staffs;
