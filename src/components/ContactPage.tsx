import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import {
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  RotateCcw,
  Navigation
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    telephone: '',
    email: '',
    serviceInteret: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez renseigner votre nom.';
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit comporter au moins 2 caractères.';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Veuillez renseigner un numéro de téléphone.';
    } else {
      // Basic phone format check allowing french or international formats
      const cleanPhone = formData.telephone.replace(/[\s.-]/g, '');
      if (!/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
        newErrors.telephone = 'Veuillez renseigner un numéro de téléphone valide (ex : 06 12 34 56 78).';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Veuillez renseigner une adresse email valide.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez rédiger un court message pour nous présenter votre chien et vos souhaits.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Votre message doit comporter au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean, dependable client-side submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      nom: '',
      telephone: '',
      email: '',
      serviceInteret: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="contact-page" className="w-full pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#F3EFE9] border-b border-[#E3DACF] py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD3C7] text-xs font-semibold text-[#8E5A3C] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon de Toilettage Canin Boutique • Lyon</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1B18] tracking-tight mb-5">
            Nous Contacter
          </h1>

          <p className="text-base sm:text-lg text-[#5C554E] max-w-2xl mx-auto leading-relaxed">
            Pour toute question sur nos soins de toilettage (lavage, tonte, brossage, soins de race)
            ou pour convenir d'une visite pour votre compagnon, nous sommes à votre disposition.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Business Details & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-2 block">
                Coordonnées Officielles
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1E1B18] mb-6">
                Toutou Chic à Lyon
              </h2>

              <div className="space-y-6 mb-8">
                
                {/* Salon Address Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F4EE] border border-[#E8DFD3] flex items-center justify-center text-[#8E5A3C] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1E1B18] mb-1">
                        Adresse du salon
                      </h3>
                      <p className="text-sm text-[#4E473F] font-medium leading-snug mb-1">
                        {BUSINESS_INFO.address}
                      </p>
                      <p className="text-xs text-[#7A7167]">
                        Situé en plein centre de la Presqu'île (2e arrondissement de Lyon).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Telephone Contact Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F4EE] border border-[#E8DFD3] flex items-center justify-center text-[#8E5A3C] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1E1B18] mb-1">
                        Téléphone
                      </h3>
                      <a
                        id="contact-phone-link"
                        href={BUSINESS_INFO.phoneHref}
                        className="text-lg font-bold text-[#8E5A3C] hover:text-[#784A2F] transition-colors block mb-1"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-[#7A7167]">
                        Cliquez pour appeler directement depuis votre smartphone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Rating Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8E5A3C] block mb-0.5">
                        Avis vérifiés
                      </span>
                      <span className="text-sm font-bold text-[#1E1B18]">
                        {BUSINESS_INFO.rating} / 5 sur Google
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white border border-[#E3DACF] text-xs font-semibold text-[#524B43]">
                      {BUSINESS_INFO.reviewCount} avis
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Note about Appointments */}
            <div className="p-6 rounded-2xl bg-[#F3EFE9] border border-[#E3DACF] text-xs text-[#524B43] leading-relaxed">
              <p className="font-semibold text-[#1E1B18] mb-1">
                Accueil et disponibilité :
              </p>
              Pour assurer la tranquillité et l'attention nécessaire à chaque chien, nous vous invitons
              à nous contacter au préalable par téléphone ou via le formulaire ci-contre.
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD3] shadow-md">
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] mb-1 block">
                  Formulaire de renseignement
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                  Écrire à Toutou Chic
                </h2>
                <p className="text-xs sm:text-sm text-[#615A52] mt-1">
                  Remplissez ce formulaire et notre salon prendra connaissance de votre demande.
                </p>
              </div>

              {isSubmitted ? (
                /* Success Message State */
                <div
                  id="form-success-banner"
                  className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E3DACF] text-center animate-fadeIn"
                >
                  <div className="w-14 h-14 rounded-full bg-[#8E5A3C] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-2">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-sm text-[#524B43] max-w-md mx-auto leading-relaxed mb-6">
                    Merci {formData.nom}. Vos coordonnées et votre message concernant votre compagnon
                    ont bien été enregistrés. Nous vous recontacterons au {formData.telephone}.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#7A7167] max-w-md mx-auto mb-6">
                    Pour toute question urgente, n'hésitez pas à appeler directement le salon au{' '}
                    <a href={BUSINESS_INFO.phoneHref} className="font-bold text-[#8E5A3C] underline">
                      {BUSINESS_INFO.phone}
                    </a>.
                  </div>
                  <button
                    id="reset-form-btn"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5C6B5] bg-white text-xs font-semibold text-[#2C2723] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Envoyer un autre message</span>
                  </button>
                </div>
              ) : (
                /* Enquiry Form */
                <form id="enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-nom"
                      className="block text-xs font-bold uppercase tracking-wider text-[#352F29] mb-1.5"
                    >
                      Nom complet <span className="text-[#8E5A3C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-nom"
                      name="nom"
                      value={formData.nom}
                      onChange={(e) => {
                        setFormData({ ...formData, nom: e.target.value });
                        if (errors.nom) setErrors({ ...errors, nom: undefined });
                      }}
                      placeholder="Ex : Marie Dupont"
                      aria-required="true"
                      aria-invalid={!!errors.nom}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.nom
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-[#DCD1C4] bg-[#FAF8F5] focus:bg-white focus:ring-[#8E5A3C] focus:border-[#8E5A3C]'
                      }`}
                    />
                    {errors.nom && (
                      <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.nom}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="form-telephone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#352F29] mb-1.5"
                      >
                        Téléphone <span className="text-[#8E5A3C]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={(e) => {
                          setFormData({ ...formData, telephone: e.target.value });
                          if (errors.telephone) setErrors({ ...errors, telephone: undefined });
                        }}
                        placeholder="Ex : 06 12 34 56 78"
                        aria-required="true"
                        aria-invalid={!!errors.telephone}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.telephone
                            ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                            : 'border-[#DCD1C4] bg-[#FAF8F5] focus:bg-white focus:ring-[#8E5A3C] focus:border-[#8E5A3C]'
                        }`}
                      />
                      {errors.telephone && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.telephone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#352F29] mb-1.5"
                      >
                        Email <span className="text-[#8E5A3C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="Ex : marie@exemple.fr"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                            : 'border-[#DCD1C4] bg-[#FAF8F5] focus:bg-white focus:ring-[#8E5A3C] focus:border-[#8E5A3C]'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Service Selection */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wider text-[#352F29] mb-1.5"
                    >
                      Soin souhaité (facultatif)
                    </label>
                    <select
                      id="form-service"
                      name="serviceInteret"
                      value={formData.serviceInteret}
                      onChange={(e) => setFormData({ ...formData, serviceInteret: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCD1C4] bg-[#FAF8F5] text-sm text-[#2C2723] focus:bg-white focus:ring-2 focus:ring-[#8E5A3C] focus:border-[#8E5A3C] focus:outline-none transition-all"
                    >
                      <option value="">Sélectionnez une prestation de soins...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.subtitle})
                        </option>
                      ))}
                      <option value="Autre renseignement">Autre renseignement</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#352F29] mb-1.5"
                    >
                      Message <span className="text-[#8E5A3C]">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Précisez la race de votre chien, ses habitudes et les soins souhaités..."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                          : 'border-[#DCD1C4] bg-[#FAF8F5] focus:bg-white focus:ring-[#8E5A3C] focus:border-[#8E5A3C]'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="form-submit-btn"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#8E5A3C] text-white font-semibold text-sm hover:bg-[#784A2F] shadow-sm hover:shadow transition-all disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#857B71] pt-1">
                    Les informations transmises permettent au salon Toutou Chic de traiter votre demande de toilettage.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Map & Salon Location Section */}
      <section id="salon-map-section" className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E8DFD3] shadow-md">
          
          <div className="p-6 sm:p-8 border-b border-[#F0EAE1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8E5A3C] block mb-1">
                Plan & Accès
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">
                Venir au salon à Lyon (69002)
              </h3>
              <p className="text-xs sm:text-sm text-[#615A52] mt-0.5">
                {BUSINESS_INFO.address} • Presqu'île de Lyon
              </p>
            </div>

            <a
              id="google-maps-directions-link"
              href="https://maps.google.com/?q=28+Rue+de+la+R%C3%A9publique+69002+Lyon+France"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5C6B5] bg-[#FAF8F5] text-xs font-semibold text-[#2C2723] hover:bg-white hover:border-[#8E5A3C] transition-all self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 text-[#8E5A3C]" />
              <span>Ouvrir l'itinéraire</span>
            </a>
          </div>

          {/* Interactive OpenStreetMap Embed (Centered strictly on 28 Rue de la République 69002 Lyon) */}
          <div className="w-full h-80 sm:h-96 relative bg-[#EAE1D5]">
            <iframe
              title="Carte Toutou Chic 28 Rue de la République Lyon"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.832%2C45.759%2C4.839%2C45.764&amp;layer=mapnik&amp;marker=45.7618%2C4.8356"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="p-4 sm:p-6 bg-[#FAF8F5] text-xs text-[#6B645C] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Accès piéton : Rue de la République entre Bellecour et Cordeliers.</span>
            <span>Toutou Chic • +33 4 78 32 16 54</span>
          </div>

        </div>
      </section>

    </div>
  );
};
