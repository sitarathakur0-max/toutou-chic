import React, { useEffect, useRef } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { Phone, ArrowRight, CheckCircle2, Sparkles, Shield, Heart } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  selectedServiceId?: string | null;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const serviceRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (selectedServiceId && serviceRefs.current[selectedServiceId]) {
      setTimeout(() => {
        serviceRefs.current[selectedServiceId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [selectedServiceId]);

  return (
    <div id="services-page" className="w-full pb-20">
      
      {/* Page Header */}
      <section className="bg-[#F3EFE9] border-b border-[#E3DACF] py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD3C7] text-xs font-semibold text-[#8E5A3C] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Toutou Chic • Lyon 2e</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1B18] tracking-tight mb-5">
            Nos Soins de Toilettage
          </h1>
          
          <p className="text-base sm:text-lg text-[#5C554E] max-w-2xl mx-auto leading-relaxed">
            Découvrez nos quatre prestations fondamentales : lavage, tonte & coupe, brossage
            et toilettage adapté à la race de votre chien. Chaque soin est prodigué avec douceur,
            écoute et précision.
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                id={`anchor-btn-${s.id}`}
                onClick={() => {
                  serviceRefs.current[s.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-4 py-2 rounded-full bg-white border border-[#D5C6B5] text-xs sm:text-sm font-medium text-[#2C2723] hover:border-[#8E5A3C] hover:text-[#8E5A3C] transition-all cursor-pointer shadow-xs"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={service.id}
              id={`service-detail-${service.id}`}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className="scroll-mt-28"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-white aspect-[4/3]">
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-xs text-white text-xs font-semibold">
                      Soin 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
                    {service.subtitle}
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-base text-[#524B43] leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E8DFD3] shadow-xs mb-8">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8E5A3C] mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Points essentiels de la prestation
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#463F37]">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8E5A3C] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      id={`cta-contact-${service.id}`}
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8E5A3C] text-white text-sm font-semibold hover:bg-[#784A2F] shadow-sm transition-all cursor-pointer"
                    >
                      <span>Prendre contact pour ce soin</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      id={`phone-link-${service.id}`}
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#D5C6B5] bg-white text-[#2C2723] text-sm font-medium hover:bg-[#FAF8F5] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#8E5A3C]" />
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                  </div>

                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Reassurance Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 mt-12">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD2] text-center">
          <div className="w-12 h-12 rounded-full bg-[#F0E8DD] text-[#8E5A3C] flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-3">
            Un toilettage serein et respectueux
          </h3>
          <p className="text-sm sm:text-base text-[#615A52] max-w-xl mx-auto leading-relaxed mb-6">
            Nous adaptons le rythme de la séance au comportement de chaque chien.
            Appelez-nous au <strong className="text-[#1E1B18]">{BUSINESS_INFO.phone}</strong> pour échanger
            sur les besoins spécifiques de votre compagnon avant votre visite à Lyon.
          </p>
          <button
            id="services-reassurance-btn"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-[#8E5A3C] text-white text-sm font-semibold hover:bg-[#784A2F] transition-colors"
          >
            Formulaire de contact
          </button>
        </div>
      </section>

    </div>
  );
};
