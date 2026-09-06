export default function Infrastructure() {

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <div className="relative w-full h-[500px]">
            <img
              src="/estrutura.jpg"
              alt="Infraestrutura da Auto Escola Neon Cotia"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Coluna do Texto */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Infraestrutura
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Auto Escola Neon teve início de suas atividades em 6 de agosto de 1998, hoje completando 27 anos formando motoristas conscientes e responsáveis no trânsito. Investimos em uma infraestrutura moderna e completa para garantir a melhor experiência de aprendizado para nossos alunos.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sala de Aula Equipada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossa sala é climatizada e equipada com recursos audiovisuais de última geração, proporcionando um ambiente confortável e eficaz para o aprendizado teórico.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Frota de Veículos Moderna
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contamos com uma frota de veículos novos e bem conservados, todos com direção hidráulica, ar-condicionado e duplo comando, garantindo segurança e conforto durante as aulas práticas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Simulados de provas teóricas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos simulados de provas teóricas que recriam as condições reais do exame, permitindo que os alunos pratiquem e se preparem adequadamente para a aprovação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}