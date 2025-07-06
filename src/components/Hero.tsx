
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Foto */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-20 scale-110"></div>
              <img 
                src="/lovable-uploads/f0744d5c-e940-44f6-bff7-5f8ad6372674.png"
                alt="João Cris - Influenciador de Fé e Superação"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white shadow-2xl animate-fade-in"
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-8 py-4"
              >
                Entre em Contato
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">+3.4M</div>
                <div className="text-sm text-gray-600">Seguidores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">+50M</div>
                <div className="text-sm text-gray-600">Visualizações</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">9.5M</div>
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
