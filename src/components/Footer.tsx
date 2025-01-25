import React from 'react'
import { useInView } from '@/hooks/useInView'
import { FaTruck, FaUsers, FaMapMarkedAlt, FaClock, FaAward, FaHandshake, FaRoute, FaWarehouse } from 'react-icons/fa'
import { useCounter } from '@/hooks/useCounter';

const Footer = () => {
  const [ref, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpolygon points="0 0 20 0 10 10"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}/>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative" ref={ref}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
            Rakamlarla Saran Lojistik
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: FaClock, sayi: 15, suffix: "+", baslik: "Yıllık Tecrübe", altMetin: "Sektörde Güven" },
              { icon: FaUsers, sayi: 1000, suffix: "+", baslik: "Mutlu Müşteri", altMetin: "Sürekli Büyüyen Aile" },
              { icon: FaTruck, sayi: 10, suffix: "+", baslik: "Araç Filosu", altMetin: "Modern Ekipman" },
              { icon: FaMapMarkedAlt, sayi: 81, suffix: "", baslik: "Hizmet Verilen İl", altMetin: "Türkiye Geneli" },
              { icon: FaRoute, sayi: 50000, suffix: "+", baslik: "Km Yol", altMetin: "Güvenli Teslimat" },
              { icon: FaHandshake, sayi: 120, suffix: "+", baslik: "İş Ortağı", altMetin: "Güçlü Network" },
              { icon: FaWarehouse, sayi: 20, suffix: "+", baslik: "Depo", altMetin: "Stratejik Noktalar" },
              { icon: FaAward, sayi: 10, suffix: "+", baslik: "Ödül", altMetin: "Başarı Hikayesi" }
            ].map((stat, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const count = useCounter(isInView ? stat.sayi : 0, 2500);
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/20 group"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-4xl text-blue-200 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-lg text-blue-100 font-medium mb-2">
                    {stat.baslik}
                  </div>
                  <div className="text-sm text-blue-200/80">
                    {stat.altMetin}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12 text-blue-100/80 text-sm">
            © {new Date().getFullYear() - 15} Saran Lojistik. Tüm hakları saklıdır.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer