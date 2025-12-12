import React from 'react'
import {staffsData} from '../data/staffsData'
import SlideIn from '../effects/SlideIn'

const HsStaffs = () => {
const HsStaffs = staffsData.filter((t) => t.state === "hs").slice(0, 6); // show up to 6

          return (
                    <div>
<section className="py-24 bg-gray-50">
        <SlideIn direction="up" delay={0.1}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold">Our Teachers</h2>
              <a href="/staff" className="text-sm text-gray-600 hover:text-[var(--primary,#059669)]">
                View all staff →
              </a>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {HsStaffs.map((item, i) => (
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
                    />
                  </div>

                  <div className="p-3">
                    <div className="text-xs text-gray-500 uppercase font-semibold">{item.position}</div>
                    <div className="mt-1 font-medium">{item.name}</div>
                    {item.email && <div className="mt-1 text-xs text-gray-500">{item.email}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>
      </section>  
                    </div>
          )
}

export default HsStaffs