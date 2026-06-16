"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Papatya Dental Clinic Turkey"
            width={140}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-turkey" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Why Turkey?
          </a>
          <a href="#process" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Our Process
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            Reviews
          </a>
          <a href="#meetup" className="text-white/80 hover:text-[#c9973a] text-sm transition-colors">
            MeetUp Events
          </a>
          <a
            href="#booking"
            className="bg-[#c9973a] hover:bg-[#b8862f] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Free Consultation
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <a href="#why-turkey" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">Why Turkey?</a>
          <a href="#process" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">Our Process</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">Reviews</a>
          <a href="#meetup" onClick={() => setOpen(false)} className="text-white/80 text-sm py-2">MeetUp Events</a>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="bg-[#c9973a] text-white px-5 py-3 rounded-full text-sm font-semibold text-center"
          >
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
