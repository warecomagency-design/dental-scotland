"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const meetupCities = [
  "Inverness — 27-28 June",
  "Perth — 27-28 June",
  "Ayrshire — 4-5 July",
  "Newton Stewart — 4-5 July",
  "Elgin — 11-12 July",
  "Stirling — 11-12 July",
  "Arbroath — 18-19 July",
  "Glenrothes — 18-19 July",
  "Haddington — 25-26 July",
  "Taunton (England) — 25-26 July",
];

const treatments = [
  "Dental Implant(s)",
  "Zirconia / Porcelain Crowns",
  "Hollywood Smile / Veneers",
  "Teeth Whitening",
  "Dental Bridge",
  "Gum Treatment",
  "General Assessment",
  "Other / Not Sure Yet",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    treatment: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-[#0f172a]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white/5 border border-[#c9973a]/30 rounded-3xl p-12">
            <CheckCircle size={64} className="text-[#c9973a] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Booking Received! 🎉
            </h2>
            <p className="text-white/70 mb-2">
              We will contact you within 24 hours via WhatsApp or email to confirm your spot.
            </p>
            <p className="text-white/50 text-sm">
              Please keep an eye on your phone and inbox.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#c9973a]/20 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Free Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Attending a MeetUp
              <br />
              <span className="text-[#c9973a]">Commits You to Nothing.</span>
            </h2>
            <p className="text-white/70 mb-8">
              Fill in the form and we will call you within 24 hours to confirm
              which MeetUp you would like to attend, walk you through what to
              expect, and answer any questions upfront. Completely free.
            </p>
            <div className="space-y-4">
              {[
                "Attendance is free — no obligation whatsoever",
                "24-hour WhatsApp response",
                "English-speaking team throughout",
                "Free preliminary assessment included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#c9973a]" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              Reserve Your Free Spot
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Which MeetUp?</label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] bg-white"
                >
                  <option value="">Select a city...</option>
                  {meetupCities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest</label>
                <select
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] bg-white"
                >
                  <option value="">Select...</option>
                  {treatments.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Anything else? (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Questions, concerns, or extra context..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c9973a] hover:bg-[#b8862f] disabled:opacity-70 text-white py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c9973a]/30"
              >
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Reserve My Free Spot
                  </>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                Your details are never shared with third parties. We respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
