
import { Button } from "@/components/ui/button";

console.log('Hero component loaded'); // Debug log

const Hero = () => {
  console.log('Hero component rendering...'); // Debug log
  
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Foto */}
          <div className="flex-1 flex justify-center">
            <img 
              src="https://yt3.googleusercontent.com/K3XAqyuYQ_UQdvC-gzaK7R8HSsbFd8RKFleV9g61rfz0kp1hA1bb5pfQFXPz6I5iQRwJRip6KQ=s900-c-k-c0x00ffffff-no-rj"
              alt="João Cris - Influenciador de Fé e Superação"
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded successfully')}
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Olá, eu sou
                <span className="block text-primary">João Cris</span>
              </h1>
              
              <p className="text-xl text-gray-600 italic">
                "Sobrevivi ao Improvável para Inspirar os Outros"
              </p>

              <p className="text-lg text-gray-600 max-w-2xl">
                Influenciador com mais de <strong className="text-primary">3.4 milhões de seguidores</strong>, 
                conhecido pela minha história de superação, fé e impacto viral nas redes sociais.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-gray-900">3.4M</div>
                <div className="text-sm text-gray-600">Seguidores</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-gray-900">500M</div>
                <div className="text-sm text-gray-600">Views Totais</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-gray-900">9.5M</div>
                <div className="text-sm text-gray-600">Views/Vídeo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
