
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const storySteps = [
    {
      title: "O Acidente",
      description: "Um acidente com monociclo mudou minha vida para sempre, deixando-me em coma por 9 dias. Foi o início de uma jornada que eu nunca imaginei viver.",
      icon: "🏥",
      highlight: "9 dias em coma"
    },
    {
      title: "A Cirurgia",
      description: "Em uma cirurgia complexa, parte do meu crânio foi colocada na minha barriga para preservá-la. Uma situação inusitada que se tornaria parte da minha história.",
      icon: "⚕️",
      highlight: "Crânio na barriga"
    },
    {
      title: "A Recuperação",
      description: "De entregador a símbolo de fé e superação. Minha recuperação foi um milagre que me transformou em inspiração para milhões de pessoas.",
      icon: "🙏",
      highlight: "Fé e superação"
    },
    {
      title: "O Impacto Viral",
      description: "Compartilhei minha história nas redes sociais e o vídeo 'Fiquei 3 meses com o crânio na barriga' viralizou, alcançando milhões e tocando corações.",
      icon: "📱",
      highlight: "+9.5M visualizações"
    }
  ];

  return (
    <section id="sobre" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Minha <span className="gradient-text">História</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De um acidente que mudou tudo para uma missão de inspirar <strong className="text-joao-pink">MILHÕES</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-3 border-red-200 hover:border-red-400 animate-fade-in bg-gradient-to-br from-red-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                O Acidente + Cirurgia
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed font-medium">
                Um acidente que mudou tudo: <strong className="text-red-600">9 dias em coma</strong>, uma cirurgia 
                complexa onde meu crânio ficou <strong className="text-red-600">3 meses na barriga</strong>. 
                Uma experiência que transformou dor em propósito.
              </p>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-300">
                <span className="text-sm font-bold text-red-700">Superação Real</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-3 border-purple-200 hover:border-purple-400 animate-fade-in bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Viral + Profissional
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed font-medium">
                <strong className="text-purple-600">3 anos criando conteúdo profissional</strong> que inspira milhões. 
                História autêntica que viralizou com <strong className="text-purple-600">+9.5M visualizações</strong>, 
                construindo uma audiência fiel e engajada.
              </p>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-300">
                <span className="text-sm font-bold text-purple-700">Criador Profissional</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-joao-pink/5 to-joao-purple/5 rounded-2xl p-6">
          <blockquote className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            "A fé me levantou"
          </blockquote>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Hoje uso minha plataforma para mostrar que sempre há uma forma de superar obstáculos com fé e propósito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
