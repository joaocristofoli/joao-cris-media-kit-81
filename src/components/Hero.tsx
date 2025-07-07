
import { Button } from "@/components/ui/button";

console.log('Hero component loaded'); // Debug log

const Hero = () => {
  console.log('Hero component rendering...'); // Debug log
  
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Foto */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 scale-110"></div>
              <img 
                src="/lovable-uploads/f0744d5c-e940-44f6-bff7-5f8ad6372674.png"
                alt="João Cris - Influenciador de Fé e Superação"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white shadow-2xl animate-fade-in"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Olá, eu sou
                <span className="block gradient-text">João Cris</span>
              </h1>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium italic border-l-4 border-joao-pink pl-6">
                "Sobrevivi ao Improvável para Inspirar os Outros"
              </blockquote>

              <p className="text-lg text-gray-600 max-w-2xl">
                Influenciador com mais de <strong className="text-joao-pink">3.4 milhões de seguidores</strong>, 
                conhecido pela minha história de superação, fé e impacto viral nas redes sociais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all">
                <div className="text-3xl font-bold text-gray-900">+3.4</div>
                <div className="text-lg font-semibold text-gray-700">MILHÕES</div>
                <div className="text-sm text-gray-600 font-medium">Seguidores</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all">
                <div className="text-3xl font-bold text-gray-900">+500</div>
                <div className="text-lg font-semibold text-gray-700">MILHÕES</div>
                <div className="text-sm text-gray-600 font-medium">Views Totais</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
                <div className="text-3xl font-bold text-gray-900">9.5</div>
                <div className="text-lg font-semibold text-gray-700">MILHÕES</div>
                <div className="text-sm text-gray-600 font-medium">Views/Vídeo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
