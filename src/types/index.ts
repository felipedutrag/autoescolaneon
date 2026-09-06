// Tipos TypeScript para os dados da aplicação Auto Escola Neon Cotia

export interface ServiceCard {
  id: string;
  category?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  whatsappMessage: string;
}

export interface BenefitCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialData {
  customerName: string;
  content: string;
  rating: number;
  videoUrl?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface UnitInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ReviewData {
  rating: number;
  totalReviews: number;
  platform: string;
}