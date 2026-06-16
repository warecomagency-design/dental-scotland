"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const meetupCities = ["Edinburgh – 28 Haziran", "Glasgow – 5 Temmuz", "Aberdeen – 12 Temmuz"];
const treatments = [
  "Diş İmplantı",
  "Zirkonyum / Porselen Kaplama",
  "Hollywood Smile",
  "Diş Beyazlatma",
  "Köprü Yapımı",
  "Diş Eti Tedavisi",
  "Genel Değerlendirme",
  "Diğer",
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
    // Simulate submission — replace with real API/email integration
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="randevu" className="py-24 bg-[#0f172a]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white/5 border border-[#c9973a]/30 rounded-3xl p-12">
            <CheckCircle size={64} className="text-[#c9973a] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Randevunuz Alındı! 🎉
            </h2>
            <p className="text-white/70 mb-2">
              24 saat içinde WhatsApp veya e-posta yoluyla sizi arayacağız.
            </p>
            <p className="text-white/50 text-sm">
              Lütfen telefon numaranızı kontrol ediniz.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="randevu" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#c9973a]/20 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Ücretsiz Randevu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bir MeetUp&apos;a Katılmak
              <br />
              <span className="text-[#c9973a]">Hiçbir Taahhüt Gerektirmez</span>
            </h2>
            <p className="text-white/70 mb-8">
              Formu doldurun, 24 saat içinde sizi arayalım. Hangi MeetUp&apos;a
              katılmak istediğinizi, tedavi ihtiyacınızı ve sorularınızı birlikte
              konuşalım. Tamamen ücretsiz.
            </p>

            <div className="space-y-4">
              {[
                "Katılım ücretsiz, bağlayıcı değil",
                "24 saat içinde WhatsApp ile dönüş",
                "Türkçe ve İngilizce destek",
                "Ön değerlendirme dahil",
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
              MeetUp Randevusu Al
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="İsim Soyisim"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@ornek.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hangi MeetUp?
                </label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] bg-white"
                >
                  <option value="">Seçiniz...</option>
                  {meetupCities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tedavi İhtiyacınız
                </label>
                <select
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] bg-white"
                >
                  <option value="">Seçiniz...</option>
                  {treatments.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notunuz (isteğe bağlı)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Sormak istedikleriniz veya ek bilgi..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9973a]/40 focus:border-[#c9973a] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c9973a] hover:bg-[#b8862f] disabled:opacity-70 text-white py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c9973a]/30"
              >
                {loading ? (
                  <span className="animate-pulse">Gönderiliyor...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Ücretsiz Randevu Al
                  </>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                Bilgileriniz üçüncü şahıslarla paylaşılmaz. 24 saat içinde dönüş garantisi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
