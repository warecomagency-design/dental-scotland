const videos = [
  {
    id: "7JSYbaUFrAg",
    name: "Margaret T.",
    location: "Edinburgh",
    treatment: "6 Implants + Full Restoration",
    quote: "I waited 3 years on the NHS. After the MeetUp I was in Istanbul within 4 months.",
  },
  {
    id: "UTvCepgTz_I",
    name: "James K.",
    location: "Glasgow",
    treatment: "10 Zirconia Crowns",
    quote: "The clinic was more modern than anything I'd seen in the UK. Results are stunning.",
  },
  {
    id: "bHZdLupmHv8",
    name: "Fiona M.",
    location: "Aberdeen",
    treatment: "Hollywood Smile (12 Veneers)",
    quote: "In 8 days I had the smile I'd always wanted — and felt like I had a mini-holiday.",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hear It Directly
            <br />
            <span className="text-[#c9973a]">from Our Patients</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Real people from Scotland who attended a MeetUp and went on to transform their smiles in Turkey.
          </p>
        </div>

        {/* 3-column video grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c9973a]/40 hover:shadow-lg hover:shadow-[#c9973a]/10 transition-all group"
            >
              {/* Video embed — vertical Short */}
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&color=white`}
                  title={`Patient testimonial — ${v.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>

              {/* Card info */}
              <div className="p-5">
                <p className="text-white/70 text-sm italic leading-relaxed mb-4">
                  &ldquo;{v.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{v.name}</p>
                    <p className="text-white/40 text-xs">{v.location} · {v.treatment}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#c9973a] text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-[#c9973a] hover:bg-[#b8862f] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#c9973a]/30"
          >
            I Want Results Like These →
          </a>
        </div>
      </div>
    </section>
  );
}
