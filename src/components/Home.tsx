import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { Hero } from './Hero';
import { LightboxModal } from './LightboxModal';
import {
  BUSINESS_INFO,
  SERVICES,
  WHY_QUALITIES,
  APPROACH_STEPS,
  GALLERY_ITEMS
} from '../data/content';
import {
  ArrowRight,
  Phone,
  Sparkles,
  Star,
  CheckCircle2,
  Scissors,
  Bath,
  Brush,
  ShieldCheck,
  Heart,
  Eye,
  CalendarCheck
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onSelectService }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#8E5A3C]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#8E5A3C]" />;
      case 'bath':
        return <Bath className="w-5 h-5 text-[#8E5A3C]" />;
      case 'scissors':
        return <Scissors className="w-5 h-5 text-[#8E5A3C]" />;
      case 'brush':
        return <Brush className="w-5 h-5 text-[#8E5A3C]" />;
      case 'shield-check':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#8E5A3C]" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Concise Warm Introduction */}
      <section id="introduction" className="py-16 sm:py-20 bg-[#F5EFE8]/70 border-y border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-3 block">
            Bienvenue chez Toutou Chic
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight mb-6">
            L’art du toilettage canin boutique au cœur de Lyon
          </h2>
          <p className="text-base sm:text-lg text-[#554E46] leading-relaxed mb-6 font-normal">
            Installé au 28 Rue de la République sur la Presqu'île de Lyon, Toutou Chic est un salon de toilettage
            conçu pour offrir à chaque chien un accueil prévenant et des soins sur mesure. Nous privilégions une
            approche posée et respectueuse, où la propreté, la beauté de la coupe et le bien-être de votre animal
            sont au centre de chaque geste.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4 text-sm font-medium text-[#73695E]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8E5A3C]" />
              Salon boutique à taille humaine
            </span>
            <span className="hidden sm:inline-block text-[#D1C5B6]">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8E5A3C]" />
              Soins attentifs & personnalisés
            </span>
          </div>
        </div>
      </section>

      {/* 3. Grooming Services Section */}
      <section id="services-preview" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
                Nos Prestations de Toilettage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
                Des soins précis pour chaque besoin
              </h2>
              <p className="text-base text-[#655E56] mt-3">
                Du bain régulier aux coupes structurées, découvrez nos prestations dédiées à la propreté
                et à l'élégance de votre chien.
              </p>
            </div>
            
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8E5A3C] hover:text-[#784A2F] group cursor-pointer self-start md:self-end"
            >
              <span>Consulter tous les détails</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE1D5]">
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-2 group-hover:text-[#8E5A3C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-[#8E5A3C] uppercase tracking-wider mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#615A52] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Highlights bullet list */}
                    <ul className="space-y-1.5 text-xs text-[#524B43] mb-6 pt-3 border-t border-[#F2EDE5]">
                      {service.highlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E5A3C] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    id={`learn-more-${service.id}`}
                    onClick={() => {
                      onSelectService(service.id);
                      onNavigate('services');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#DCD1C4] text-[#2C2723] text-xs font-semibold hover:bg-[#FAF8F5] hover:border-[#8E5A3C] hover:text-[#8E5A3C] transition-all text-center cursor-pointer"
                  >
                    En savoir plus & soins
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Toutou Chic Section (Strictly documented qualities) */}
      <section id="why-toutou-chic" className="py-20 bg-[#F3EFE9] border-y border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
              Nos Engagements Factuels
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
              Pourquoi choisir Toutou Chic
            </h2>
            <p className="text-base text-[#615A52] mt-3">
              Un salon boutique dédié à la sérénité de votre animal et à l'excellence des gestes de toilettage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_QUALITIES.map((quality, idx) => (
              <div
                key={idx}
                id={`why-quality-${idx}`}
                className="p-7 rounded-2xl bg-white border border-[#E6DFD4] shadow-xs hover:border-[#D5C6B5] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] border border-[#ECE3D8] flex items-center justify-center mb-5">
                  {getQualityIcon(quality.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2.5">
                  {quality.title}
                </h3>
                <p className="text-sm text-[#5E5750] leading-relaxed">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/80 border border-[#E6DFD4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-[#4E473F]">
              <CalendarCheck className="w-5 h-5 text-[#8E5A3C] shrink-0" />
              <span>
                Prise de contact directe par téléphone pour échanger sur les spécificités de votre chien.
              </span>
            </div>
            <a
              id="why-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8E5A3C] text-white text-xs font-semibold hover:bg-[#784A2F] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. Grooming Visual Gallery */}
      <section id="gallery-section" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
                Galerie Visuelle du Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
                Instants de toilettage & sérénité
              </h2>
              <p className="text-base text-[#615A52] mt-2">
                Aperçu de notre univers de soins canins et des gestes dédiés à la beauté du pelage.
              </p>
            </div>

            <span className="text-xs text-[#8A8177] bg-[#F3EFE9] px-3.5 py-1.5 rounded-full border border-[#E3DACF] self-start md:self-end">
              Visuels de présentation représentatifs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-[#E8DFD3] border border-[#E3DACF] cursor-pointer shadow-xs hover:shadow-md transition-all"
              >
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#E8DFD3] font-semibold">
                      {item.category}
                    </span>
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-serif text-lg font-bold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#DFD6CB] line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Grooming Approach (Simple, natural 4-step process) */}
      <section id="approach-section" className="py-20 bg-[#FAF8F5] border-t border-[#EAE1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
              Notre Approche
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight">
              Un déroulement fluide et rassurant
            </h2>
            <p className="text-base text-[#615A52] mt-3">
              Chaque séance suit une organisation claire pour garantir la quiétude de votre animal
              et un résultat soigné.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                id={`approach-step-${step.stepNumber}`}
                className="relative p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#8E5A3C] text-white flex items-center justify-center font-bold text-sm mb-5 shadow-xs">
                    0{step.stepNumber}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5E5750] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#F3EFE9] flex items-center gap-1.5 text-xs font-semibold text-[#8E5A3C]">
                  <span>Étape 0{step.stepNumber}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Reviews / Trust (Accurately documented facts: 4.9/5 sur Google, 42 avis) */}
      <section id="trust-reviews-section" className="py-20 bg-[#F3EFE9] border-t border-[#E5DDD2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3DACF] text-xs font-semibold text-[#8E5A3C] mb-6">
            <Star className="w-3.5 h-3.5 fill-[#F5B442] text-[#F5B442]" />
            <span>Confiance & Satisfaction vérifiée</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B18] tracking-tight mb-4">
            Une note exemplaire sur Google
          </h2>

          <div className="my-8 p-8 sm:p-10 rounded-2xl bg-white border border-[#E6DFD4] shadow-sm max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#F5B442] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
              ))}
            </div>
            
            <div className="font-serif text-5xl sm:text-6xl font-bold text-[#1E1B18] tracking-tight mb-2">
              {BUSINESS_INFO.rating} <span className="text-2xl sm:text-3xl text-[#8E8478] font-normal">/ 5</span>
            </div>

            <p className="text-base font-semibold text-[#8E5A3C] mb-4">
              Note moyenne établie sur {BUSINESS_INFO.reviewCount} avis Google
            </p>

            <p className="text-sm text-[#615A52] leading-relaxed">
              Les propriétaires de chiens à Lyon apprécient la douceur des soins, la propreté du salon
              et l'attention portée à chaque silhouette canine au 28 Rue de la République.
            </p>
          </div>

          <p className="text-xs text-[#7A7167]">
            Données authentifiées d'après la fiche établissement Google de Toutou Chic à Lyon (69002).
          </p>

        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section id="final-cta-section" className="py-20 lg:py-24 bg-[#1E1B18] text-[#F3EFE9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C49A78] mb-3 block">
            Prenez rendez-vous pour votre compagnon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Offrez à votre chien le toilettage élégant qu'il mérite
          </h2>
          <p className="text-base sm:text-lg text-[#C8BDB0] leading-relaxed mb-10 max-w-2xl mx-auto">
            Contactez notre équipe pour échanger sur les besoins de votre compagnon ou planifier sa séance
            de bain, tonte, brossage ou coupe adaptée à sa race.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-contact-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8E5A3C] text-white font-semibold text-base hover:bg-[#784A2F] shadow-md transition-colors cursor-pointer"
            >
              Écrire au salon
            </button>

            <a
              id="final-phone-btn"
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#443D36] bg-[#2A2521] text-white font-medium text-base hover:bg-[#38312B] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C49A78]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#8E8478] mt-8">
            Toutou Chic • 28 Rue de la République, 69002 Lyon
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
};
