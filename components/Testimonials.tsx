const testimonials = [
  {
    name: "Margaret T.",
    location: "Edinburgh",
    treatment: "6 İmplant + Tam Restorasyon",
    rating: 5,
    avatar: "M",
    color: "bg-blue-500",
    quote:
      "NHS'te 3 yıldır bekliyordum ve bir türlü sıra gelmiyordu. Scotland Dental MeetUp'a katıldım, 4 ay sonra İstanbul'daydım. 6 implant yaptırdım, hem parasal hem de kalite açısından hayatımın en iyi kararlarından biri oldu. Hâlâ inanamıyorum.",
  },
  {
    name: "James K.",
    location: "Glasgow",
    treatment: "10 Zirkonyum Kaplama",
    rating: 5,
    avatar: "J",
    color: "bg-emerald-500",
    quote:
      "Başta şüpheciydim. 'Türkiye'de nasıl kaliteli diş tedavisi olur?' dedim. MeetUp'ta önceki hastalarla konuştuktan sonra güvendim ve gitmeye karar verdim. Klinik Manchester Özel Hastanelerinden bile daha moderndi. Sonuç mükemmel, fiyat akıllara durgunluk verecek kadar ucuz.",
  },
  {
    name: "Fiona M.",
    location: "Aberdeen",
    treatment: "Hollywood Smile (12 Kaplama)",
    rating: 5,
    avatar: "F",
    color: "bg-purple-500",
    quote:
      "Ekip gerçekten her şeyi düşünmüş. Havalimanından otele, otelden kliniğe kadar transfer dahil. Türkçe bilmiyorum ama hiçbir sorun yaşamadım, koordinatörüm sürekli yanımdaydı. 8 günde hayalimdeki gülüşe kavuştum.",
  },
  {
    name: "Robert S.",
    location: "Dundee",
    treatment: "4 İmplant + Köprü",
    rating: 5,
    avatar: "R",
    color: "bg-orange-500",
    quote:
      "Glasgow'daki özel bir diş hekiminden aldığım fiyatın üçte birine Türkiye'de 4 implant ve tam köprü yaptırdım. Üstelik klinik daha modern, doktor daha deneyimliydi. Bu tecrübeyi İskoçya'daki herkese tavsiye ediyorum.",
  },
  {
    name: "Aileen C.",
    location: "Inverness",
    treatment: "Genel Bakım + Beyazlatma",
    rating: 5,
    avatar: "A",
    color: "bg-rose-500",
    quote:
      "MeetUp'ta herkesle tanışmak bana çok güven verdi. Gerçek hastalar, gerçek sonuçlar. 5 yıldır gidemedim dişçiye, şimdi dişlerim mükemmel durumda. İstanbul da ayrıca çok güzel bir şehir, tatil gibi oldu.",
  },
  {
    name: "Callum B.",
    location: "Perth",
    treatment: "Diş Eti Tedavisi + Köprü",
    rating: 5,
    avatar: "C",
    color: "bg-teal-500",
    quote:
      "Sürece olan güvensizliğimi MeetUp'ta oturup konuşunca atlattım. Koordinatörüm Ahmet, tüm sorularımı sabırla yanıtladı. Klinikte 5 star hotel odasından daha iyi karşılama yapıldı. Kesinlikle tekrar gideceğim.",
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gerçek Hikâyeler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            İskoçya&apos;dan Giden
            <br />
            <span className="text-[#c9973a]">500+ Mutlu Hasta</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Onların tümü bir MeetUp&apos;ta oturmuş, aynı şüpheleri taşımış ve şimdi
            hayallerindeki gülüşe sahipler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#c9973a] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
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

        {/* Social proof bar */}
        <div className="mt-16 bg-[#0f172a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "500+", l: "Tedavi Tamamlandı" },
            { n: "4.9 / 5", l: "Google Puan" },
            { n: "%98", l: "Memnuniyet" },
            { n: "12 ay", l: "Sonrası Takip" },
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
