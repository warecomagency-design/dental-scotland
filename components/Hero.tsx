import { ArrowDown, CheckCircle, Calendar, MapPin } from "lucide-react";

const upcomingEvents = [
  { city: "Edinburgh", date: "28 Jun", venue: "The Hub, Castlehill", spots: "5 spots left", urgent: true },
  { city: "Glasgow", date: "5 Jul", venue: "Malmaison Hotel", spots: "9 spots left", urgent: false },
  { city: "Aberdeen", date: "12 Jul", venue: "The Chester Hotel", spots: "Open", urgent: false },
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

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 relative z-10 w-full">

        {/* "We are coming to your city" announcement banner */}
        <div className="flex justify-center lg:justify-start mb-8">
          <div className="inline-flex items-center gap-3 bg-[#c9973a]/20 border border-[#c9973a]/50 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9973a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c9973a]"></span>
            </span>
            <span className="text-[#c9973a] text-sm font-semibold tracking-wide">
              🏴󠁧󠁢󠁳󠁣󠁴󠁿 &nbsp;We are coming to your city — Scotland MeetUp Tour 2025
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">

          {/* Left — main copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Waiting{" "}
              <span className="text-[#c9973a]">2 Years</span>{" "}
              for NHS.
              <br />
              Get Your{" "}
              <span className="text-[#c9973a]">Perfect Smile</span>
              <br />
              in 2 Weeks.
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
              NHS dental access in Scotland is nearly impossible. Private prices are astronomical.
              Papatya Dental Clinic Turkey is your{" "}
              <strong className="text-white">trusted bridge</strong> — end-to-end care,
              zero stress, up to <strong className="text-white">70% savings.</strong>
            </p>

            {/* MeetUp events teaser */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-5 mb-8 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-[#c9973a]" />
                <span className="text-white font-semibold text-sm">Upcoming Scotland MeetUp Events</span>
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                  FREE
                </span>
              </div>
              <div className="space-y-2">
                {upcomingEvents.map((e) => (
                  <div key={e.city} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#c9973a] font-bold text-sm w-16">{e.date}</span>
                      <div>
                        <span className="text-white text-sm font-medium">{e.city}</span>
                        <div className="flex items-center gap-1 text-white/50 text-xs">
                          <MapPin size={10} />
                          <span>{e.venue}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${
                        e.urgent
                          ? "bg-red-500/20 text-red-400"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {e.spots}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#meetup"
                className="mt-4 block text-center text-[#c9973a] text-xs font-semibold hover:underline"
              >
                View all events & secure your seat →
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4 text-white/70 text-sm justify-center lg:justify-start">
              {["Free consultation", "Guaranteed price", "English-speaking team"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#c9973a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vertical YouTube Short */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-[#c9973a]/20 rounded-3xl blur-xl" />

              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                style={{ width: "220px", aspectRatio: "9/16" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/bHZdLupmHv8?autoplay=0&loop=1&rel=0&modestbranding=1"
                  title="Papatya Dental Clinic — Scotland MeetUp"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>

              {/* Badge below video */}
              <div className="mt-3 text-center">
                <span className="text-white/50 text-xs">Watch our Scotland tour ↑</span>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-14 animate-bounce">
          <a href="#why-turkey" aria-label="Scroll down">
            <ArrowDown className="text-white/40" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
