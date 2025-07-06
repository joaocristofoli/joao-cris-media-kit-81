
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = {
    name: "João Vitor da Silva Christofoli",
    email: "contato.joaocris@email.com",
    cnpj: "53.323.287/0001-57"
  };

  const socialLinks = [
    { platform: "TikTok", handle: "@eujoaocris", url: "https://tiktok.com/@eujoaocris", icon: "🎵" },
    { platform: "YouTube", handle: "@joaocristofoli", url: "https://youtube.com/@joaocristofoli", icon: "▶️" },
    { platform: "Instagram", handle: "@eujoaocris", url: "https://instagram.com/eujoaocris", icon: "📷" },
    { platform: "Facebook", handle: "João Cris", url: "#", icon: "👥" }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-joao-pink to-joao-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos Trabalhar <span className="text-white/90">Juntos?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entre em contato para parcerias, campanhas publicitárias e colaborações. 
            Estou pronto para levar sua marca a milhões de pessoas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
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
                  <h4 className="font-semibold text-lg mb-2">E-mail Comercial</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-white/90 hover:text-white transition-colors underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">CNPJ</h4>
                  <p className="text-white/90 font-mono">{contactInfo.cnpj}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  className="flex-1 bg-white text-joao-pink hover:bg-white/90 font-semibold"
                  onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                >
                  Enviar E-mail
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-white text-white hover:bg-white hover:text-joao-pink"
                >
                  WhatsApp Business
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
              
              <div className="mt-8 text-center">
                <p className="text-white/80 mb-4">Siga todas as minhas redes para acompanhar minha jornada</p>
                <div className="text-2xl font-bold">+3.4M seguidores esperando por você!</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronto para fazer a diferença?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Junte-se a marcas que já confiam no meu trabalho e alcance milhões de pessoas 
              com uma mensagem autêntica de fé e superação.
            </p>
            <Button 
              size="lg"
              className="bg-white text-joao-pink hover:bg-white/90 font-semibold px-8 py-4"
              onClick={() => window.location.href = `mailto:${contactInfo.email}?subject=Proposta de Parceria - João Cris`}
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
