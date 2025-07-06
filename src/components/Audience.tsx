
import { Card, CardContent } from "@/components/ui/card";

const Audience = () => {
  const audienceFeatures = [
    {
      title: "Nicho Cristão",
      description: "Forte conexão com o público evangélico e pessoas em busca de fé",
      icon: "⛪",
      highlight: "Alta conversão"
    },
    {
      title: "Superação",
      description: "Audiência que se identifica com histórias de superação e resiliência",
      icon: "💪",
      highlight: "Engajamento genuíno"
    },
    {
      title: "Testemunhos Reais",
      description: "Público que valoriza autenticidade e histórias verdadeiras",
      icon: "❤️",
      highlight: "Conexão emocional"
    },
    {
      title: "Inspiração Diária",
      description: "Seguidores que buscam motivação e propósito em suas vidas",
      icon: "🌟",
      highlight: "Fidelidade alta"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perfil do <span className="gradient-text">Público</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma audiência engajada que se conecta profundamente com mensagens de fé, 
            superação e propósito de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {audienceFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-joao-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-joao-pink/10 to-joao-purple/10 rounded-full">
                  <span className="text-sm font-semibold gradient-text">
                    {feature.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-joao-pink/5 to-joao-purple/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Demografia Principal</h4>
              <p className="text-gray-600">18-45 anos, Classes B e C, Brasil e países latinos</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Interesses</h4>
              <p className="text-gray-600">Fé, família, superação pessoal, motivação e espiritualidade</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Comportamento</h4>
              <p className="text-gray-600">Alto engajamento, compartilham conteúdo inspiracional, leais à marca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
