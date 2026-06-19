const testimonials = [
  {
    name: "Margaret T.",
    location: "Edinburgh",
    treatment: "6 Implants + Full Restoration",
    rating: 5,
    avatar: "M",
    color: "bg-blue-500",
    quote:
      "I had been on the NHS waiting list for 3 years with no end in sight. I attended a Scotland Dental MeetUp and four months later I was in Antalya. Six implants done — the best decision I have made in years. I still can't believe the quality for the price.",
  },
  {
    name: "James K.",
    location: "Glasgow",
    treatment: "10 Zirconia Crowns",
    rating: 5,
    avatar: "J",
    color: "bg-emerald-500",
    quote:
      "I was sceptical at first. Once I spoke to previous patients at the MeetUp I decided to go for it. The clinic was more modern than any private practice I'd seen in the UK. Results are stunning, the price was unbelievable.",
  },
  {
    name: "Fiona M.",
    location: "Aberdeen",
    treatment: "Hollywood Smile (12 Veneers)",
    rating: 5,
    avatar: "F",
    color: "bg-purple-500",
    quote:
      "The team thought of absolutely everything — airport pickup, hotel, clinic transfers. I don't speak a word of Turkish but never felt lost. My coordinator was with me the whole time. In 8 days I had the smile I'd always wanted.",
  },
  {
    name: "Robert S.",
    location: "Dundee",
    treatment: "4 Implants + Bridge",
    rating: 5,
    avatar: "R",
    color: "bg-orange-500",
    quote:
      "I got a quote from a Glasgow private dentist that was nearly triple what I paid in Turkey — and the Turkish clinic was more advanced. I recommend Papatya to everyone I know in Scotland.",
  },
  {
    name: "Aileen C.",
    location: "Inverness",
    treatment: "General Check-up + Whitening",
    rating: 5,
    avatar: "A",
    color: "bg-rose-500",
    quote:
      "Meeting real patients at the MeetUp gave me huge confidence. I hadn't been to a dentist in five years. Now my teeth are in perfect shape and I actually felt like I had a mini-holiday in Antalya too.",
  },
  {
    name: "Callum B.",
    location: "Perth",
    treatment: "Gum Treatment + Bridge",
    rating: 5,
    avatar: "C",
    color: "bg-teal-500",
    quote:
      "My coordinator Ahmet answered every single question patiently before I even booked. The welcome at the clinic was warmer than any five-star hotel. I will absolutely go back for my next treatment.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            500+ Scottish Patients.
            <br />
            <span className="text-[#c9973a]">All with the Same Story.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            They all sat in a MeetUp with the same doubts you have now.
            They all left Turkey with smiles they never thought possible at a price they never expected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#c9973a] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location} · {t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0f172a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Treatments Completed" },
            { n: "4.9 / 5", l: "Google Rating" },
            { n: "98%", l: "Patient Satisfaction" },
            { n: "12 months", l: "Aftercare Included" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-black text-[#c9973a] mb-1">{s.n}</div>
              <div className="text-white/60 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
