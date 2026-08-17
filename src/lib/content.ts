export const LUMA_URL = "https://luma.com/sierrawellnessspace";

export type Lang = "fr" | "en";

export const pricing = [
  { id: "discovery", price: "49 €", note: "", popular: false },
  { id: "essential", price: "90 €", note: "/mois|/month", popular: false },
  { id: "balanced", price: "160 €", note: "/mois|/month", popular: true },
  { id: "unlimited", price: "390 €", note: "/mois|/month", popular: false },
  { id: "private", price: "50 €", note: "", popular: false },
  { id: "home", price: "65 €", note: "", popular: false },
  { id: "pack5", price: "200 €", note: "", popular: false },
  { id: "pack10", price: "480 €", note: "", popular: false },
  { id: "premium", price: "600 €", note: "/mois|/month", popular: false },
] as const;

type Dict = {
  nav: { home: string; about: string; yoga: string; pilates: string; pricing: string; studio: string; faq: string; contact: string };
  book: string;
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    cta2: string;
    banner: string;
  };
  about: { title: string; p1: string; p2: string; p3: string; caption: string };
  yoga: { title: string; intro: string; classes: { name: string; desc: string }[]; benefits: string[] };
  pilates: { title: string; intro: string; classes: { name: string; desc: string }[]; benefits: string[] };
  pricingS: { title: string; intro: string; popular: string; book: string; disclaimer: string; items: Record<string, { name: string; detail: string }> };
  studio: { title: string; address: string; access: string; ambiance: string; directions: string };
  faq: { title: string; search: string; empty: string; items: { q: string; a: string }[] };
  contact: { title: string; intro: string; name: string; email: string; message: string; send: string; sent: string; follow: string; legal: string };
};

