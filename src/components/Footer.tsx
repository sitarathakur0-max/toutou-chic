import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { Phone, MapPin, Star, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#191613] text-[#F3EFE9] pt-16 pb-12 border-t border-[#2D2823]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2C2722]">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8E5A3C] text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold">
                TC
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Toutou Chic
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#BDB2A6] mb-6 max-w-sm">
              Salon de toilettage canin boutique au cœur de Lyon. Nous offrons des soins attentionnés
              de lavage, tonte & coupe, brossage et toilettage adapté à la race de votre compagnon.
            </p>

            {/* Google Rating Verification Box */}
            <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-[#24201C] border border-[#352F29]">
              <div className="flex items-center text-[#F5B442]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">{BUSINESS_INFO.rating}/5</span> sur Google
                <span className="text-[#8E8478] ml-1">({BUSINESS_INFO.reviewCount} avis)</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A09384] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNavClick('home')}
                  className="text-[#D8CEBF] hover:text-[#C49A78] transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNavClick('services')}
                  className="text-[#D8CEBF] hover:text-[#C49A78] transition-colors cursor-pointer"
                >
                  Soins & Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNavClick('about')}
                  className="text-[#D8CEBF] hover:text-[#C49A78] transition-colors cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNavClick('contact')}
                  className="text-[#D8CEBF] hover:text-[#C49A78] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Grooming Services List */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A09384] mb-4">
              Soins de Toilettage
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    id={`footer-service-${s.id}`}
                    onClick={() => handleServiceClick(s.id)}
                    className="text-[#D8CEBF] hover:text-[#C49A78] transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A09384] mb-4">
              Coordonnées
            </h4>
            <div className="space-y-3.5 text-sm text-[#D8CEBF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49A78] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49A78] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={BUSINESS_INFO.phoneHref}
                  className="font-semibold text-white hover:text-[#C49A78] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="pt-2">
                <button
                  id="footer-cta-contact"
                  onClick={() => handleNavClick('contact')}
                  className="inline-block px-4 py-2 rounded-lg bg-[#8E5A3C] text-white text-xs font-medium hover:bg-[#784A2F] transition-colors"
                >
                  Prendre contact avec le salon
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8478]">
          <p>© {new Date().getFullYear()} Toutou Chic • Tous droits réservés.</p>
          <div className="flex items-center gap-1">
            <span>Toilettage canin boutique à Lyon (69002)</span>
            <Heart className="w-3 h-3 text-[#C49A78] inline-block ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
