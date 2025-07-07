
import { Card, CardContent } from "@/components/ui/card";

const Audience = () => {
  const audienceFeatures = [
    {
      title: "Conteúdo Divertido",
      description: "Forte conexão com o público que busca entretenimento e diversão",
      icon: "😄",
      highlight: "Alta conversão"
    },
    {
      title: "Superação",
      description: "Audiência que se identifica com histórias de superação e resiliência",
      icon: "💪",
      highlight: "Engajamento genuíno"
    },
    {
      title: "Entretenimento Positivo",
      description: "Público que valoriza conteúdo leve e inspirador",
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perfil do <span className="gradient-text">Público</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Audiência altamente engajada <strong className="text-joao-pink">CLASSES A, B e C</strong> com potencial de conversão comprovado.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {audienceFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-joao-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-2 py-1 bg-gradient-to-r from-joao-pink/10 to-joao-purple/10 rounded-full">
                  <span className="text-xs font-semibold gradient-text">
                    {feature.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-joao-pink/5 to-joao-purple/5 rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-2">Demografia Principal</h4>
              <p className="text-sm text-gray-600">18-45 anos, <strong className="text-joao-pink">CLASSES A, B e C</strong>, Brasil e países latinos</p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-2">Interesses</h4>
              <p className="text-sm text-gray-600">Entretenimento, família, superação pessoal, motivação</p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-2">Comportamento</h4>
              <p className="text-sm text-gray-600"><strong className="text-joao-pink">Alto engajamento</strong>, compartilham conteúdo inspiracional, leais à marca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
