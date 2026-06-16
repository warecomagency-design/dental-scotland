export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <div>
                <p className="text-white font-bold text-sm">Scotland Dental</p>
                <p className="text-[#c9973a] text-xs">MeetUp</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              İskoçya&apos;dan Türkiye&apos;ye diş tedavisi için güvenilir köprünüz.
              Uçtan uca organizasyon, 500+ mutlu hasta.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {[
                ["Neden Türkiye?", "#neden-turkiye"],
                ["Sürecimiz", "#surecimiz"],
                ["Hasta Yorumları", "#yorumlar"],
                ["MeetUp Takvimi", "#meetup"],
                ["SSS", "#faq"],
                ["Randevu Al", "#randevu"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-[#c9973a] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">İletişim</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/50">
                <span>📱</span>
                <span>WhatsApp: +44 7XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <span>✉️</span>
                <span>info@scotlanddental.co.uk</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <span>📍</span>
                <span>Edinburgh, Scotland & İstanbul, Turkey</span>
              </div>
            </div>

            <a
              href="#randevu"
              className="inline-block mt-6 bg-[#c9973a] hover:bg-[#b8862f] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Ücretsiz Randevu Al
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Scotland Dental MeetUp. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            İskoçya&apos;dan Türkiye&apos;ye — Güvenli, Kaliteli, Uygun Fiyatlı Diş Tedavisi
          </p>
        </div>
      </div>
    </footer>
  );
}
