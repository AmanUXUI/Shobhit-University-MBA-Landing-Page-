import React from "react";
import { Award, ShieldCheck, Star, TrendingUp, Calendar, BookOpen } from "lucide-react";

interface RankingItem {
  id: string;
  source: string;
  rank: string;
  description: string;
  survey: string;
  published?: string;
  badgeColor: string;
  accentColor: string;
  bgGradient: string;
  logoUrl: string;
}

const RANKINGS: RankingItem[] = [
  {
    id: "the-times",
    source: "The Times",
    rank: "Ranked 28",
    description: "Amongst Top 100 B-Schools in India",
    survey: "Times B-School Ranking Survey 2024",
    published: "Published in The Week Magazine on February 1, 2024",
    badgeColor: "bg-blue-50 border-blue-200/60 text-blue-800",
    accentColor: "text-blue-600 group-hover:text-blue-700",
    bgGradient: "group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)]",
    logoUrl: "https://www.aimglobalmedia.com/wp-content/uploads/2023/03/Medios_AIM_The-Times.jpg",
  },
  {
    id: "careers360",
    source: "Careers360",
    rank: "Rated A++",
    description: "India's Best B-Schools in the Country in 2025",
    survey: "Source: India's Best B-Schools by Careers360",
    badgeColor: "bg-emerald-50 border-emerald-200/60 text-[#116446]",
    accentColor: "text-emerald-600 group-hover:text-emerald-700",
    bgGradient: "group-hover:border-emerald-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]",
    logoUrl: "https://cnextassets.careers360.com/frontend-common/_react_common/assets/logo-blue.svg",
  },
  {
    id: "outlook",
    source: "Outlook",
    rank: "Ranked 37",
    description: "Amongst Top Private B-Schools in India",
    survey: "Outlook-ICARE India Best B-Schools Rankings 2024",
    published: "Published in Outlook Magazine | July 2024",
    badgeColor: "bg-amber-50 border-amber-200/60 text-amber-800",
    accentColor: "text-amber-600 group-hover:text-amber-700",
    bgGradient: "group-hover:border-amber-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)]",
    logoUrl: "https://www.clipartmax.com/png/full/112-1126975_open-outlook-com-logo.png",
  },
  {
    id: "the-week",
    source: "The Week",
    rank: "Ranked 14",
    description: "Amongst Top B-Schools in Delhi NCR",
    survey: "The Week-Hansa Research Survey 2024",
    published: "The Week Magazine | November 17, 2024",
    badgeColor: "bg-rose-50 border-rose-200/60 text-rose-800",
    accentColor: "text-rose-600 group-hover:text-rose-700",
    bgGradient: "group-hover:border-rose-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.1)]",
    logoUrl: "https://www.theweek.in/content/dam/revamp-week/logo/THE-WEEK-LOGO.jpg",
  },
];

export default function BottomCards() {
  return (
    <div 
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8" 
      id="interactive-hero-cards"
    >
      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(17,100,70,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-zinc-200/80 p-6 md:p-8 relative overflow-hidden">
        {/* Ambient Grid overlay to keep it interesting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        
        {/* Rankings Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-full mb-3">
              <Award className="w-3.5 h-3.5 text-zinc-600" />
              <span className="font-mono text-[9px] font-bold text-zinc-600 tracking-widest uppercase">
                National Accolades
              </span>
            </div>
            <h2 
              style={{ fontSize: "28px", lineHeight: "34px" }}
              className="font-excon font-normal text-[#0B1E33] tracking-tight"
            >
              Our Rankings
            </h2>
          </div>
          <p 
            style={{ fontSize: "14px", lineHeight: "22px" }}
            className="font-ranade font-light text-zinc-500 max-w-md sm:text-right"
          >
            Recognized by premium national ranking agencies for outstanding academic standards, pedagogy, and placements.
          </p>
        </div>

        {/* Dynamic Rankings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {RANKINGS.map((item) => {
            return (
              <div
                key={item.id}
                className={`group relative bg-zinc-50/40 border border-zinc-200/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white ${item.bgGradient} flex flex-col justify-between`}
              >
                <div>
                  {/* Top Header Row of Card */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Logo Image Container - Rectangular Format */}
                    <div className={`rounded-lg border border-zinc-200/80 bg-white flex items-center justify-center overflow-hidden shadow-sm group-hover:border-zinc-300 transition-colors ${
                      item.id === "the-times" ? "h-14 w-36 p-0.5" : "h-11 w-28 p-2"
                    }`}>
                      <img 
                        src={item.logoUrl} 
                        alt={`${item.source} logo`} 
                        className={item.id === "the-times" ? "w-full h-full object-contain" : "max-h-full max-w-full object-contain"}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Huge Rank/Rating Display */}
                  <div className="mb-3">
                    <span className={`block font-excon font-semibold text-2xl tracking-tight ${item.accentColor} transition-colors duration-300`}>
                      {item.rank}
                    </span>
                  </div>

                  {/* Description */}
                  <p 
                    style={{ fontSize: "13px", lineHeight: "18px" }}
                    className="font-ranade font-medium text-zinc-800 mb-4"
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footnotes */}
                <div className="pt-3 border-t border-zinc-100 mt-auto">
                  <div className="flex items-start gap-1.5 text-zinc-500 mb-1">
                    <BookOpen className="w-3 h-3 shrink-0 mt-0.5 text-zinc-400" />
                    <span className="font-ranade text-[11px] font-light leading-tight text-zinc-500">
                      {item.survey}
                    </span>
                  </div>
                  {item.published && (
                    <div className="flex items-start gap-1.5 text-zinc-400">
                      <Calendar className="w-3 h-3 shrink-0 mt-0.5 text-zinc-300" />
                      <span className="font-ranade text-[10px] font-light leading-tight italic text-zinc-400">
                        {item.published}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
