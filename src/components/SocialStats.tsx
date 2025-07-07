
import { Card, CardContent } from "@/components/ui/card";

const SocialStats = () => {
  const socialData = [
    {
      platform: "TikTok",
      handle: "@eujoaocris",
      followers: "1.2M",
      metric: "+22.6M curtidas",
      color: "from-pink-500 to-red-500",
      icon: "🎵"
    },
    {
      platform: "YouTube",
      handle: "@joaocristofoli",
      followers: "~1M",
      metric: "até 9.5M views/vídeo",
      color: "from-red-500 to-red-600",
      icon: "▶️"
    },
    {
      platform: "Instagram",
      handle: "@eujoaocris",
      followers: "500K",
      metric: "20M alcance mensal",
      color: "from-purple-500 to-pink-500",
      icon: "📷"
    },
    {
      platform: "Kwai",
      handle: "João Cris",
      followers: "500K",
      metric: "Engajamento alto",
      color: "from-orange-400 to-orange-500",
      icon: "🎪"
    },
    {
      platform: "Facebook",
      handle: "João Cris",
      followers: "200K",
      metric: "Alcance orgânico",
      color: "from-blue-500 to-blue-600",
      icon: "👥"
    }
  ];

  return (
    <section id="numeros" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Números das <span className="gradient-text">Redes Sociais</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8">
            Alcance comprovado para maximizar o ROI da sua marca
          </p>
          
          {/* Total Impact */}
          <div className="inline-block p-4 lg:p-6 bg-gradient-to-r from-joao-pink to-joao-purple rounded-2xl text-white mb-8 lg:mb-12">
            <div className="text-3xl lg:text-4xl font-bold mb-2">+3.4M</div>
            <div className="text-base lg:text-lg opacity-90">Total de Seguidores</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
          {socialData.map((social, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${social.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{social.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-joao-pink transition-colors">
                      {social.platform}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">{social.handle}</div>
                    <div className="text-3xl font-bold gradient-text">{social.followers}</div>
                    <div className="text-sm text-gray-600">{social.metric}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Highlight */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Destaque Instagram</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gray-900">500K</div>
              <div className="text-gray-600">Seguidores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">20M</div>
              <div className="text-gray-600">Alcance Mensal</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">20K+</div>
              <div className="text-gray-600">Visualizações Mínimas/Reels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Visualizações Mínimas/Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;
