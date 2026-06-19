const steps = [
  {
    number: "01",
    title: "Free MeetUp Event in Scotland",
    desc: "Attend one of our free Dental MeetUp events across Scotland. Meet our team face-to-face, ask any question you have, and speak with patients who have already been through the journey.",
    icon: "🤝",
    tag: "In Scotland",
  },
  {
    number: "02",
    title: "Treatment Plan & Price Confirmation",
    desc: "Join a video call with the clinic team. Your finalised treatment plan and estimated timeline are confirmed. All documents in English.",
    icon: "📋",
    tag: "Video call",
  },
  {
    number: "03",
    title: "Flights & Transfers Sorted",
    desc: "Once you choose your travel dates, we arrange airport transfer, hotel and clinic transport. Your dedicated English-speaking coordinator is with you throughout.",
    icon: "✈️",
    tag: "All logistics on us",
  },
  {
    number: "04",
    title: "Treatment in Turkey",
    desc: "Your treatment is completed at a modern, internationally accredited clinic in Istanbul or Antalya. Most patients stay 5–7 days — plenty of time to enjoy the city too.",
    icon: "🦷",
    tag: "Istanbul / Antalya",
  },
  {
    number: "05",
    title: "Scotland's #1 Preferred Clinic — Here's Why",
    desc: "More Scottish patients choose Papatya Dental Clinic than any other clinic in Turkey. Trusted by families from Edinburgh to Inverness, we are proud to be the clinic Scotland calls its own. With 16 expert doctors, an 8-floor premium facility, and 100% aftercare — your smile is in the best hands.",
    icon: "🏆",
    tag: "Scotland's favourite",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Step by Step
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            From First MeetUp
            <br />
            <span className="text-[#c9973a]">to Perfect Smile — We Handle Everything</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here is exactly how we guide you from your first question to your final result.
            Hundreds of Scottish patients have already made this journey.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9973a]/80 via-[#c9973a]/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 w-full">
                  <div className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                    step.number === "05"
                      ? "bg-[#0f172a] border-[#c9973a]/40"
                      : "bg-white border-gray-100"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#c9973a] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[#c9973a] font-black text-sm">{step.number}</span>
                          <span className="bg-[#c9973a]/10 text-[#c9973a] text-xs px-2 py-0.5 rounded-full font-medium">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${step.number === "05" ? "text-white" : "text-[#0f172a]"}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${step.number === "05" ? "text-white/70" : "text-gray-600"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex w-10 h-10 bg-[#c9973a] rounded-full border-4 border-white shadow-lg items-center justify-center flex-shrink-0 z-10">
                  <span className="text-white font-bold text-xs">{step.number}</span>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#booking"
            className="inline-block bg-[#c9973a] hover:bg-[#b8862f] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#c9973a]/30"
          >
            Start Now → Book a Free Spot
          </a>
        </div>
      </div>
    </section>
  );
}
