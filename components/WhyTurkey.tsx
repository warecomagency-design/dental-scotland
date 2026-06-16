import { Clock, PoundSterling, Award, Globe } from "lucide-react";

const comparisons = [
  {
    treatment: "Diş İmplantı",
    scotland: "£2,500 – £3,500",
    turkey: "£500 – £700",
    saving: "%80",
  },
  {
    treatment: "Porselen Kaplama (10 diş)",
    scotland: "£5,000 – £8,000",
    turkey: "£1,200 – £1,800",
    saving: "%78",
  },
  {
    treatment: "Zirkonyum Kaplama",
    scotland: "£700 / diş",
    turkey: "£150 / diş",
    saving: "%79",
  },
  {
    treatment: "Diş Beyazlatma",
    scotland: "£500 – £1,000",
    turkey: "£150 – £200",
    saving: "%75",
  },
];

const reasons = [
  {
    icon: <Clock size={28} className="text-[#c9973a]" />,
    title: "NHS'te 2 Yıl Bekleme",
    desc: "İskoçya'da NHS diş hekimine kayıt neredeyse imkânsız. Özel klinikte randevu almak ise aylarca sürebiliyor.",
  },
  {
    icon: <PoundSterling size={28} className="text-[#c9973a]" />,
    title: "%70'e Varan Tasarruf",
    desc: "Aynı kalitede tedaviyi, uçuş ve konaklama dahil olsa bile İngiltere fiyatının çok altında tamamlıyorsunuz.",
  },
  {
    icon: <Award size={28} className="text-[#c9973a]" />,
    title: "Uluslararası Standart",
    desc: "Partnerimiz klinikler JCI akreditasyonlu, Alman ve İtalyan teknolojisiyle donanmış, dil engeli yok.",
  },
  {
    icon: <Globe size={28} className="text-[#c9973a]" />,
    title: "Uçtan Uca Organizasyon",
    desc: "Transfer, konaklama, tercümanlık ve tedavi takvimini biz ayarlıyoruz. Siz sadece uçağa biniyorsunuz.",
  },
];

export default function WhyTurkey() {
  return (
    <section id="neden-turkiye" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Neden Türkiye?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            İskoçya&apos;da Diş Tedavisi
            <br />
            <span className="text-[#c9973a]">Neden Bu Kadar Zor?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            NHS diş hizmetleri yıllardır çöküyor. Özel sektör fiyatları astronomik.
            Türkiye ise kalite, hız ve fiyatta gerçek bir alternatif sunuyor.
          </p>
        </div>

        {/* Reasons grid */}
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
              Fiyat Karşılaştırması
            </h3>
            <p className="text-white/60 text-center text-sm mb-8">
              Uçuş + 4 gece konaklama ekleyince bile Türkiye daha ucuz.
            </p>

            {/* Table header */}
            <div className="grid grid-cols-4 gap-2 mb-3 px-2">
              <div className="text-white/50 text-xs font-medium uppercase">Tedavi</div>
              <div className="text-white/50 text-xs font-medium uppercase text-center">🏴󠁧󠁢󠁳󠁣󠁴󠁿 İskoçya</div>
              <div className="text-[#c9973a] text-xs font-medium uppercase text-center">🇹🇷 Türkiye</div>
              <div className="text-white/50 text-xs font-medium uppercase text-center">Tasarruf</div>
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
                      {c.saving} tasarruf
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-xs text-center mt-6">
              * Fiyatlar ortalama piyasa değerlerine göre hesaplanmıştır. Kişiye özel fiyat için ücretsiz randevu alın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
