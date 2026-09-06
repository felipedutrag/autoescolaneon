import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Margarida Tex",
    rating: 5,
    timeAgo: "2 meses atrás",
    content: "o Jairo Paciente empenhado e muito simpático uma benção durante meu processo. Tem total respeito com o aluno. Eu indicarei sem dúvidas esta auto escola principalmente meu instrutor durante o processo nota dez. Muito grata",
    reviews: "2 avaliações"
  },
  {
    name: "Fernanda Velli",
    rating: 5,
    timeAgo: "7 meses atrás",
    content: "Melhor auto escola de Cotia, fui por indicação e vou indicar sempre que me pedirem. Todo o pessoal é nota 1000, altamente qualificados e disponíveis para esclarecer qualquer duvida, toda a condução do meu processo não tive problemas.",
    reviews: "1 avaliação"
  },
  {
    name: "Luan Baptista",
    rating: 5,
    timeAgo: "10 meses atrás",
    content: "A escola foi nota 10 do início ao fim. Desde o primeiro atendimento quando estava orçando escolas até o momento da prova. Mayara e as outras atendentes foram sempre atenciosas e prestativas. Quanto aos instrutores, Felipe deu aulas excelentes.",
    reviews: "Local Guide · 36 avaliações"
  },
  {
    name: "Ketellyn Karoline",
    rating: 5,
    timeAgo: "um ano atrás",
    content: "Auto Escola Neon é excelente! As aulas são claras e bem preparadas, e os instrutores são super profissionais e atenciosos. O atendimento é nota 10, e o processo é rápido e eficiente. Com um alto índice de aprovação e preços justos, recomendo!",
    reviews: "3 avaliações"
  },
  {
    name: "José Bellon neto",
    rating: 5,
    timeAgo: "2 anos atrás",
    content: "Fiquei extremamente satisfeito com todo o dedicado serviço profissional providenciado pela equipe da Auto escola Neon durante o processo da minha primeira CNH. Recomendo 100% a todos! Muito obrigado!!! Autoescola nota 10",
    reviews: "5 avaliações"
  },
  {
    name: "Ana Flavia Nunes Araujo",
    rating: 5,
    timeAgo: "2 anos atrás",
    content: "Saliento a educação, dedicação respeito e paciência, instrutores incríveis, responsáveis, atenciosos e muito dedicados, vocês são nota mil. Sou muito grata por toda paciência comigo!",
    reviews: "5 avaliações"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira os depoimentos de quem já conquistou a habilitação conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-gray-500 text-sm">{testimonial.timeAgo}</span>
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.reviews}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-lg shadow-md px-6 py-3">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-gray-700 font-semibold">4.9/5 no Google</span>
            <span className="text-gray-500">• Mais de 100 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}