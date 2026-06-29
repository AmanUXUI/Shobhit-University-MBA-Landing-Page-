import React from "react";
import { Award, Sparkles, BookOpen, HelpCircle } from "lucide-react";

export default function ScholarshipsSection() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden" id="scholarships">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-izee-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto select-none">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Financial Support
            </span>
          </div>
          
          <h2 
            style={{ fontSize: "36px", lineHeight: "40px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight mb-4"
          >
            Scholarships to Support Your Academic Journey
          </h2>
          <div className="h-1 w-20 bg-izee-red mx-auto my-4 rounded-full" />
          
          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-600 max-w-2xl mx-auto"
          >
            Shobhit University offers merit-based scholarships to recognize academic excellence and support deserving students.
          </p>
        </div>

        {/* Scholarships Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: Academic Merit Scholarship */}
          <div className="bg-white rounded-xl border border-zinc-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-excon font-normal text-xl sm:text-2xl text-zinc-900">
                    1. Academic Merit Scholarship
                  </h3>
                  <p 
                    style={{ fontSize: "14px", lineHeight: "26px" }}
                    className="font-ranade font-light text-zinc-500 italic mt-0.5"
                  >
                    Applicable to eligible UG and PG candidates.
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-lg border border-zinc-200/60 mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200/60">
                      <th className="p-4 font-excon font-normal text-sm text-zinc-700 w-1/2">
                        Marks in Qualifying Examination
                      </th>
                      <th className="p-4 font-excon font-normal text-sm text-zinc-700 w-1/2">
                        Scholarship on Tuition Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 font-ranade text-zinc-655 text-sm">
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650">75% – 80%</td>
                      <td className="p-4 font-medium text-emerald-600 bg-emerald-50/20">25%</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650">81% – 90%</td>
                      <td className="p-4 font-medium text-emerald-600 bg-emerald-50/20">50%</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650">91% – 95%</td>
                      <td className="p-4 font-medium text-emerald-600 bg-emerald-50/20">75%</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650 font-medium">Above 95%</td>
                      <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/40">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 2: SUNET Score-Based Scholarship */}
          <div className="bg-white rounded-xl border border-zinc-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-excon font-normal text-xl sm:text-2xl text-zinc-900">
                    2. SUNET Score-Based Scholarship
                  </h3>
                </div>
              </div>

              <p 
                style={{ fontSize: "14px", lineHeight: "26px" }}
                className="font-ranade font-light text-zinc-600 mb-6"
              >
                Scholarships are awarded based on marks secured in the Shobhit University National Entrance Test (SUNET). Applicable on the first-year tuition fee only. Seats under this scheme are limited and allotted on a first-confirmed-admission basis.
              </p>

              {/* Table */}
              <div className="overflow-hidden rounded-lg border border-zinc-200/60">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200/60">
                      <th className="p-4 font-excon font-normal text-sm text-zinc-700 w-1/2">
                        SUNET Score
                      </th>
                      <th className="p-4 font-excon font-normal text-sm text-zinc-700 w-1/2">
                        Scholarship on Tuition Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 font-ranade text-zinc-655 text-sm">
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650 font-medium">95% and Above</td>
                      <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/40">50%</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650">85% – 94%</td>
                      <td className="p-4 font-medium text-emerald-600 bg-emerald-50/20">30%</td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 font-light text-zinc-650">75% – 84%</td>
                      <td className="p-4 font-medium text-emerald-600 bg-emerald-50/20">20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Advisory / Guidelines Footer Note */}
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 bg-zinc-100/60 border border-zinc-200/40 rounded-xl p-4 mt-8 text-center">
          <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-500 italic"
          >
            Scholarship benefits are subject to university guidelines and eligibility criteria.
          </p>
        </div>
      </div>
    </section>
  );
}
