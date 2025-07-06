
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
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Minha <span className="gradient-text">História</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada de superação que transformou dor em propósito, 
            e um acidente em uma missão de inspirar milhões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {storySteps.map((step, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-joao-pink transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-joao-pink/10 to-joao-purple/10 rounded-full">
                  <span className="text-sm font-semibold gradient-text">
                    {step.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            "A fé me levantou"
          </blockquote>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hoje, uso minha plataforma para mostrar que não importa o tamanho do obstáculo, 
            sempre há uma forma de superá-lo com fé, determinação e propósito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
