import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { navigationItems, services } from '@/data';




export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços da Auto Escola Neon Cotia.';
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/5511930869250?text=${encodedMessage}`, '_blank');
  };

  const handleServiceClick = (whatsappMessage: string) => {
    handleWhatsApp(whatsappMessage);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const [groupedServices, setGroupedServices] = useState<{ [key: string]: typeof services }>( {});

  useEffect(() => {
    const group = services.reduce((acc, service) => {
      const category = service.category || 'Outros'; // Default category if not specified
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as { [key: string]: typeof services });
    setGroupedServices(group);
  }, [services]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Auto Escola Neon Cotia" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Itens de navegação regulares */}
            {navigationItems.map((item) => (
              item.label === 'Serviços' ? (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={(e) => {
                    // Verifica se o mouse está saindo para o megamenu
                    const rect = e.currentTarget.getBoundingClientRect();
                    const megamenuRect = document.querySelector('.megamenu')?.getBoundingClientRect();
                    if (megamenuRect && 
                        e.clientY >= rect.bottom && 
                        e.clientX >= megamenuRect.left && 
                        e.clientX <= megamenuRect.right) {
                      return; // Não fecha se estiver indo para o megamenu
                    }
                    setTimeout(() => setIsServicesOpen(false), 100);
                  }}
                >
                  <button className="text-gray-700 hover:text-red-600 px-4 py-2 text-sm font-semibold transition-colors duration-200 flex items-center space-x-1 relative group">
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {isServicesOpen && (
                    <div 
                      className="megamenu fixed top-16 left-1/2 transform -translate-x-1/2 w-screen max-w-6xl bg-white shadow-2xl rounded-lg border border-gray-200 z-50 mt-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setTimeout(() => setIsServicesOpen(false), 100)}
                    >
                      <div className="p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Nossos Serviços</h3>
                          <p className="text-gray-600">Escolha o serviço ideal para você</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8 mb-6">
                          {Object.entries(groupedServices).map(([category, categoryServices]) => (
                            <div key={category}>
                              <h4 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">
                                {category}
                              </h4>
                              <div className="grid grid-cols-1 gap-4">
                                {categoryServices.map((service) => (
                                  <button
                                    key={service.id}
                                    onClick={() => handleServiceClick(service.whatsappMessage)}
                                    className="text-left p-3 rounded-lg hover:bg-red-50 transition-all duration-200 group"
                                  >
                                    <div className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200 text-sm">
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-gray-600 leading-tight mt-1">
                                      {service.description.substring(0, 80)}...
                                    </div>
                                  </button>
                                ))} 
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="text-center pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleWhatsApp('Olá! Gostaria de saber mais informações sobre todos os serviços da Auto Escola Neon Cotia.')}
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            💬 Falar no WhatsApp - Tire suas dúvidas
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 px-4 py-2 text-sm font-semibold transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
            

          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                item.label === 'Serviços' ? (
                  <div key={item.label} className="border-b border-gray-200 pb-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 px-4 pt-2">Nossos Serviços</h3>
                    {Object.entries(groupedServices).map(([category, categoryServices]) => (
                      <div key={category} className="mb-4">
                        <h4 className="text-md font-bold text-gray-700 mb-2 px-4">{category}</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {categoryServices.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleServiceClick(service.whatsappMessage)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 rounded-lg"
                            >
                              <div className="font-semibold">{service.title}</div>
                              <div className="text-xs text-gray-500 mt-1">{service.description.substring(0, 50)}...</div>
                            </button>
                          ))} 
                        </div>
                      </div>
                    ))} 
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 block px-4 py-3 text-base font-semibold transition-colors duration-200 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              

              
              <div className="px-2 pt-2">
                <button
                  onClick={() => handleWhatsApp()}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg font-semibold"
                >
                  <MessageCircle size={20} />
                  <span>💬 Falar no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}