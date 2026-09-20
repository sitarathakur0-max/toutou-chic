import { ServiceItem, ApproachStep, WhyQuality, GalleryItem } from '../types';
import heroImg from '../assets/images/hero_dog_grooming_1789830194212.jpg';
import breedImg from '../assets/images/service_breed_1789830232801.jpg';
import brushingImg from '../assets/images/service_brushing_1789830215019.jpg';

export const BUSINESS_INFO = {
  name: 'Toutou Chic',
  category: 'Salon de toilettage canin boutique',
  address: '28 Rue de la République, 69002 Lyon, France',
  addressStreet: '28 Rue de la République',
  addressCity: '69002 Lyon',
  addressCountry: 'France',
  phone: '+33 4 78 32 16 54',
  phoneHref: 'tel:+33478321654',
  rating: 4.9,
  reviewCount: 42,
  description: 'Salon de toilettage canin boutique à Lyon proposant des prestations de lavage, tonte & coupe, brossage et soins adaptés à la race.',
  heroTagline: 'Le soin et le style de votre compagnon, avec élégance.',
  heroSubtitle: 'Toutou Chic est un salon de toilettage canin boutique à Lyon. Nous proposons des prestations attentives de lavage, tonte & coupe, brossage et soins adaptés à chaque race dans un cadre apaisant et soigné.',
  locationDetails: "Idéalement situé sur la Presqu'île de Lyon, au 28 Rue de la République (69002), à quelques pas des stations Cordeliers et Bellecour.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'lavage',
    title: 'Lavage',
    subtitle: 'Un bain professionnel doux et respectueux',
    shortDescription: 'Un nettoyage complet réalisé avec douceur pour assainir le pelage et offrir à votre chien un moment de propreté et de confort.',
    fullDescription: 'Le lavage professionnel chez Toutou Chic nettoie en profondeur le pelage tout en respectant l’épiderme délicat de votre chien. Chaque étape est menée avec patience et gestes rassurants pour que ce moment de toilette soit apaisant, laissant un poil sain, propre et délicatement préparé pour le séchage et la finition.',
    highlights: [
      'Nettoyage en profondeur du pelage et sous-poil',
      'Gestes doux et respectueux de la sensibilité canine',
      'Séchage attentif adapté à la texture du pelage',
      'Environnement de bain propre et sécurisé'
    ],
    imageSrc: heroImg,
    imageAlt: 'Chien soigné et propre dans le salon de toilettage Toutou Chic à Lyon'
  },
  {
    id: 'tonte-coupe',
    title: 'Tonte & coupe',
    subtitle: 'Des finitions précises pour la silhouette de votre compagnon',
    shortDescription: 'Coupe aux ciseaux et tonte soignée adaptées à la morphologie de votre compagnon pour allier esthétique, aisance et bien-être.',
    fullDescription: 'Les prestations de tonte et coupe sont exécutées avec minutie pour structurer la silhouette de votre chien, harmoniser les volumes et faciliter son aisance au quotidien. Que vous recherchiez une coupe d’entretien pratique ou une mise en forme soignée, le travail est réalisé dans le plus grand calme et avec précision.',
    highlights: [
      'Coupe personnalisée selon la morphologie',
      'Travail soigné aux ciseaux et tonte homogène',
      'Finitions attentives des pattes, contours et tête',
      'Respect du confort et de l’allure naturelle du chien'
    ],
    imageSrc: breedImg,
    imageAlt: 'Chien toiletté avec une coupe élégante dans un salon boutique à Lyon'
  },
  {
    id: 'brossage',
    title: 'Brossage',
    subtitle: 'Démêlage minutieux et entretien du poil',
    shortDescription: 'Un brossage régulier et méticuleux pour éliminer les nœuds, aérer le poil et sublimer la texture naturelle de la robe.',
    fullDescription: 'Le brossage constitue une étape fondamentale de l’hygiène canine. Réalisé avec des outils adaptés à chaque type de fourrure, il permet de démêler en douceur, de retirer les poils morts et de redonner légèreté et éclat au pelage sans irriter la peau.',
    highlights: [
      'Démêlage doux et sans tiraillement',
      'Retrait efficace des poils morts accumulés',
      'Aération du sous-poil et gainage de la robe',
      'Convient aux poils courts, mi-longs et longs'
    ],
    imageSrc: brushingImg,
    imageAlt: 'Brossage professionnel doux d’un pelage soyeux chez Toutou Chic'
  },
  {
    id: 'soins-adaptes-race',
    title: 'Toilettage adapté à la race',
    subtitle: 'Respect des spécificités et standards de chaque race',
    shortDescription: 'Chaque race possède une texture de poil et des besoins esthétiques propres. Nous adaptons chaque geste au profil de votre chien.',
    fullDescription: 'Du caniche au bichon, du cocker aux races à poil lisse ou rustique, le toilettage chez Toutou Chic prend en compte les caractéristiques morphologiques et les besoins spécifiques de chaque race. Cette approche sur mesure garantit une présentation harmonieuse conforme aux attentes de son maître.',
    highlights: [
      'Étude du standard et de la ligne de chaque race',
      'Techniques adaptées aux poils bouclés, lisses, durs ou doubles',
      'Respect des proportions et de l’expression naturelle',
      'Conseils personnalisés pour l’entretien quotidien'
    ],
    imageSrc: breedImg,
    imageAlt: 'Toilettage canin de race réalisé avec soin à Lyon'
  }
];

