import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os cursos da Auto Escola Neon Cotia.');
    window.open(`https://wa.me/5511930869250?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-red-600 text-white">
      {/* Seção principal do footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Auto Escola Neon Cotia" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-red-100 mb-4">
              Há 27 anos de experiência formando condutores responsáveis e seguros em Cotia e região.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-red-100">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-red-100">
              <li>Reabilitação</li>
              <li>Renovação de CNH</li>
              <li>Mudança de Categoria</li>
              <li>Aulas de Direção</li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="text-red-100 space-y-2">
              <p>Segunda a Sexta: 08:00 - 18:00</p>
              <p>Sábado: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-500/50 text-center">
            <h3 className="text-xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para tirar suas dúvidas ou clique para ver nossos serviços e dar o primeiro passo para sua independência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-white text-red-600 hover:bg-red-100 px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                    <MessageCircle size={20} />
                    <span>Fale Conosco</span>
                </button>
                <a
                    href="#servicos"
                    className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center"
                >
                    <span>Nossos Serviços</span>
                </a>
            </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-red-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm text-red-100">
            <div>
              © 2025 Auto Escola Neon Cotia. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}