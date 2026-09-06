import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511930869250?text=Olá! Gostaria de saber mais sobre os cursos da Auto Escola Neon Cotia.', '_blank');
  };

  const handleSchedule = () => {
    window.open('https://wa.me/5511930869250?text=Gostaria de agendar uma aula na Auto Escola Neon Cotia.', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage: `url('/bg-hero.jpg')`
          }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 text-white">

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Sua autoescola de</span>
              <span className="text-white block">confiança</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
              Conquiste sua habilitação com segurança e qualidade na Auto Escola Neon Cotia com nossos instrutores especializados.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-300">Instrutores qualificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-300">Veículos modernos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-300">Preços acessíveis</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSchedule}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1"
              >
                Faça sua Matrícula
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                💬 Tire suas dúvidas
              </button>
            </div>
          </div>

          {/* Right Column - Contact Card (1/3 width, aligned right) */}
          <div className="lg:col-span-1 flex justify-end">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-white/20">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Receba sua CNH sem
                  <span className="text-red-600 block">complicação</span>
                </h2>
                <p className="text-sm text-gray-600">Processo 100% simplificado</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleSchedule}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  MATRICULE-SE
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} />
                  <span>WHATSAPP</span>
                </button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <span className="text-red-600">📞</span>
                  <span className="text-gray-700 font-medium">(11) 93086-9250</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <span className="text-red-600">📍</span>
                  <span className="text-gray-700 font-medium">R. Jorge Caixe, 371 - Jardim Nomura</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <span className="text-red-600">🕒</span>
                  <span className="text-gray-700 font-medium">Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">⭐ 4.8/5 - Mais de 247 avaliações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}