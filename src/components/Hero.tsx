import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import heroImg from '../assets/images/hero_dog_grooming_1789830194212.jpg';
import { Phone, ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle warm background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFE9] border border-[#E3DACF] text-xs font-semibold text-[#8E5A3C] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Salon de toilettage canin boutique • Lyon 2e</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1B18] leading-[1.12] mb-6">
              Le soin et le style de votre compagnon, <span className="italic text-[#8E5A3C] font-normal">avec élégance.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5E5750] leading-relaxed mb-8 max-w-xl">
              Toutou Chic est un salon de toilettage canin boutique situé au cœur de Lyon.
              Nous accueillons votre chien pour des soins attentifs de lavage, tonte & coupe,
              brossage et toilettage adapté à chaque race, dans un environnement calme et bienveillant.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8E5A3C] text-white font-semibold text-base shadow-sm hover:bg-[#784A2F] hover:shadow transition-all cursor-pointer"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D5C6B5] bg-white text-[#2C2723] font-medium text-base hover:bg-[#F3EFE9] transition-all cursor-pointer"
              >
                <span>Découvrir nos soins</span>
              </button>
            </div>

            {/* Direct Phone Access & Trust Proof */}
            <div className="w-full pt-6 border-t border-[#E8DFD3] flex flex-wrap items-center justify-between gap-4 text-sm text-[#5E5750]">
              <a
                id="hero-phone-badge"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2.5 text-[#2C2723] hover:text-[#8E5A3C] font-medium transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#F3EFE9] flex items-center justify-center text-[#8E5A3C]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>
                  Réservations & renseignements : <strong className="text-[#1E1B18]">{BUSINESS_INFO.phone}</strong>
                </span>
              </a>

              {/* Google Reviews rating */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm bg-white px-3 py-1.5 rounded-full border border-[#E8DFD3]">
                <div className="flex items-center text-[#F5B442]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1E1B18]">{BUSINESS_INFO.rating}/5 sur Google</span>
                <span className="text-[#8E8478]">({BUSINESS_INFO.reviewCount} avis)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="Chien soigné avec élégance dans le salon boutique Toutou Chic à Lyon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />
                
                {/* Floating subtle overlay badge on image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#EFE8DF] shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#8E5A3C] block">
                      Toilettage Canin
                    </span>
                    <span className="text-sm font-semibold text-[#1E1B18] block">
                      Toutou Chic • Presqu'île de Lyon
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#5E5750]">
                    <MapPin className="w-3.5 h-3.5 text-[#8E5A3C]" />
                    <span>Lyon 2e</span>
                  </div>
                </div>
              </div>

              {/* Decorative subtle ambient card background */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#EFE8DF] opacity-70"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
