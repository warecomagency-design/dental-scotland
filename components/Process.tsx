const steps = [
  {
    number: "01",
    title: "Ücretsiz MeetUp Randevusu",
    desc: "İskoçya'da düzenlediğimiz Dental MeetUp etkinliklerimizden birine katılıyorsunuz. Yüz yüze sorularınızı soruyorsunuz, önceki hastalarımızla tanışıyorsunuz.",
    icon: "🤝",
    tag: "İskoçya'da",
  },
  {
    number: "02",
    title: "Online Ön Değerlendirme",
    desc: "Diş fotoğraflarınızı bizimle paylaşıyorsunuz. Türkiye'deki uzman dişhekimimiz 48 saat içinde ücretsiz ön değerlendirme ve yaklaşık fiyat teklifi gönderiyor.",
    icon: "📱",
    tag: "Online",
  },
  {
    number: "03",
    title: "Tedavi Planı & Fiyat Onayı",
    desc: "Klinik ekibiyle video görüşme yapıyorsunuz. Kesin tedavi planı, garantili fiyat ve tahmini süre belirleniyor. Tüm evraklar Türkçe + İngilizce.",
    icon: "📋",
    tag: "Video görüşme",
  },
  {
    number: "04",
    title: "Uçuş & Transfer Organizasyonu",
    desc: "Uçuş tarihlerinizi bildiriminizden sonra havalimanı transferi, otel ve kliniğe ulaşım bizden. Türkçe + İngilizce konuşan koordinatörünüz tüm süreçte yanınızda.",
    icon: "✈️",
    tag: "Tüm organizasyon bizde",
  },
  {
    number: "05",
    title: "Türkiye'de Tedavi",
    desc: "Modern, JCI akreditasyonlu klinikte tedaviniz tamamlanıyor. Ortalama 5–7 gün İstanbul ya da Antalya'da kalıyorsunuz. Tedavi arasında şehri keşfedebilirsiniz.",
    icon: "🦷",
    tag: "İstanbul / Antalya",
  },
  {
    number: "06",
    title: "İskoçya'ya Dönüş & Takip",
    desc: "Geri döndükten sonra 12 ay boyunca WhatsApp üzerinden takip hizmetimiz devam ediyor. Klinikteki tedaviler için de garantili hizmet alıyorsunuz.",
    icon: "🏠",
    tag: "12 ay garanti",
  },
];

export default function Process() {
  return (
    <section id="surecimiz" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Adım Adım Süreç
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Başlangıçtan Bitişe
            <br />
            <span className="text-[#c9973a]">Her Şeyi Biz Hallederiz</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            İlk MeetUp&apos;tan son kontrole kadar 6 adımda nasıl çalıştığımızı inceleyin.
            Yüzlerce hasta bu yolu zaten tamamladı.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9973a]/80 via-[#c9973a]/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#0f172a] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[#c9973a] font-black text-sm">{step.number}</span>
                          <span className="bg-[#c9973a]/10 text-[#c9973a] text-xs px-2 py-0.5 rounded-full font-medium">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0f172a] text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-10 h-10 bg-[#c9973a] rounded-full border-4 border-white shadow-lg items-center justify-center flex-shrink-0 z-10">
                  <span className="text-white font-bold text-xs">{step.number}</span>
                </div>

                {/* Empty space for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#randevu"
            className="inline-block bg-[#c9973a] hover:bg-[#b8862f] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#c9973a]/30"
          >
            Hemen Başla → Ücretsiz Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}
