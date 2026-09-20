import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Soins & Services' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD3]'
          : 'bg-[#FAF8F5] border-b border-[#F0EAE1]'
      }`}
    >
      {/* Top micro-bar with location & direct phone */}
      <div className="w-full bg-[#1E1B18] text-[#F3EFE9] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#D3C7B9]">
            <MapPin className="w-3.5 h-3.5 text-[#C49A78]" />
            <span>28 Rue de la République, 69002 Lyon</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[#A99F94]">Salon de toilettage canin boutique</span>
            <a
              id="top-phone-link"
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 font-medium text-[#F3EFE9] hover:text-[#C49A78] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C49A78]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 cursor-pointer"
          aria-label="Toutou Chic - Retour à l'accueil"
        >
          <div className="w-10 h-10 rounded-full bg-[#8E5A3C] text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:bg-[#784A2F] transition-colors">
            TC
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1B18] group-hover:text-[#8E5A3C] transition-colors">
              Toutou Chic
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-[#6B645C] font-medium">
              Salon de Toilettage • Lyon
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-[15px] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#8E5A3C] font-semibold'
                    : 'text-[#3E3832] hover:text-[#8E5A3C]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8E5A3C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            id="header-phone-cta"
            href={BUSINESS_INFO.phoneHref}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D5C6B5] text-[#2C2723] text-sm font-medium hover:bg-[#F3EFE9] transition-all"
            title="Appeler Toutou Chic au salon"
          >
            <Phone className="w-4 h-4 text-[#8E5A3C]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="header-contact-btn"
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8E5A3C] text-white text-sm font-semibold hover:bg-[#784A2F] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Nous contacter</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2C2723] hover:bg-[#F3EFE9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5A3C]"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[102px] bg-[#FAF8F5] border-b border-[#E8DFD3] shadow-xl px-6 py-6 transition-all animate-fadeIn"
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#F3EFE9] text-[#8E5A3C] font-semibold'
                      : 'text-[#3E3832] hover:bg-[#F3EFE9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-[#E8DFD3] flex flex-col gap-3">
            <a
              id="mobile-drawer-phone"
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl border border-[#D5C6B5] bg-white text-[#2C2723] font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#8E5A3C]" />
              <span>Appeler le {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="mobile-drawer-contact"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl bg-[#8E5A3C] text-white font-semibold text-center text-sm shadow hover:bg-[#784A2F] transition-colors"
            >
              Nous contacter
            </button>

            <p className="text-xs text-center text-[#6B645C] mt-2">
              28 Rue de la République, 69002 Lyon
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
