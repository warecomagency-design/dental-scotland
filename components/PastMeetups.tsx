import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";

const stats = [
  { icon: <Calendar size={20} className="text-[#c9973a]" />, number: "12+", label: "Events Held" },
  { icon: <MapPin size={20} className="text-[#c9973a]" />, number: "6", label: "Scottish Cities" },
  { icon: <Users size={20} className="text-[#c9973a]" />, number: "500+", label: "Patients Met" },
];

const pastEvents = [
  { city: "Perth", date: "May 2025", highlight: "Sold out in 48 hrs" },
  { city: "Edinburgh", date: "Apr 2025", highlight: "60+ attendees" },
  { city: "Glasgow", date: "Mar 2025", highlight: "Record turnout" },
  { city: "Dundee", date: "Feb 2025", highlight: "Fully booked" },
];

export default function PastMeetups() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Team & Past Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            We&apos;ve Already Been
            <br />
            <span className="text-[#c9973a]">All Over Scotland</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team travels to Scottish cities throughout the year to meet patients face-to-face —
            no pressure, no obligation, just honest conversations about your dental options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#c9973a] rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#c9973a] rounded-br-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/meetup-team.jpg"
                alt="Papatya Dental Clinic team at Scotland MeetUp event"
                width={820}
                height={1024}
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#0f172a]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Scotland MeetUp Tour</p>
                    <p className="text-[#c9973a] text-xs">Papatya Dental Clinic Turkey</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#c9973a] text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex justify-center mb-2">{s.icon}</div>
                  <div className="text-2xl font-black text-[#0f172a]">{s.number}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* About the team */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">Who You&apos;ll Meet</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our Scotland events are led by our patient coordinators — English-speaking professionals
                who have personally guided hundreds of Scottish patients through the Turkey treatment journey.
                They know every question you have before you even ask it.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                At every event we also bring before/after cases, treatment price guides and — where possible —
                patients who have already been to Turkey and are happy to share their experience in person.
              </p>
            </div>

            {/* Past events list */}
            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">Recent Events</h3>
              <div className="space-y-3">
                {pastEvents.map((e) => (
                  <div
                    key={e.city}
                    className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9973a]/10 rounded-lg flex items-center justify-center">
                        <MapPin size={14} className="text-[#c9973a]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f172a] text-sm">{e.city}, Scotland</p>
                        <p className="text-gray-400 text-xs">{e.date}</p>
                      </div>
                    </div>
                    <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {e.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              className="mt-8 inline-block w-full bg-[#0f172a] hover:bg-[#1e3a5f] text-white text-center py-4 rounded-xl font-bold transition-colors"
            >
              Join the Next MeetUp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
