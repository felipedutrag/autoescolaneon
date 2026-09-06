import { Search, AlertTriangle, CheckCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function CNHStatus() {
  const [cpf, setCpf] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleWhatsAppClick = (includeCPF = false) => {
    let message = 'Olá! Gostaria de verificar o status da minha CNH e saber mais sobre o processo de reabilitação na Auto Escola Neon Cotia.';
    if (includeCPF && cpf) {
      message = `Olá! Gostaria de verificar o status da minha CNH (CPF: ${cpf}) e saber mais sobre o processo de reabilitação na Auto Escola Neon Cotia.`;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511930869250?text=${encodedMessage}`;
    
    try {
      // Tenta abrir em nova aba
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Se o popup foi bloqueado, usa location.href como fallback
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      // Fallback para navegadores que bloqueiam window.open
      window.location.href = whatsappUrl;
    }
  };

  const handleSearch = () => {
    if (cpf.length >= 11) {
      setIsSearching(true);
      // Simular busca
      setTimeout(() => {
        setIsSearching(false);
        handleWhatsAppClick(true);
      }, 2000);
    }
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      setCpf(formatCPF(numbers));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubra se sua CNH está
            <span className="text-red-600 block">Suspensa ou Cassada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Faça sua pesquisa conosco e descubra rapidamente o status da sua habilitação. 
            Nossa equipe especializada te ajudará em todo o processo de reabilitação.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Search className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Consulta Rápida e Gratuita
              </h3>
              <p className="text-gray-600">
                Digite seu CPF para verificar o status da sua CNH
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={handleCPFChange}
                  placeholder="000.000.000-00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                  maxLength={14}
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={cpf.length < 14 || isSearching}
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Consultando...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Consultar Status da CNH</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Por que escolher a Auto Escola Neon Cotia?
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mais de 25 anos de experiência em reabilitação</li>
                    <li>• Processo simplificado e acompanhamento personalizado</li>
                    <li>• Equipe especializada em casos de suspensão e cassação</li>
                    <li>• Suporte completo durante todo o processo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Prefere falar diretamente com nossa equipe?
            </p>
            <button
              onClick={() => handleWhatsAppClick(false)}
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}