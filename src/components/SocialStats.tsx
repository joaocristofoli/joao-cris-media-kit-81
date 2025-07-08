import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import facebookLogo from "@/assets/facebook-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import kwaiLogo from "@/assets/kwai-logo.jpg";
import tiktokLogo from "@/assets/tiktok-logo.png";

const SocialStats = () => {
  // Dados demográficos de idade (atualizados)
  const ageData = [
    { age: "10-17", percentage: 17.5, color: "#E3F2FD" },
    { age: "18-24", percentage: 25.8, color: "#BBDEFB" },
    { age: "25-34", percentage: 31.5, color: "#90CAF9" },
    { age: "35-44", percentage: 18.6, color: "#64B5F6" },
    { age: "45-54", percentage: 8.3, color: "#42A5F5" },
    { age: "55-64", percentage: 3.4, color: "#2196F3" },
    { age: "65+", percentage: 1.9, color: "#1E88E5" }
  ];

  // Dados de gênero
  const genderData = [
    { name: "Mulheres", value: 50.2, color: "#1565C0" },
    { name: "Homens", value: 49.8, color: "#64B5F6" }
  ];

  const socialData = [
    {
      platform: "Instagram",
      handle: "@eujoaocris",
      followers: "500 mil",
      metric: "20 milhões alcance mensal",
      color: "from-purple-500 to-pink-500",
      logo: instagramLogo
    },
    {
      platform: "TikTok",
      handle: "@eujoaocris",
      followers: "1,2 milhões",
      metric: "+22,6 milhões curtidas",
      color: "from-pink-500 to-red-500",
      logo: tiktokLogo
    },
    {
      platform: "YouTube",
      handle: "@joaocristofoli",
      followers: "1 milhão",
      metric: "até 9,5 milhões views/vídeo",
      color: "from-red-500 to-red-600",
      logo: youtubeLogo
    },
    {
      platform: "Kwai",
      handle: "João Cris",
      followers: "500 mil",
      metric: "Engajamento alto",
      color: "from-orange-400 to-orange-500",
      logo: kwaiLogo
    },
    {
      platform: "Facebook",
      handle: "João Cris",
      followers: "200 mil",
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

        {/* Instagram destaque no mobile com dados demográficos */}
        <div className="block md:hidden mb-6">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden max-w-sm mx-auto">
            <CardContent className="p-0">
              <div className={`h-2 bg-gradient-to-r ${socialData[0].color}`}></div>
              <div className="p-4 space-y-4">
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

                {/* Perfil do Público */}
                <div className="border-t pt-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 text-center">Perfil do Público</h4>
                  <p className="text-xs text-gray-600 mb-3 text-center">
                    Audiência altamente engajada e <strong className="text-joao-pink">muito diversa</strong> com potencial de conversão comprovado.
                  </p>

                  {/* Faixa Etária */}
                  <div className="mb-3">
                    <h5 className="text-xs font-medium text-gray-800 mb-2">Faixa Etária</h5>
                    <div className="space-y-1">
                      {ageData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-gray-600">{item.age} anos</span>
                          </div>
                          <span className="font-medium text-gray-900">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gênero */}
                  <div>
                    <h5 className="text-xs font-medium text-gray-800 mb-2">Gênero</h5>
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-16 h-16">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={genderData}
                              cx="50%"
                              cy="50%"
                              innerRadius={20}
                              outerRadius={30}
                              dataKey="value"
                              stroke="none"
                            >
                              {genderData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {genderData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-gray-600">{item.name}</span>
                          </div>
                          <span className="font-medium text-gray-900">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

        {/* Layout para desktop */}
        <div className="hidden md:block">
          {/* Instagram com destaque */}
          <div className="max-w-4xl mx-auto mb-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden">
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${socialData[0].color}`}></div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <img src={socialData[0].logo} alt={socialData[0].platform} className="w-10 h-10 object-contain" />
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-joao-pink transition-colors">
                      {socialData[0].platform}
                    </h3>
                  </div>
                  
                  <div className="space-y-1 text-center">
                    <div className="text-sm text-gray-600">{socialData[0].handle}</div>
                    <div className="text-3xl font-bold gradient-text">{socialData[0].followers}</div>
                    <div className="text-sm text-gray-600">{socialData[0].metric}</div>
                  </div>

                  {/* Perfil do Público */}
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">Perfil do Público</h4>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      Audiência altamente engajada e <strong className="text-joao-pink">muito diversa</strong> com potencial de conversão comprovado.
                    </p>

                    {/* Faixa Etária */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-800 mb-3">Faixa Etária</h5>
                      <div className="space-y-2">
                        {ageData.map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <span className="text-gray-600">{item.age} anos</span>
                            </div>
                            <span className="font-medium text-gray-900">{item.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gênero */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-800 mb-3">Gênero</h5>
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-24 h-24">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={genderData}
                                cx="50%"
                                cy="50%"
                                innerRadius={30}
                                outerRadius={45}
                                dataKey="value"
                                stroke="none"
                              >
                                {genderData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {genderData.map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <span className="text-gray-600">{item.name}</span>
                            </div>
                            <span className="font-medium text-gray-900">{item.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Outras redes sociais em grid 2x2 mais compacto */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {socialData.slice(1).map((social, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-joao-pink animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${social.color}`}></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
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
          </div>
        </div>

        {/* Instagram Highlight */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold gradient-text mb-3">Destaque Instagram</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">500 mil</div>
              <div className="text-xs text-gray-600">Seguidores</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">20 milhões</div>
              <div className="text-xs text-gray-600">Alcance Mensal</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">20 mil+</div>
              <div className="text-xs text-gray-600">Views Mín/Reels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">10 mil+</div>
              <div className="text-xs text-gray-600">Views Mín/Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;