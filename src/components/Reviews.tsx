import { Star } from 'lucide-react';
import { reviewData } from '@/data';

export default function Reviews() {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <Star
            key={index} 
            className="w-6 h-6 text-yellow-400 fill-current"
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-6 h-6 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
          </div>
        )}
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
          <Star
            key={`empty-${index}`}
            className="w-6 h-6 text-gray-300"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Confira a satisfação de
            <span className="text-red-600 block">nossos clientes</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="mb-4">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=google%20logo%20clean%20simple%20design&image_size=square"
                alt="Google"
                className="w-16 h-16 mx-auto mb-4"
              />
            </div>
            
            <div className="flex justify-center mb-4">
              {renderStars(reviewData.rating)}
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {reviewData.rating}/5
              </div>
              <div className="text-gray-600">
                Baseado em {reviewData.totalReviews} avaliações no {reviewData.platform}
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => {
                  const message = encodeURIComponent('Olá! Vi as excelentes avaliações da Auto Escola Neon Cotia e gostaria de saber mais sobre os cursos disponíveis.');
                  window.open(`https://wa.me/5511930869250?text=${message}`, '_blank');
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}