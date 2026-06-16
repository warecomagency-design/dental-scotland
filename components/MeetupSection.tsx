import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";

const upcomingMeetups = [
  {
    city: "Edinburgh",
    date: "28 June 2025",
    time: "2:00 pm – 5:00 pm",
    venue: "The Hub, Castlehill",
    spots: "12 seats — only 5 left",
    urgent: true,
  },
  {
    city: "Glasgow",
    date: "5 July 2025",
    time: "1:00 pm – 4:00 pm",
    venue: "Malmaison Hotel, Glasgow",
    spots: "15 seats — 9 left",
    urgent: false,
  },
  {
    city: "Aberdeen",
    date: "12 July 2025",
    time: "2:00 pm – 5:00 pm",
    venue: "The Chester Hotel, Aberdeen",
    spots: "12 seats — open",
    urgent: false,
  },
];

const whatHappens = [
  "Meet our clinic team and coordinator face-to-face",
  "Hear real stories from patients who have already been",
  "Get a same-day on-the-spot preliminary assessment",
  "Receive an indicative price estimate — completely free",
  "Ask anything you want, no pressure, no commitment",
  "Watch a virtual tour of our Istanbul & Antalya clinics",
];

export default function MeetupSection() {
  return (
    <section id="meetup" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dental MeetUp Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            We Come to Scotland
            <br />
            <span className="text-[#c9973a]">So You Can Meet Us First</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Before you commit to anything, come and meet us in person.
            Our MeetUp events are free, relaxed and completely no-obligation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What happens */}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">What Happens at a MeetUp?</h3>
            <div className="space-y-3 mb-8">
              {whatHappens.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#c9973a] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0f172a] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Users size={20} className="text-[#c9973a]" />
                <span className="font-semibold">Small Groups Only</span>
              </div>
              <p className="text-white/70 text-sm">
                We cap every MeetUp at 15 attendees. This means you get real
                time with us — not a sales pitch in a packed room.
                Seats fill up fast, so book early.
              </p>
            </div>
          </div>

          {/* Upcoming meetups */}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingMeetups.map((m) => (
                <div
                  key={m.city + m.date}
                  className={`bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow ${
                    m.urgent ? "border-[#c9973a]" : "border-gray-100"
                  }`}
                >
                  {m.urgent && (
                    <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full mb-3">
                      LAST FEW SEATS!
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-lg">{m.city}</h4>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <Calendar size={14} />
                        <span>{m.date} · {m.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <MapPin size={14} />
                        <span>{m.venue}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-gray-500">{m.spots}</span>
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="mt-4 block w-full bg-[#c9973a] hover:bg-[#b8862f] text-white text-center py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Reserve My Seat — Free
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
