import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import heroImg from '../assets/images/hero_dog_grooming_1789830194212.jpg';
import breedImg from '../assets/images/service_breed_1789830232801.jpg';
import { Phone, MapPin, Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="w-full pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#F3EFE9] border-b border-[#E3DACF] py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD3C7] text-xs font-semibold text-[#8E5A3C] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Toutou Chic • Lyon 2e</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1B18] tracking-tight mb-5">
            À propos de Toutou Chic
          </h1>

          <p className="text-base sm:text-lg text-[#5C554E] max-w-2xl mx-auto leading-relaxed">
            Un salon boutique de toilettage canin situé au 28 Rue de la République à Lyon,
            pensé pour le bien-être, la propreté et l'allure élégante de votre compagnon à quatre pattes.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Salon Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE1D5]">
              <img
                src={heroImg}
                alt="Salon boutique Toutou Chic à Lyon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 p-4 rounded-xl bg-[#F3EFE9] border border-[#E3DACF] flex items-center gap-3 text-xs text-[#524B43]">
              <MapPin className="w-4 h-4 text-[#8E5A3C] shrink-0" />
              <span>Adresse du salon : 28 Rue de la République, 69002 Lyon (Presqu'île)</span>
            </div>
          </div>

          {/* Copy and Salon Values */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
              L'Esprit du Salon
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight mb-6">
              Une attention bienveillante pour chaque chien
            </h2>

            <p className="text-base text-[#524B43] leading-relaxed mb-4">
              Toutou Chic s'attache à offrir un environnement de toilettage calme et soigné au cœur de Lyon.
              Parce que chaque chien possède une sensibilité propre et un pelage particulier, nos soins
              sont pensés pour respecter son confort et son rythme tout au long de la séance.
            </p>

            <p className="text-base text-[#524B43] leading-relaxed mb-6">
              Que ce soit pour un lavage rafraîchissant, une tonte soignée, un brossage approfondi
              ou un toilettage fidèle aux critères de sa race, nous veillons à la précision des gestes
              et à la propreté irréprochable des installations.
            </p>

            {/* Documented Core Pillars */}
            <div className="space-y-3 pt-2 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E5A3C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#38322B]">
                  <strong>Atmosphère boutique :</strong> un espace mesuré et serein favorisant la tranquillité des animaux.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E5A3C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#38322B]">
                  <strong>Soins complets :</strong> lavage, coupe aux ciseaux et tonte, brossage doux et démêlage méticuleux.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8E5A3C] shrink-0 mt-0.5" />
                <span className="text-sm text-[#38322B]">
                  <strong>Respect des spécificités raciales :</strong> adaptation des techniques aux différentes morphologies et textures de poil.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="about-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-[#8E5A3C] text-white text-sm font-semibold hover:bg-[#784A2F] transition-colors cursor-pointer"
              >
                Nous contacter
              </button>

              <a
                id="about-phone-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#D5C6B5] bg-white text-[#2C2723] text-sm font-medium hover:bg-[#FAF8F5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8E5A3C]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Boutique Experience Focus */}
      <section className="bg-[#FAF8F5] border-y border-[#EAE1D5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
              La Prise en Charge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight">
              Nos 4 piliers de soins canins
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2">
                1. Le Lavage
              </h3>
              <p className="text-sm text-[#615A52] leading-relaxed">
                Bains bienveillants et shampoing doux pour éliminer les impuretés tout en préservant le confort cutané du chien.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2">
                2. La Tonte & Coupe
              </h3>
              <p className="text-sm text-[#615A52] leading-relaxed">
                Travail soigné de la ligne, égalisation des volumes et coupe adaptée au mode de vie et à l'esthétique de votre animal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2">
                3. Le Brossage
              </h3>
              <p className="text-sm text-[#615A52] leading-relaxed">
                Démêlage minutieux, aération de la fourrure et extraction des poils morts pour préserver la douceur de la robe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E1B18] mb-2">
                4. Soins de Race
              </h3>
              <p className="text-sm text-[#615A52] leading-relaxed">
                Prise en considération des particularités propres à chaque race de chien pour une allure élégante et conforme.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Location Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 mt-16 text-center">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E5DDD2] shadow-sm">
          <Heart className="w-8 h-8 text-[#8E5A3C] mx-auto mb-3" />
          <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-2">
            Rendez-nous visite à Lyon
          </h3>
          <p className="text-sm sm:text-base text-[#615A52] max-w-xl mx-auto mb-6">
            Toutou Chic vous accueille au 28 Rue de la République (69002 Lyon).
            N'hésitez pas à nous joindre directement par téléphone pour tout renseignement.
          </p>
          <a
            id="about-call-link"
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8E5A3C] text-white text-sm font-semibold hover:bg-[#784A2F] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Appeler le {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
