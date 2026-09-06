import { MapPin, Navigation } from 'lucide-react';

export default function GoogleMaps() {
  const handleDirections = () => {
    const address = 'R. Jorge Caixe, 371 - 10 - Jardim Nomura, Cotia - SP, 06716-690';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vi a localização da Auto Escola Neon Cotia no mapa e gostaria de saber mais sobre os cursos disponíveis.');
    window.open(`https://wa.me/5511930869250?text=${message}`, '_blank');
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('inicio');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="localizacao" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar! Estamos localizados em um ponto estratégico de fácil acesso em Cotia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Mapa */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8234567890123!2d-46.9234567!3d-23.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM3JzI0LjQiUyA0NsKwNTUnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auto Escola Neon Cotia - Localização"
              ></iframe>
              
              {/* Overlay com informações */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-gray-800">Auto Escola Neon Cotia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Informações e ações */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-red-600 mr-2" />
                Endereço Completo
              </h3>
              <p className="text-gray-600 mb-4">
                R. Jorge Caixe, 371 - 10<br />
                Jardim Nomura, Cotia - SP<br />
                CEP: 06716-690
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleDirections}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-6 py-3 rounded-xl font-medium text-base tracking-wide transition-all duration-300 hover:shadow-xl shadow-lg border border-slate-700 hover:border-slate-600 backdrop-blur-sm"
                >
                  Como Chegar
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-medium text-base tracking-wide transition-all duration-300 hover:shadow-xl shadow-lg border border-emerald-500 hover:border-emerald-400 backdrop-blur-sm"
                >
                  Falar no WhatsApp
                </button>
                
                <button
                  onClick={scrollToHero}
                  className="w-full bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-neutral-800 hover:to-neutral-900 text-white px-6 py-3 rounded-xl font-medium text-base tracking-wide transition-all duration-300 hover:shadow-xl shadow-lg border border-neutral-600 hover:border-neutral-500 backdrop-blur-sm"
                >
                  Voltar ao Início
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}