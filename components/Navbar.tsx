"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Scotland Dental</p>
            <p className="text-[#c9973a] text-xs">MeetUp</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#neden-turkiye" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Neden Türkiye?
          </a>
          <a href="#surecimiz" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Sürecimiz
          </a>
          <a href="#yorumlar" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Yorumlar
          </a>
          <a href="#meetup" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            MeetUp
          </a>
          <a
            href="#randevu"
            className="bg-[#c9973a] hover:bg-[#b8862f] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Ücretsiz Randevu Al
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <a href="#neden-turkiye" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">
            Neden Türkiye?
          </a>
          <a href="#surecimiz" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">
            Sürecimiz
          </a>
          <a href="#yorumlar" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">
            Yorumlar
          </a>
          <a href="#meetup" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">
            MeetUp
          </a>
          <a
            href="#randevu"
            onClick={() => setOpen(false)}
            className="bg-[#c9973a] text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
          >
            Ücretsiz Randevu Al
          </a>
        </div>
      )}
    </header>
  );
}
