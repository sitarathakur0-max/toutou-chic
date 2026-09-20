export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface ApproachStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface WhyQuality {
  title: string;
  description: string;
  iconName: 'sparkles' | 'heart' | 'bath' | 'scissors' | 'brush' | 'shield-check';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
  description: string;
}

export interface ContactFormData {
  nom: string;
  telephone: string;
  email: string;
  serviceInteret: string;
  message: string;
}
