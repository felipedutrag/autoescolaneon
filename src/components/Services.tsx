import { services } from '@/data';
import { useEffect, useState } from 'react';

export default function Services() {
  const handleServiceClick = (whatsappMessage: string) => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/551130869250?text=${encodedMessage}`, '_blank');
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
  }, []);

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Categorias A, B, D, E e outros serviços para sua habilitação com qualidade e preços acessíveis
          </p>
        </div>

        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categoryServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-red-600 font-medium mb-2">{service.category}</p>
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.description}
                    </p>
                    <button
                      onClick={() => handleServiceClick(service.whatsappMessage)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}