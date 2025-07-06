
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingTable = () => {
  const pricingData = [
    {
      platform: "Instagram",
      packages: [
        { format: "Combo Viral", deliverables: "1 Reels + 3 Stories", price: "R$ 15.000", highlight: true },
        { format: "Reels", deliverables: "Vídeo até 90s", price: "R$ 12.000" },
        { format: "Stories", deliverables: "3 de 15s", price: "R$ 4.500" },
        { format: "Feed", deliverables: "Imagem ou Carrossel", price: "R$ 6.000" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      platform: "TikTok",
      packages: [
        { format: "Vídeo Dedicado", deliverables: "Até 60s", price: "R$ 18.000", highlight: true }
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      platform: "YouTube",
      packages: [
        { format: "Vídeo Dedicado", deliverables: "5-8min", price: "R$ 25.000", highlight: true },
        { format: "Integração", deliverables: "60–90s inserção", price: "R$ 14.000" },
        { format: "Shorts", deliverables: "Até 60s", price: "R$ 9.000" }
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const campaignPackage = {
    title: "Campanha Multiplataforma",
    description: "IG + TikTok + YT Shorts",
    price: "R$ 35.000+",
    benefits: [
      "Maior alcance e impacto",
      "Narrativa consistente",
      "Otimização por plataforma",
      "Relatório completo de resultados"
    ]
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="investimento" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proposta de <span className="gradient-text">Investimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valores de investimento para parcerias e campanhas publicitárias. 
            Todos os valores são de partida e podem ser personalizados.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingData.map((platform, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-0">
                <div className={`h-1 bg-gradient-to-r ${platform.color} mb-4`}></div>
                <CardTitle className="text-2xl font-bold text-center gradient-text">
                  {platform.platform}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {platform.packages.map((pkg, pkgIndex) => (
                  <div 
                    key={pkgIndex}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      pkg.highlight 
                        ? 'border-joao-pink bg-gradient-to-r from-joao-pink/5 to-joao-purple/5' 
                        : 'border-gray-200 hover:border-joao-pink/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{pkg.format}</h4>
                      {pkg.highlight && (
                        <span className="text-xs px-2 py-1 bg-joao-pink text-white rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{pkg.deliverables}</p>
                    <div className="text-xl font-bold gradient-text">{pkg.price}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campaign Package Highlight */}
        <Card className="bg-gradient-to-r from-joao-pink to-joao-purple text-white mb-12 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">{campaignPackage.title}</h3>
            <p className="text-xl mb-4 opacity-90">{campaignPackage.description}</p>
            <div className="text-4xl font-bold mb-6">{campaignPackage.price}</div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {campaignPackage.benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="bg-white text-joao-pink hover:bg-gray-100 font-semibold px-8 py-4"
            >
              Solicitar Proposta Personalizada
            </Button>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <div className="text-center bg-white rounded-2xl p-8 border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que investir em João Cris?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-joao-pink text-3xl font-bold mb-2">+3.4M</div>
              <div className="text-gray-600">Seguidores genuínos e engajados</div>
            </div>
            <div>
              <div className="text-joao-pink text-3xl font-bold mb-2">9.5M</div>
              <div className="text-gray-600">Visualizações por vídeo no YouTube</div>
            </div>
            <div>
              <div className="text-joao-pink text-3xl font-bold mb-2">20K+</div>
              <div className="text-gray-600">Visualizações mínimas por Reels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
