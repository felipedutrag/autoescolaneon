import { Car, BookOpen, FileText, CheckCircle } from 'lucide-react';
import { benefits } from '@/data';

const iconMap = {
  Car,
  BookOpen,
  FileText,
  CheckCircle
};

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que escolher a Auto Escola Neon Cotia?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos o melhor ensino para sua habilitação com qualidade, segurança e eficiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-0">
          {benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}