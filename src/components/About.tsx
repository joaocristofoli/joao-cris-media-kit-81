
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

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-joao-pink transition-colors">
                O Acidente + Cirurgia
              </h3>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                Acidente com monociclo, 9 dias em coma, cirurgia complexa com crânio na barriga.
              </p>
              <div className="inline-block px-2 py-1 bg-gradient-to-r from-joao-pink/10 to-joao-purple/10 rounded-full">
                <span className="text-xs font-semibold gradient-text">9 dias em coma</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-joao-pink transition-colors">
                Viral + Impacto
              </h3>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                História compartilhada viralizou, alcançando milhões e inspirando pessoas.
              </p>
              <div className="inline-block px-2 py-1 bg-gradient-to-r from-joao-pink/10 to-joao-purple/10 rounded-full">
                <span className="text-xs font-semibold gradient-text">+9.5M visualizações</span>
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
