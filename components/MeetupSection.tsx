import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";

const upcomingMeetups = [
  {
    city: "Edinburgh",
    date: "28 Haziran 2025",
    time: "14:00 – 17:00",
    venue: "The Hub, Castlehill",
    spots: "12 kişilik — 5 yer kaldı",
    urgent: true,
  },
  {
    city: "Glasgow",
    date: "5 Temmuz 2025",
    time: "13:00 – 16:00",
    venue: "Malmaison Hotel, Glasgow",
    spots: "15 kişilik — 9 yer kaldı",
    urgent: false,
  },
  {
    city: "Aberdeen",
    date: "12 Temmuz 2025",
    time: "14:00 – 17:00",
    venue: "The Chester Hotel, Aberdeen",
    spots: "12 kişilik — yer açık",
    urgent: false,
  },
];

const whatHappens = [
  "Klinik ekibimizle birebir tanışırsınız",
  "Önceki hastalarımızın gerçek deneyimlerini dinlersiniz",
  "Diş fotoğraflarınızı yerinde değerlendiririz",
  "Ön fiyat tahmini alırsınız (ücretsiz)",
  "Tüm sorularınızı dilediğinizce sorarsınız",
  "İstanbul ve Antalya kliniklerimizi video ile görürsünüz",
];

export default function MeetupSection() {
  return (
    <section id="meetup" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dental MeetUp
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            İskoçya&apos;da Yüz Yüze
            <br />
            <span className="text-[#c9973a]">Tanışıyoruz</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Türkiye&apos;ye gitmeden önce tüm şüphelerinizi giderin. MeetUp&apos;larımız
            ücretsiz, samimi ve bağlayıcı değil — sadece tanışma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What happens */}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              MeetUp&apos;ta Neler Olur?
            </h3>
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
                <span className="font-semibold">Gruplar küçük tutulur</span>
              </div>
              <p className="text-white/70 text-sm">
                Her MeetUp&apos;ta maksimum 15 kişi alıyoruz. Böylece herkese yeterli
                zaman ayırabiliyoruz ve samimi bir ortam sağlıyoruz.
                Kontenjanlar hızlı doluyor.
              </p>
            </div>
          </div>

          {/* Upcoming meetups */}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              Yaklaşan MeetUp&apos;lar
            </h3>
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
                      SON KONTENJANLAR!
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
                    href="#randevu"
                    className="mt-4 block w-full bg-[#c9973a] hover:bg-[#b8862f] text-white text-center py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Bu MeetUp&apos;a Katıl
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
