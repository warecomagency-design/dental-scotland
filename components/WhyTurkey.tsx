import { Clock, Award, Globe, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <Clock size={28} className="text-[#c9973a]" />,
    title: "2-Year NHS Wait Times",
    desc: "Registering with an NHS dentist in Scotland is nearly impossible. Private appointments can take months to get, with eye-watering fees attached.",
  },
  {
    icon: <HeartHandshake size={28} className="text-[#c9973a]" />,
    title: "Scotland's Most Trusted Dental Partner",
    desc: "More Scottish patients choose Papatya Dental Clinic than any other Turkish clinic. Hundreds of families from Edinburgh to Inverness have made the journey.",
  },
  {
    icon: <Award size={28} className="text-[#c9973a]" />,
    title: "International Standards",
    desc: "Papatya Dental Clinic is equipped with German and Italian technology. Our clinicians treat hundreds of UK patients every year.",
  },
  {
    icon: <Globe size={28} className="text-[#c9973a]" />,
    title: "End-to-End Organisation",
    desc: "Transfers, accommodation, translation and treatment scheduling — all arranged by us. You just get on the plane.",
  },
];

export default function WhyTurkey() {
  return (
    <section id="why-turkey" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Turkey?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Why Is Dental Care in Scotland
            <br />
            <span className="text-[#c9973a]">So Broken?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            NHS dental services have been in freefall for years. Private fees are astronomical.
            Turkey — and Papatya Dental Clinic — offers a genuine alternative on quality, speed and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#c9973a]/30 hover:shadow-md transition-all bg-gray-50"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#c9973a]/10 rounded-xl flex items-center justify-center">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0f172a] mb-1">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
