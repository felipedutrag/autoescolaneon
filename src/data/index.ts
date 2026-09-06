import { ServiceCard, BenefitCard, TestimonialData, ContactInfo, UnitInfo, NavigationItem, ReviewData } from '@/types';

// Dados estáticos da Auto Escola Neon Cotia

export const navigationItems: NavigationItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' }
];

export const services: ServiceCard[] = [
  {
    id: 'categoria-a',
    category: 'Habilitação',
    title: 'Categoria A - Moto',
    description: 'Habilitação para motocicletas, motonetas e ciclomotores. Aulas práticas com motos modernas e instrutores especializados.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20driving%20lesson%20instructor%20teaching%20student%20modern%20bike%20safety%20gear&image_size=landscape_4_3',
    buttonText: 'Quero minha CNH A',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre a habilitação Categoria A (Moto) na Auto Escola Neon Cotia. Podem me passar informações sobre valores, documentos e prazos?'
  },
  {
    id: 'categoria-b',
    category: 'Habilitação',
    title: 'Categoria B - Carro',
    description: 'Habilitação para automóveis, camionetas e utilitários até 3.500kg. Processo completo com aulas teóricas e práticas.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=car%20driving%20lesson%20instructor%20teaching%20student%20modern%20vehicle%20professional%20training%20&image_size=landscape_4_3',
    buttonText: 'Quero minha CNH B',
    whatsappMessage: 'Olá! Tenho interesse na habilitação Categoria B (Carro) na Auto Escola Neon Cotia. Poderiam me informar sobre o processo, valores e documentação necessária?'
  },
  {
    id: 'categoria-d',
    category: 'Habilitação',
    title: 'Categoria D - Ônibus',
    description: 'Habilitação para transporte de passageiros. Perfeita para quem deseja trabalhar como motorista de ônibus ou van escolar.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bus%20driving%20lesson%20passenger%20transport%20professional%20training%20instructor%20commercial%20license&image_size=landscape_4_3',
    buttonText: 'Quero minha CNH D',
    whatsappMessage: 'Olá! Tenho interesse na habilitação Categoria D (Ônibus) na Auto Escola Neon Cotia. Podem me passar informações sobre requisitos, documentos e valores?'
  },
  {
    id: 'categoria-e',
    category: 'Habilitação',
    title: 'Categoria E - Carreta',
    description: 'Habilitação para veículos com unidade acoplada acima de 6.000kg. Ideal para motoristas de caminhão e carreta.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=truck%20driving%20lesson%20semi-truck%20trailer%20professional%20driver%20training%20commercial%20license&image_size=landscape_4_3',
    buttonText: 'Quero minha CNH E',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre a Categoria E (Carreta) na Auto Escola Neon Cotia. Quais são os requisitos e valores?'
  },
  {
    id: 'reabilitacao',
    category: 'Serviços Adicionais',
    title: 'Reabilitação',
    description: 'Processo de reabilitação para condutores que tiveram a CNH cassada. Acompanhamento completo desde as aulas teóricas até a recuperação da habilitação.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=brazilian%20person%20relearning%20to%20drive%20rehabilitation%20course%20driving%20instructor%20professional%20training%20second%20chance%20modern%20car%20classroom%20setting&image_size=landscape_4_3',
    buttonText: 'Reabilitar CNH',
    whatsappMessage: 'Olá! Preciso fazer reabilitação da minha CNH na Auto Escola Neon Cotia. Podem me explicar todo o processo, documentos necessários e valores?'
  },
  {
    id: 'renovacao',
    category: 'Serviços Adicionais',
    title: 'Renovação de CNH',
    description: 'Renovação rápida e prática da sua habilitação. Processo simplificado com todo suporte necessário.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=person%20receiving%20new%20drivers%20license%20renewal%20happy%20satisfied%20customer%20modern%20office&image_size=landscape_4_3',
    buttonText: 'Renovar CNH',
    whatsappMessage: 'Olá! Preciso renovar minha CNH e gostaria de fazer na Auto Escola Neon Cotia. Quais documentos preciso levar e qual o valor?'
  },
  {
    id: 'adicao-categoria',
    category: 'Serviços Adicionais',
    title: 'Adição de Categoria',
    description: 'Adicione uma nova categoria à sua CNH existente. Processo otimizado para quem já possui habilitação.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=driver%20upgrading%20license%20category%20professional%20training%20multiple%20vehicles%20modern%20school&image_size=landscape_4_3',
    buttonText: 'Adicionar categoria',
    whatsappMessage: 'Olá! Já tenho CNH e gostaria de adicionar uma nova categoria na Auto Escola Neon Cotia. Podem me informar sobre o processo e valores?'
  },
  {
    id: 'mudanca-categoria',
    category: 'Serviços Adicionais',
    title: 'Mudança de Categoria',
    description: 'Altere sua categoria atual para uma superior. Ideal para quem quer expandir suas possibilidades profissionais.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20driver%20changing%20license%20category%20upgrade%20training%20commercial%20vehicles&image_size=landscape_4_3',
    buttonText: 'Mudar categoria',
    whatsappMessage: 'Olá! Gostaria de fazer mudança de categoria na minha CNH na Auto Escola Neon Cotia. Quais são as opções disponíveis e valores?'
  }
];

