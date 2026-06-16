"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is dental treatment in Turkey safe?",
    a: "Absolutely. Papatya Dental Clinic is equipped to international standards and uses German and Italian technology. Turkey attracts over 100,000 dental tourists from Europe every year, and the UK-wide trend of travelling to Turkey for dentistry is well-documented.",
  },
  {
    q: "Will there be a language barrier?",
    a: "Not at all. Your dedicated English-speaking coordinator is with you from day one. Clinic staff also speak English and are very experienced with British patients.",
  },
  {
    q: "What if something goes wrong after I'm home?",
    a: "All treatments carry a 12-month guarantee. Your coordinator remains reachable on WhatsApp throughout. If a clinical issue arises, the clinic will invite you back — at no additional treatment cost — to resolve it.",
  },
  {
    q: "How long do I need to stay in Turkey?",
    a: "It depends on your treatment. Whitening takes 2–3 days; implants typically 5–7 days; a full Hollywood Smile around 5–8 days. Your exact timeline is confirmed after the free assessment.",
  },
  {
    q: "How do I pay?",
    a: "A small reservation deposit is taken after your MeetUp if you decide to proceed. The majority of the treatment cost is paid on arrival at the clinic. We accept cash, card and bank transfer.",
  },
  {
    q: "Does attending a MeetUp commit me to anything?",
    a: "Absolutely not. MeetUp events are purely informational — free to attend, no deposit, no obligation. Come along, ask everything you want, then decide in your own time.",
  },
  {
    q: "Are flights and accommodation included?",
    a: "We advise on the best flight options (usually Edinburgh or Glasgow to Istanbul or Antalya) but the flight cost is separate. Airport pickup, hotel transfers and clinic transport are included in your package.",
  },
  {
    q: "Which city in Turkey will I be treated in?",
    a: "We work with clinics in both Istanbul and Antalya. Both are modern, internationally accredited and well used to Scottish patients. The choice is yours — we will advise based on your treatment and travel preferences.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Every Question
            <br />
            <span className="text-[#c9973a]">You&apos;re Probably Thinking</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0f172a] text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#c9973a] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Still have a question we haven&#39;t covered?</p>
          <a
            href="#booking"
            className="inline-block bg-[#0f172a] hover:bg-[#1e3a5f] text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
