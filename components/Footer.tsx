import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.webp"
              alt="Papatya Dental Clinic Turkey"
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Scotland&apos;s trusted bridge to world-class dental care in Turkey.
              End-to-end organisation, 500+ happy patients.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["Why Turkey?", "#why-turkey"],
                ["Our Process", "#process"],
                ["Patient Reviews", "#testimonials"],
                ["MeetUp Events", "#meetup"],
                ["FAQ", "#faq"],
                ["Book a Free Spot", "#booking"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/50 hover:text-[#c9973a] text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B441414655616&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#25D366] transition-colors"
              >
                <span>📱</span>
                <span>WhatsApp: +44 141 465 5616</span>
              </a>
              <a
                href="mailto:smile@papatyadental.com"
                className="flex items-center gap-2 text-white/50 hover:text-[#c9973a] transition-colors"
              >
                <span>✉️</span>
                <span>smile@papatyadental.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/50">
                <span>📍</span>
                <span>Edinburgh, Scotland & Antalya, Turkey</span>
              </div>
            </div>

            <a
              href="#booking"
              className="inline-block mt-6 bg-[#c9973a] hover:bg-[#b8862f] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Book a Free Spot
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Papatya Dental Clinic Turkey. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Scotland → Turkey — Safe, High-Quality, Affordable Dental Care
          </p>
        </div>
      </div>
    </footer>
  );
}
