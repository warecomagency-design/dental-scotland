import { MapPin, CheckCircle, Clock } from "lucide-react";

const roadshow = [
  {
    dates: "13–14 June",
    cities: ["Galashiels"],
    status: "completed",
  },
  {
    dates: "20–21 June",
    cities: ["Dumfries"],
    status: "completed",
  },
  {
    dates: "27–28 June",
    cities: ["Inverness", "Perth"],
    status: "upcoming",
    urgent: true,
  },
  {
    dates: "4–5 July",
    cities: ["Ayrshire", "Newton Stewart"],
    status: "upcoming",
    urgent: false,
  },
  {
    dates: "11–12 July",
    cities: ["Elgin", "Stirling"],
    status: "upcoming",
    urgent: false,
  },
  {
    dates: "18–19 July",
    cities: ["Arbroath", "Glenrothes"],
    status: "upcoming",
    urgent: false,
  },
  {
    dates: "25–26 July",
    cities: ["Haddington", "Taunton"],
    status: "upcoming",
    urgent: false,
    note: "Taunton, England",
  },
];

const whatHappens = [
  "Meet our clinic team and coordinator face-to-face",
  "Hear real stories from patients who have already been",
  "Get a same-day on-the-spot preliminary assessment",
  "Receive an indicative price estimate — completely free",
  "Ask anything you want, no pressure, no commitment",
  "Watch a virtual tour of our Antalya clinic",
];

export default function MeetupSection() {
  const upcoming = roadshow.filter((e) => e.status === "upcoming");
  const completed = roadshow.filter((e) => e.status === "completed");

  return (
    <section id="meetup" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/20 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland &amp; UK RoadShow 2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Are Touring
            <br />
            <span className="text-[#c9973a]">Your City — All Summer</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our team is on the road all summer long, bringing free face-to-face dental
            consultations to cities across Scotland and the UK. Find your nearest stop
            and reserve your free spot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Timeline — left side (3 cols) */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {/* Upcoming */}
              {upcoming.map((stop) => (
                <div
                  key={stop.dates}
                  className={`relative flex gap-4 items-start p-5 rounded-2xl border transition-all ${
                    stop.urgent
                      ? "bg-[#c9973a]/10 border-[#c9973a]/50"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Urgency tag */}
                  {stop.urgent && (
                    <span className="absolute -top-2.5 left-5 bg-red-500 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                      NEXT UP
                    </span>
                  )}

                  <div className="flex-1 min-w-0">
                    {/* Date + Cities */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <span className="bg-[#c9973a] text-white text-xs font-bold px-2 py-0.5 rounded-lg flex-shrink-0">
                        {stop.dates}
                      </span>
                      {stop.cities.map((city) => (
                        <span key={city} className="flex items-center gap-1 text-white font-bold text-sm">
                          <MapPin size={12} className="text-[#c9973a] flex-shrink-0" />
                          {city}
                          {stop.note && city === "Taunton" && (
                            <span className="text-[#c9973a] text-xs font-normal">(England)</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/40 text-xs">Free dental consultation · Limited seats</p>
                  </div>

                  <a
                    href="#booking"
                    className="flex-shrink-0 self-center bg-[#c9973a] hover:bg-[#b8862f] text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
                  >
                    Book Free
                  </a>
                </div>
              ))}

              {/* Completed */}
              <div className="pt-2">
                <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-3 px-1">
                  Already Visited
                </p>
                <div className="space-y-2">
                  {completed.map((stop) => (
                    <div
                      key={stop.dates}
                      className="flex gap-4 items-center p-4 rounded-xl bg-white/3 border border-white/5 opacity-60"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-white/50 text-sm w-24">{stop.dates}</span>
                        <div className="flex gap-2">
                          {stop.cities.map((city) => (
                            <span key={city} className="text-white/60 text-sm font-medium">{city}</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-green-500 text-xs font-semibold">Completed</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What happens — right side (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-28">
              <h3 className="text-white font-bold text-lg mb-5">What Happens at a MeetUp?</h3>
              <div className="space-y-3 mb-6">
                {whatHappens.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#c9973a] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#c9973a]/10 border border-[#c9973a]/30 rounded-xl p-4 mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={14} className="text-[#c9973a]" />
                  <span className="text-[#c9973a] font-semibold text-sm">Small Groups Only</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  We cap every event at 15 attendees so you get real one-to-one time with our team.
                  Seats fill up fast.
                </p>
              </div>

              <a
                href="#booking"
                className="block w-full bg-[#c9973a] hover:bg-[#b8862f] text-white text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
              >
                Reserve My Free Spot →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
