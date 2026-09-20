import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="lightbox-card"
        className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD3]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Fermer la vue agrandie"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          <div className="md:col-span-8 bg-[#191613] flex items-center justify-center">
            <img
              src={item.imageSrc}
              alt={item.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[60vh] md:max-h-[75vh] object-contain"
            />
          </div>

          <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE9] text-xs font-semibold text-[#8E5A3C] mb-4">
                <Sparkles className="w-3 h-3" />
                <span>{item.category}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#5E5750] leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-[#E8DFD3] text-xs text-[#7A7167]">
                Visuel représentatif des prestations de toilettage canin chez Toutou Chic à Lyon.
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DFD3] mt-6">
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#8E5A3C] mb-1">
                Toutou Chic
              </span>
              <span className="block text-xs text-[#5E5750]">
                28 Rue de la République, 69002 Lyon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