export const WHY_QUALITIES: WhyQuality[] = [
  {
    title: 'Cadre boutique apaisant',
    description: 'Un espace de toilettage à taille humaine en plein centre de Lyon, pensé pour minimiser le stress de votre chien.',
    iconName: 'sparkles'
  },
  {
    title: 'Attention personnalisée',
    description: 'Chaque compagnon reçoit une écoute bienveillante et des soins calmes respectant son tempérament.',
    iconName: 'heart'
  },
  {
    title: 'Lavage soigné & respectueux',
    description: 'Bains préparés avec attention pour préserver l’équilibre cutané et offrir une propreté impeccable.',
    iconName: 'bath'
  },
  {
    title: 'Tonte & coupe de précision',
    description: 'Maniement attentif des ciseaux et de la tondeuse pour révéler la beauté naturelle de votre chien.',
    iconName: 'scissors'
  },
  {
    title: 'Brossage approfondi',
    description: 'Élimination des impuretés et des nœuds pour un pelage soyeux, aéré et facile à entretenir.',
    iconName: 'brush'
  },
  {
    title: 'Soins adaptés à chaque race',
    description: 'Prise en compte scrupuleuse des particularités de chaque race pour un rendu harmonieux et fidèle.',
    iconName: 'shield-check'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    stepNumber: 1,
    title: 'Découvrez les besoins de votre chien',
    description: 'Échange initial pour comprendre les besoins spécifiques de votre compagnon, son type de poil et vos souhaits.'
  },
  {
    stepNumber: 2,
    title: 'Choisissez les soins adaptés',
    description: 'Sélection des prestations requises : lavage, tonte, brossage ou toilettage spécifique à sa race.'
  },
  {
    stepNumber: 3,
    title: 'Réalisez le toilettage',
    description: 'Séance de soins menée avec patience, douceur et rigueur technique dans notre salon boutique.'
  },
  {
    stepNumber: 4,
    title: 'Retrouvez votre compagnon soigné et élégant',
    description: 'Récupérez votre chien propre, léger, détendu et resplendissant pour vos promenades lyonnaises.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Élégance & Sérénité',
    category: 'Salon Boutique',
    imageSrc: heroImg,
    alt: 'Chien détendu et soigné dans le salon Toutou Chic',
    description: 'Ambiance chaleureuse et lumineuse au cœur de notre salon lyonnais.'
  },
  {
    id: 'g2',
    title: 'Brossage Méticuleux',
    category: 'Entretien du Poil',
    imageSrc: brushingImg,
    alt: 'Brossage soigné et démêlage doux d’un pelage canin',
    description: 'Démêlage doux pour redonner brillance et souplesse au pelage.'
  },
  {
    id: 'g3',
    title: 'Silhouette & Ligne',
    category: 'Toilettage de Race',
    imageSrc: breedImg,
    alt: 'Chien avec coupe soignée respectant les standards de race',
    description: 'Coupe harmonieuse et mise en valeur des traits distinctifs.'
  },
  {
    id: 'g4',
    title: 'Finitions Soignées',
    category: 'Tonte & Coupe',
    imageSrc: heroImg,
    alt: 'Chien soigné avec port fier dans le salon Toutou Chic',
    description: 'Chaque détail est ajusté pour le confort et l’allure du compagnon.'
  }
];
