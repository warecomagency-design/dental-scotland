import { ArrowDown, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f4c81 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#c9973a]/20 border border-[#c9973a]/40 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9973a] text-sm font-medium">🏴󠁧󠁢󠁳󠁣󠁴󠁿 İskoçya → 🇹🇷 Türkiye</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              NHS&apos;te{" "}
              <span className="text-[#c9973a]">2 Yıl Bekleme</span>{" "}
              Yerine{" "}
              <span className="text-[#c9973a]">2 Haftada</span>{" "}
              Mükemmel Gülüş
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              İskoçya&apos;da diş hekimine erişmek neredeyse imkânsız hâle geldi.
              Biz İskoçya&apos;dan Türkiye&apos;ye giden yüzlerce hastanın güvendiği
              <strong className="text-white"> köprüyüz.</strong> Uçtan uca organizasyon,
              sıfır stres, %70&apos;e varan tasarruf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#randevu"
                className="bg-[#c9973a] hover:bg-[#b8862f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center shadow-lg shadow-[#c9973a]/30"
              >
                Ücretsiz MeetUp Randevusu Al
              </a>
              <a
                href="#surecimiz"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors text-center"
              >
                Süreci İncele
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-white/70 text-sm justify-center lg:justify-start">
              {["Ücretsiz danışmanlık", "Garantili fiyat", "Türkçe destek"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#c9973a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full max-w-sm">
            {[
              { number: "500+", label: "Mutlu Hasta", emoji: "😁" },
              { number: "%70", label: "Tasarruf", emoji: "💰" },
              { number: "4.9★", label: "Ortalama Puan", emoji: "⭐" },
              { number: "2 Yıl+", label: "Tecrübe", emoji: "🏆" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <div className="text-2xl font-bold text-[#c9973a]">{stat.number}</div>
                <div className="text-white/70 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#neden-turkiye" aria-label="Aşağı kaydır">
            <ArrowDown className="text-white/40" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
