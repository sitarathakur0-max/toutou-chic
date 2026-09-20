import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Dynamic SEO page title & meta descriptions
  useEffect(() => {
    let title = 'Toutou Chic – Salon de Toilettage Canin Boutique à Lyon';
    let metaDesc = 'Salon de toilettage canin boutique à Lyon (69002). Lavage, tonte & coupe, brossage et soins adaptés à la race au 28 Rue de la République.';

    switch (currentPage) {
      case 'services':
        title = 'Nos Soins de Toilettage Canin – Toutou Chic Lyon';
        metaDesc = 'Découvrez les prestations Toutou Chic à Lyon : bain & lavage doux, tonte & coupe aux ciseaux, brossage et soins adaptés à la race.';
        break;
      case 'about':
        title = 'À Propos de Toutou Chic – Salon de Toilettage Boutique à Lyon';
        metaDesc = 'Présentation de Toutou Chic, salon de toilettage canin boutique situé au 28 Rue de la République à Lyon 2e.';
        break;
      case 'contact':
        title = 'Contact & Plan d’Accès – Toutou Chic Lyon (69002)';
        metaDesc = 'Prenez contact avec Toutou Chic, salon de toilettage canin à Lyon. Formulaire, téléphone (+33 4 78 32 16 54) et plan d’accès.';
        break;
      case 'home':
      default:
        title = 'Toutou Chic – Salon de Toilettage Canin Boutique à Lyon';
        metaDesc = 'Salon de toilettage canin boutique à Lyon (69002). Lavage, tonte & coupe, brossage et soins adaptés à la race au 28 Rue de la République.';
        break;
    }

    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', metaDesc);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242220] selection:bg-[#E8D8C8]">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