export const benefits: BenefitCard[] = [
  {
    id: 'aulas-praticas',
    icon: 'Car',
    title: 'Aulas Práticas',
    description: 'Aulas práticas com instrutores qualificados e veículos modernos'
  },
  {
    id: 'aulas-teoricas',
    icon: 'BookOpen',
    title: 'Aulas Teóricas',
    description: 'Material didático atualizado e aulas dinâmicas para melhor aprendizado'
  },
  {
    id: 'simulados',
    icon: 'FileText',
    title: 'Simulados Completos',
    description: 'Simulados online para garantir sua aprovação no exame teórico'
  },
  {
    id: 'sem-taxa-reprovacao',
    icon: 'CheckCircle',
    title: 'Sem Taxa de Reprovação',
    description: 'Apenas pagamento da taxa estadual, sem custos ocultos ou surpresas'
  }
];

export const testimonial: TestimonialData = {
  customerName: 'Maria Silva',
  content: 'Excelente autoescola! Consegui minha habilitação rapidamente com o suporte de instrutores muito competentes. Recomendo a Auto Escola Neon Cotia para todos que querem qualidade no ensino.',
  rating: 5,
  videoUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20woman%20holding%20drivers%20license%20smiling%20testimonial%20video%20thumbnail&image_size=landscape_16_9'
};

export const contactInfo: ContactInfo = {
  address: 'R. Jorge Caixe, 371 - 10 - Jardim Nomura, Cotia - SP, 06716-690',
  phone: '(13) 3086-9250',
  whatsapp: '(13) 3086-9250',
  email: 'contato@autoescolaneon.com.br'
};

export const units: UnitInfo[] = [
  {
    id: 'cotia-centro',
    name: 'Cotia Centro',
    address: 'Rua das Flores, 123 - Centro, Cotia - SP',
    phone: '(13) 3086-9250',
    whatsapp: '(13) 3086-9250',
    hours: 'Seg a Sex: 8h às 18h | Sáb: 8h às 12h'
  },
  {
    id: 'granja-viana',
    name: 'Granja Viana',
    address: 'Av. São Camilo, 456 - Granja Viana, Cotia - SP',
    phone: '(13) 3086-9250',
    whatsapp: '(13) 3086-9250',
    hours: 'Seg a Sex: 8h às 18h | Sáb: 8h às 12h'
  },
  {
    id: 'caucaia',
    name: 'Caucaia do Alto',
    address: 'Rua Principal, 789 - Caucaia do Alto, Cotia - SP',
    phone: '(13) 3086-9250',
    whatsapp: '(13) 3086-9250',
    hours: 'Seg a Sex: 8h às 18h | Sáb: 8h às 12h'
  }
];

export const reviewData: ReviewData = {
  rating: 4.8,
  totalReviews: 247,
  platform: 'Google'
};