export const content: Record<Lang, Dict> = {
  fr: {
    nav: { home: "Accueil", about: "À propos", yoga: "Yoga", pilates: "Pilates", pricing: "Tarifs", studio: "Studio", faq: "FAQ", contact: "Contact" },
    book: "Réserver un cours",
    hero: {
      eyebrow: "Yoga & Pilates · Strasbourg Cronenbourg",
      title: "Avancer doucement, à votre rythme.",
      sub: "Yoga & Pilates à Strasbourg. Cours collectifs et sessions privées, en français, en anglais et en chinois.",
      cta2: "Découvrir le studio",
      banner: "Les prochains créneaux du soir sont presque complets — pensez à réserver à l'avance.",
    },
    about: {
      title: "Sierra Wang",
      p1: "J'enseigne un yoga et un Pilates sans pression de performance. Ici, on écoute le corps avant de le pousser, et chaque séance commence là où vous en êtes ce jour-là.",
      p2: "Formée entre plusieurs cultures, j'accompagne en français, en anglais et en chinois. Beaucoup d'étudiants, d'expatriés et de jeunes actifs franchissent la porte sans jamais avoir posé le pied sur un tapis : c'est exactement pour eux que cet espace existe.",
      p3: "J'ai ouvert Sierra Wellness Space à Cronenbourg pour créer un lieu calme et lumineux, à taille humaine, où l'on progresse en douceur et en confiance. (Texte à enrichir avec Sierra.)",
      caption: "Fondatrice & professeure",
    },
    yoga: {
      title: "Yoga",
      intro: "Des cours collectifs en présentiel à Cronenbourg Est, pensés pour tous les niveaux. Les débutants sont particulièrement bienvenus.",
      classes: [
        { name: "Hatha Yoga — Gentle New Beginnings", desc: "Un rythme lent, des postures tenues, des explications claires. Idéal pour une première approche." },
        { name: "Slow Flow", desc: "Un enchaînement fluide relié au souffle, pour relâcher les tensions de la journée." },
      ],
      benefits: ["Souplesse", "Respiration", "Ancrage", "Sommeil plus calme"],
    },
    pilates: {
      title: "Pilates",
      intro: "Un Pilates au sol, précis et accessible, pour construire de la force sans brutalité.",
      classes: [
        { name: "Pilates Sculpt", desc: "Travail ciblé, tempo maîtrisé, renforcement profond du centre." },
        { name: "Full Body Pilates", desc: "Une séance complète pour la posture, la mobilité et la tonicité douce." },
      ],
      benefits: ["Renforcement", "Posture", "Tonicité douce", "Stabilité du dos"],
    },
    pricingS: {
      title: "Tarifs",
      intro: "Toutes les réservations se font sur Luma. Les formules ci-dessous reprennent l'offre actuelle du studio.",
      popular: "Le plus choisi",
      book: "Réserver",
      disclaimer: "Tarifs à revalider avant publication.",
      items: {
        discovery: { name: "Offre Découverte", detail: "3 cours en présentiel au choix, validité 1 mois" },
        essential: { name: "Essential 4 Pass", detail: "4 cours par mois" },
        balanced: { name: "Balanced 8 Pass", detail: "8 cours par mois" },
        unlimited: { name: "Unlimited Monthly Card", detail: "Accès illimité aux cours collectifs" },
        private: { name: "Session privée en studio (1:1)", detail: "Séance individuelle de 60 min sur mesure" },
        home: { name: "Session privée à domicile (1:1)", detail: "Matériel fourni, +1 personne possible" },
        pack5: { name: "Pack privé x5", detail: "Engagement court terme" },
        pack10: { name: "Pack privé x10", detail: "Programme long terme" },
        premium: { name: "Premium Coaching Membership", detail: "Cours illimités + 4 sessions privées par mois" },
      },
    },
    studio: {
      title: "Le studio",
      address: "51 Route d'Oberhausbergen, 67200 Strasbourg (Cronenbourg)",
      access: "Quartier Cronenbourg Est, accessible en tram et en bus depuis le centre de Strasbourg. Stationnement possible à proximité.",
      ambiance: "Un espace lumineux et sobre : parquet clair, lumière naturelle, petits groupes. Tapis, blocs et sangles sont disponibles sur place.",
      directions: "Ouvrir dans Google Maps",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Faut-il être expérimenté ?", a: "Non. Les cours sont ouverts à tous les niveaux et les variations sont proposées au fur et à mesure. Beaucoup d'élèves commencent ici." },
        { q: "Que dois-je apporter ?", a: "Une tenue confortable, une bouteille d'eau et une paire de chaussettes. Les tapis et accessoires sont fournis." },
        { q: "Quelle est la politique d'annulation ?", a: "Annulation possible jusqu'à quelques heures avant le cours via Luma. (Délai exact à confirmer.)" },
        { q: "Comment réserver ?", a: "Toutes les réservations passent par la page Luma du studio, en quelques clics." },
        { q: "Les cours sont-ils en français ou en anglais ?", a: "Les deux. Sierra enseigne en français, en anglais et en chinois, et adapte selon le groupe." },
      ],
    },
    contact: {
      title: "Contact",
      intro: "Une question avant de réserver ? Écrivez-moi, je réponds personnellement.",
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer",
      sent: "Merci, votre message est bien noté.",
      follow: "Suivre le studio",
      legal: "Mentions légales à compléter — statut juridique à confirmer.",
    },
  },
  en: {
    nav: { home: "Home", about: "About", yoga: "Yoga", pilates: "Pilates", pricing: "Pricing", studio: "Studio", faq: "FAQ", contact: "Contact" },
    book: "Book a class",
    hero: {
      eyebrow: "Yoga & Pilates · Strasbourg Cronenbourg",
      title: "Move gently, at your own pace.",
      sub: "Yoga & Pilates in Strasbourg. Group classes and private sessions, in French, English and Chinese.",
      cta2: "Discover the studio",
      banner: "Evening slots are filling up — booking ahead is recommended.",
    },
    about: {
      title: "Sierra Wang",
      p1: "I teach yoga and Pilates without performance pressure. We listen to the body before pushing it, and every class starts where you are that day.",
      p2: "Shaped by more than one culture, I teach in French, English and Chinese. Many students, expats and young professionals walk in having never stepped on a mat — this space exists for them.",
      p3: "I opened Sierra Wellness Space in Cronenbourg to create a calm, bright, human-sized place to progress gently and with confidence. (Copy to be refined with Sierra.)",
      caption: "Founder & teacher",
    },
    yoga: {
      title: "Yoga",
      intro: "In-person group classes in Cronenbourg Est, open to every level. Beginners especially welcome.",
      classes: [
        { name: "Hatha Yoga — Gentle New Beginnings", desc: "A slow pace, held postures, clear cues. Ideal for a first approach." },
        { name: "Slow Flow", desc: "A fluid sequence linked to the breath, to release the tension of the day." },
      ],
      benefits: ["Flexibility", "Breath", "Grounding", "Calmer sleep"],
    },
    pilates: {
      title: "Pilates",
      intro: "Precise, accessible mat Pilates — building strength without harshness.",
      classes: [
        { name: "Pilates Sculpt", desc: "Targeted work, controlled tempo, deep core strengthening." },
        { name: "Full Body Pilates", desc: "A complete session for posture, mobility and gentle tone." },
      ],
      benefits: ["Strength", "Posture", "Gentle tone", "Back stability"],
    },
    pricingS: {
      title: "Pricing",
      intro: "All bookings happen on Luma. The passes below mirror the studio's current offer.",
      popular: "Most chosen",
      book: "Book",
      disclaimer: "Prices to be confirmed before launch.",
      items: {
        discovery: { name: "Discovery Offer", detail: "3 in-studio classes of your choice, valid 1 month" },
        essential: { name: "Essential 4 Pass", detail: "4 classes per month" },
        balanced: { name: "Balanced 8 Pass", detail: "8 classes per month" },
        unlimited: { name: "Unlimited Monthly Card", detail: "Unlimited access to group classes" },
        private: { name: "Private session in studio (1:1)", detail: "Tailored 60-minute individual session" },
        home: { name: "Private session at home (1:1)", detail: "Equipment provided, +1 person possible" },
        pack5: { name: "Private pack x5", detail: "Short-term commitment" },
        pack10: { name: "Private pack x10", detail: "Long-term programme" },
        premium: { name: "Premium Coaching Membership", detail: "Unlimited classes + 4 private sessions per month" },
      },
    },
    studio: {
      title: "The studio",
      address: "51 Route d'Oberhausbergen, 67200 Strasbourg (Cronenbourg)",
      access: "Cronenbourg Est, reachable by tram and bus from central Strasbourg. Parking available nearby.",
      ambiance: "A bright, understated space: pale wood floors, natural light, small groups. Mats, blocks and straps are available on site.",
      directions: "Open in Google Maps",
    },
    faq: {
      title: "Frequently asked",
      items: [
        { q: "Do I need experience?", a: "No. Classes are open to all levels and variations are offered throughout. Many students start right here." },
        { q: "What should I bring?", a: "Comfortable clothes, a water bottle and a pair of socks. Mats and props are provided." },
        { q: "What is the cancellation policy?", a: "You can cancel up to a few hours before class via Luma. (Exact window to be confirmed.)" },
        { q: "How do I book?", a: "All bookings go through the studio's Luma page, in a few clicks." },
        { q: "Are classes in French or English?", a: "Both. Sierra teaches in French, English and Chinese, and adapts to the group." },
      ],
    },
    contact: {
      title: "Contact",
      intro: "A question before booking? Write to me — I answer personally.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sent: "Thank you, your message has been noted.",
      follow: "Follow the studio",
      legal: "Legal notice to be completed — legal status to be confirmed.",
    },
  },
};
