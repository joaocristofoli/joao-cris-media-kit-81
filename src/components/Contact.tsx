import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = {
    name: "João Vitor da Silva Christofoli",
    phone: "(11) 97396-4702",
    email: "contatojoaocris@gmail.com",
    cnpj: "53.323.287/0001-57"
  };

  const socialLinks = [
    { platform: "TikTok", handle: "@eujoaocris", url: "https://tiktok.com/@eujoaocris", icon: "🎵" },
    { platform: "YouTube", handle: "@joaocristofoli", url: "https://youtube.com/@joaocristofoli", icon: "▶️" },
    { platform: "Instagram", handle: "@eujoaocris", url: "https://instagram.com/eujoaocris", icon: "📷" },
    { platform: "Facebook", handle: "João Cris", url: "#", icon: "👥" }
  ];

  return (
    <section id="contato" className="py-12 bg-gradient-to-br from-joao-pink to-joao-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vamos Trabalhar <span className="text-white/90">Juntos?</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Entre em contato para parcerias. Alcance <strong>MILHÕES</strong> de pessoas <strong>CLASSES A, B e C</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Informações Comerciais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Nome Completo</h4>
                  <p className="text-white/90">{contactInfo.name}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Telefone</h4>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="text-white/90 hover:text-white transition-colors underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">CNPJ</h4>
                  <p className="text-white/90 font-mono">{contactInfo.cnpj}</p>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  variant="outline" 
                  className="border-white bg-white text-joao-pink hover:bg-white/90 hover:text-joao-pink font-semibold px-8 py-3"
                  onClick={() => window.open(`https://wa.me/55${contactInfo.phone.replace(/\D/g, '')}?text=Oii%20João%2C%20queria%20conversar%20contigo%20sobre%20publicidade`, '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <div className="font-semibold">{social.platform}</div>
                        <div className="text-white/80 text-sm">{social.handle}</div>
                      </div>
                    </div>
                    <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-white/80 mb-3 text-sm">Siga todas as minhas redes</p>
                <div className="text-xl font-bold">+3.4M seguidores esperando!</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Pronto para fazer a diferença?</h3>
            <p className="text-white/90 mb-4 text-base">
              Alcance <strong>MILHÕES</strong> de pessoas com mensagem autêntica e inspiradora.
            </p>
            <Button 
              size="lg"
              className="bg-white text-joao-pink hover:bg-white/90 font-semibold px-6 py-3"
              onClick={() => window.open(`https://wa.me/55${contactInfo.phone.replace(/\D/g, '')}?text=Oii%20João%2C%20queria%20conversar%20contigo%20sobre%20publicidade`, '_blank')}
            >
              Vamos Conversar!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
