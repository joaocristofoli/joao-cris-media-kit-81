
import { Card, CardContent } from "@/components/ui/card";
import facebookLogo from "@/assets/facebook-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import kwaiLogo from "@/assets/kwai-logo.jpg";
import tiktokLogo from "@/assets/tiktok-logo.png";

const SocialStats = () => {
  const socialData = [
    {
      platform: "Instagram",
      handle: "@eujoaocris",
      followers: "500K",
      metric: "20M alcance mensal",
      color: "from-purple-500 to-pink-500",
      logo: instagramLogo
    },
    {
      platform: "TikTok",
      handle: "@eujoaocris",
      followers: "1.2M",
      metric: "+22.6M curtidas",
      color: "from-pink-500 to-red-500",
      logo: tiktokLogo
    },
    {
      platform: "YouTube",
      handle: "@joaocristofoli",
      followers: "1M",
      metric: "até 9.5M views/vídeo",
      color: "from-red-500 to-red-600",
      logo: youtubeLogo
    },
    {
      platform: "Kwai",
      handle: "João Cris",
      followers: "500K",
      metric: "Engajamento alto",
      color: "from-orange-400 to-orange-500",
      logo: kwaiLogo
    },
    {
      platform: "Facebook",
      handle: "João Cris",
      followers: "200K",
      metric: "Alcance orgânico",
      color: "from-blue-500 to-blue-600",
      logo: facebookLogo
    }
  ];

  return (
    <section id="numeros" className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">3.4 Milhões</span> de Seguidores
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 font-semibold">
            Alcance garantido para sua marca
          </p>
        </div>

        {/* Instagram destaque no mobile */}
        <div className="block md:hidden mb-6">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden max-w-sm mx-auto">
            <CardContent className="p-0">
              <div className={`h-2 bg-gradient-to-r ${socialData[0].color}`}></div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <img src={socialData[0].logo} alt={socialData[0].platform} className="w-8 h-8 object-contain" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-joao-pink transition-colors">
                    {socialData[0].platform}
                  </h3>
                </div>
                
                <div className="space-y-1 text-center">
                  <div className="text-xs text-gray-600">{socialData[0].handle}</div>
                  <div className="text-2xl font-bold gradient-text">{socialData[0].followers}</div>
                  <div className="text-xs text-gray-600">{socialData[0].metric}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid para outras redes sociais no mobile */}
        <div className="block md:hidden grid grid-cols-2 gap-4 mb-8">
          {socialData.slice(1).map((social, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${social.color}`}></div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <img src={social.logo} alt={social.platform} className="w-6 h-6 object-contain" />
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-joao-pink transition-colors">
                      {social.platform}
                    </h3>
                  </div>
                  
                  <div className="space-y-1 text-center">
                    <div className="text-xs text-gray-600">{social.handle}</div>
                    <div className="text-lg font-bold gradient-text">{social.followers}</div>
                    <div className="text-xs text-gray-600">{social.metric}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Grid original para desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {socialData.map((social, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${social.color}`}></div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <img src={social.logo} alt={social.platform} className="w-8 h-8 object-contain" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-joao-pink transition-colors">
                      {social.platform}
                    </h3>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">{social.handle}</div>
                    <div className="text-2xl font-bold gradient-text">{social.followers}</div>
                    <div className="text-xs text-gray-600">{social.metric}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Highlight */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold gradient-text mb-3">Destaque Instagram</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">500K</div>
              <div className="text-xs text-gray-600">Seguidores</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">20M</div>
              <div className="text-xs text-gray-600">Alcance Mensal</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">20K+</div>
              <div className="text-xs text-gray-600">Views Mín/Reels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-xs text-gray-600">Views Mín/Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;
