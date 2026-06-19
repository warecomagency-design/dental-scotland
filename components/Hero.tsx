import { ArrowDown, CheckCircle, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const upcomingEvents = [
  { city: "Inverness · Perth", date: "27–28 Jun", venue: "Scotland RoadShow", spots: "Next up!", urgent: true },
  { city: "Ayrshire · Newton Stewart", date: "4–5 Jul", venue: "Scotland RoadShow", spots: "Limited", urgent: false },
  { city: "Elgin · Stirling", date: "11–12 Jul", venue: "Scotland RoadShow", spots: "Open", urgent: false },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f4c81 100%)",
      }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-16 relative z-10 w-full">

        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#c9973a]/20 border border-[#c9973a]/40 rounded-full px-4 py-2">
            <span className="text-[#c9973a] text-sm font-medium">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland → 🇹🇷 Turkey</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            We Are Coming
            <br />
            <span className="text-[#c9973a]">to Your City.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            NHS dental wait times in Scotland are broken. Papatya Dental Clinic Turkey
            brings free MeetUp events across Scotland — face-to-face consultations,
            real patients, and up to{" "}
            <span className="text-white font-semibold">70% savings</span> on your treatment.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#booking"
            className="bg-[#c9973a] hover:bg-[#b8862f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center shadow-lg shadow-[#c9973a]/30"
          >
            Book a Free MeetUp Spot
          </a>
          <a
            href="#process"
            className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors text-center"
          >
            See How It Works
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10 text-white/70 text-sm">
          {["Free consultation", "Guaranteed price", "English-speaking team"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#c9973a]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Hero banner image */}
        <div className="relative mb-10">
          <div className="absolute -inset-2 bg-[#c9973a]/10 rounded-3xl blur-xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/hero-banner.png"
              alt="We're Always Coming Back to Scotland — Papatya Dental Clinic RoadShow 2025"
              width={1672}
              height={941}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Upcoming events strip */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Calendar size={16} className="text-[#c9973a]" />
              <span className="text-white font-semibold text-sm">Upcoming Events</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse ml-1">
                FREE
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {upcomingEvents.map((e) => (
                <div key={e.city} className="flex items-center gap-3">
                  <span className="text-[#c9973a] font-bold text-sm w-14 flex-shrink-0">{e.date}</span>
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">{e.city}</p>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <MapPin size={9} />
                      <span>{e.venue}</span>
                    </div>
                  </div>
                  {e.urgent && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 flex-shrink-0">
                      {e.spots}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <a
              href="#meetup"
              className="flex-shrink-0 bg-[#c9973a] hover:bg-[#b8862f] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              See all events →
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-10 animate-bounce">
          <a href="#why-turkey" aria-label="Scroll down">
            <ArrowDown className="text-white/40" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
