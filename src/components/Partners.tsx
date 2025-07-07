import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface Partner {
  name: string;
  logo: string;
}

const Partners = () => {
  const [currentPartners, setCurrentPartners] = useState<Partner[]>([
    { name: "Burger King", logo: "/lovable-uploads/e1ea7051-e517-4b51-9592-bd6707bc75c7.png" },
    { name: "Bluefit", logo: "/lovable-uploads/2343ca2c-9519-408b-ac8c-b8787740349a.png" },
    { name: "Filezão", logo: "/lovable-uploads/e07f8eb0-984f-434e-b565-f64fe4f0ae39.png" },
    { name: "Santo Mana", logo: "/lovable-uploads/0ad759f0-17b5-482b-983d-df444c46d2d2.png" }
  ]);

  useEffect(() => {
    const savedPartners = localStorage.getItem('partners');
    if (savedPartners) {
      setCurrentPartners(JSON.parse(savedPartners));
    }
  }, []);

  const futurePartners = Array(8).fill({ name: "Futuro Parceiro", logo: "+" });

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="gradient-text">Parceiros</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Marcas que confiam no nosso alcance e engajamento para <strong className="text-joao-pink">maximizar resultados</strong>
          </p>
        </div>

        {/* Parceiros Atuais */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-8">Parceiros Atuais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {currentPartners.map((partner, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-joao-pink/10 to-joao-purple/10 rounded-full flex items-center justify-center text-3xl border-2 border-joao-pink/20 group-hover:border-joao-pink/50 transition-all">
                    {partner.logo.startsWith('http') ? (
                      <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-cover rounded-full" />
                    ) : (
                      <span>{partner.logo}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Espaço para Futuros Parceiros */}
        <div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-8">Próximos Parceiros</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {futurePartners.map((partner, index) => (
              <div 
                key={index}
                className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-joao-pink/10 hover:to-joao-purple/10 rounded-full flex items-center justify-center text-gray-400 hover:text-joao-pink border-2 border-dashed border-gray-300 hover:border-joao-pink/50 transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-lg font-bold">{partner.logo}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Espaços disponíveis para sua marca
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;