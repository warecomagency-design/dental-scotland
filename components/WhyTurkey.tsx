import { Clock, PoundSterling, Award, Globe } from "lucide-react";

const comparisons = [
  { treatment: "Dental Implant", scotland: "£2,500 – £3,500", turkey: "£500 – £700", saving: "80%" },
  { treatment: "Porcelain Veneers (10 teeth)", scotland: "£5,000 – £8,000", turkey: "£1,200 – £1,800", saving: "78%" },
  { treatment: "Zirconia Crown", scotland: "£700 / tooth", turkey: "£150 / tooth", saving: "79%" },
  { treatment: "Teeth Whitening", scotland: "£500 – £1,000", turkey: "£150 – £200", saving: "75%" },
];

const reasons = [
  {
    icon: <Clock size={28} className="text-[#c9973a]" />,
    title: "2-Year NHS Wait Times",
    desc: "Registering with an NHS dentist in Scotland is nearly impossible. Private appointments can take months to get, with eye-watering fees attached.",
  },
  {
    icon: <PoundSterling size={28} className="text-[#c9973a]" />,
    title: "Up to 70% Savings",
    desc: "The same quality treatment — including flights and accommodation — still costs a fraction of UK private dental prices.",
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
            Turkey — and Papatya Dental Clinic — offers a genuine alternative on quality, speed and cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
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

        {/* Price comparison */}
        <div className="bg-[#0f172a] rounded-3xl overflow-hidden">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              Price Comparison
            </h3>
            <p className="text-white/60 text-center text-sm mb-8">
              Even adding flights + 4 nights accommodation, Turkey is still cheaper.
            </p>

            <div className="grid grid-cols-4 gap-2 mb-3 px-2">
              <div className="text-white/50 text-xs font-medium uppercase">Treatment</div>
              <div className="text-white/50 text-xs font-medium uppercase text-center">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</div>
              <div className="text-[#c9973a] text-xs font-medium uppercase text-center">🇹🇷 Turkey</div>
              <div className="text-white/50 text-xs font-medium uppercase text-center">Saving</div>
            </div>

            <div className="space-y-3">
              {comparisons.map((c) => (
                <div
                  key={c.treatment}
                  className="grid grid-cols-4 gap-2 bg-white/5 rounded-xl px-4 py-3 items-center"
                >
                  <div className="text-white text-sm font-medium">{c.treatment}</div>
                  <div className="text-white/50 text-sm text-center line-through">{c.scotland}</div>
                  <div className="text-[#c9973a] text-sm font-bold text-center">{c.turkey}</div>
                  <div className="text-center">
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                      {c.saving} saved
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-xs text-center mt-6">
              * Prices are based on average market rates. Book a free consultation for your personal quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
