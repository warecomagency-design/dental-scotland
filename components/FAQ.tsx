"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Türkiye'de diş tedavisi güvenli mi?",
    a: "Partnerimiz klinikler JCI (Uluslararası Ortak Komisyon) akreditasyonuna sahip, Avrupa standartlarında sterilizasyon ve malzeme kullanıyor. Avrupa'dan her yıl 100,000'den fazla hasta medikal turizm için Türkiye'yi tercih ediyor.",
  },
  {
    q: "Dil engeli sorun olmaz mı?",
    a: "Hayır. Türkçe ve İngilizce konuşan koordinatörlerimiz tüm süreç boyunca yanınızda. Kliniklerde de İngilizce konuşan doktor ve yardımcı personel bulunuyor.",
  },
  {
    q: "Tedavi sonrası sorun olursa ne olur?",
    a: "Tüm tedavilerimiz 12 ay garanti kapsamındadır. Herhangi bir sorun yaşarsanız WhatsApp koordinatörünüz aracılığıyla çözüm sağlıyoruz. Gerekirse klinik ikinci bir seans için sizi davet eder.",
  },
  {
    q: "Kaç gün kalmam gerekir?",
    a: "Tedaviye bağlı değişir. Beyazlatma için 2–3 gün, implant için ortalama 5–7 gün, Hollywood Smile için 5–8 gün yeterli. Tam süre ön değerlendirme sonrasında belirlenir.",
  },
  {
    q: "Ödeme nasıl yapılır?",
    a: "MeetUp sonrası tedaviye karar verirseniz küçük bir rezervasyon bedeli alınır. Tedavilerin büyük bölümü kliniktte, varışta ödenir. Nakit, kart veya havale ile ödeme kabul edilir.",
  },
  {
    q: "MeetUp'a katılmak beni bağlar mı?",
    a: "Kesinlikle hayır. MeetUp tamamen bilgilendirme amaçlıdır, herhangi bir ücret veya taahhüt gerektirmez. Orada konuşur, soru sorar ve dilediğiniz takdirde ilerleyebilirsiniz.",
  },
  {
    q: "Uçuş ve konaklama dahil mi?",
    a: "Uçuş fiyatı genellikle ayrıdır ancak en uygun seçenekleri biz öneriyoruz. Havalimanı karşılaması, otel ve klinik transferleri pakete dahildir. Konaklama tercihinize göre bütçe veya butik seçenekler sunabiliyoruz.",
  },
  {
    q: "Hangi şehirde tedavi yaptırabilirim?",
    a: "İstanbul ve Antalya olmak üzere iki ana kliniğimiz var. İkisi de modern, donanımlı ve İskoçyalı hastalara alışkın ekiplere sahip. Tercih size kalır.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#c9973a]/10 text-[#c9973a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Sık Sorulan Sorular
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Aklınızdaki Tüm
            <br />
            <span className="text-[#c9973a]">Soruların Cevabı</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0f172a] text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#c9973a] flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Cevabını bulamadığınız bir soru mu var?</p>
          <a
            href="#randevu"
            className="inline-block bg-[#0f172a] hover:bg-[#1e3a5f] text-white px-8 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            Bize Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
