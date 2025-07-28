
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Briefcase, Phone, Calendar, Target, TrendingUp, Users } from "lucide-react";
import Header from "@/components/Header";

const Assessoria = () => {
  const packages = [
    {
      id: "essencial",
      name: "Pacote Essencial",
      icon: <Briefcase className="w-8 h-8 text-joao-pink" />,
      price: "R$ 2.600",
      period: "/mês",
      description: "Ideal para empresas que estão começando a estruturar sua estratégia",
      features: [
        "2 horas mensais de consultoria estratégica",
        "Até 2 reuniões mensais de até 1h cada",
        "Relatório mensal de performance",
        "Suporte via WhatsApp Business (horário comercial)",
        "Análise de concorrência regional",
        "Plano de ação trimestral"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "profissional",
      name: "Pacote Profissional",
      icon: <TrendingUp className="w-8 h-8 text-joao-pink" />,
      price: "R$ 4.800",
      period: "/mês",
      description: "Para empresas que querem acelerar seu crescimento com estratégias avançadas",
      features: [
        "5 horas mensais de consultoria estratégica",
        "Até 4 reuniões mensais de até 1h cada",
        "Relatórios quinzenais detalhados",
        "Auditoria mensal de campanhas",
        "Mentoria para equipe interna (2h/mês)",
        "Análise de mercado regional",
        "Suporte via WhatsApp com atendimento prioritário"
      ],
      popular: true,
      color: "from-joao-pink to-joao-purple"
    },
    {
      id: "premium",
      name: "Pacote Premium",
      icon: <Crown className="w-8 h-8 text-joao-pink" />,
      price: "R$ 6.800",
      period: "/mês",
      description: "Assessoria executiva completa para empresas que buscam excelência",
      features: [
        "8 horas mensais de consultoria estratégica",
        "Até 6 reuniões mensais de até 1h cada",
        "Mentoria executiva para sócios/diretoria",
        "Acompanhamento semanal com atualizações estratégicas",
        "Planejamento estratégico semestral",
        "Análises competitivas aprofundadas",
        "Participação em reuniões de board",
        "Linha direta com João Cris"
      ],
      popular: false,
      color: "from-joao-purple to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-joao-pink" />,
      title: "Estratégias Personalizadas",
      description: "Cada plano é adaptado às necessidades específicas da sua empresa"
    },
    {
      icon: <Users className="w-6 h-6 text-joao-pink" />,
      title: "Mentoria Executiva",
      description: "Desenvolvimento de liderança e capacitação da equipe interna"
    },
    {
      icon: <Calendar className="w-6 h-6 text-joao-pink" />,
      title: "Acompanhamento Contínuo",
      description: "Monitoramento regular dos resultados e ajustes estratégicos"
    },
    {
      icon: <Phone className="w-6 h-6 text-joao-pink" />,
      title: "Suporte Direto",
      description: "Acesso direto via WhatsApp e reuniões regulares"
    }
  ];

  const scrollToWhatsApp = () => {
    window.open('https://wa.me/5511973964702?text=Olá%20João%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20assessoria%20empresarial', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Assessoria <span className="gradient-text">Empresarial</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforme sua empresa com estratégias personalizadas e a expertise de quem construiu um império digital de <strong className="text-joao-pink">+3.4M seguidores</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-joao-pink/20">
                📈 <strong>Crescimento Estratégico</strong>
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-joao-pink/20">
                🎯 <strong>Mentoria Executiva</strong>
              </span>
              <span className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-joao-pink/20">
                🚀 <strong>Resultados Comprovados</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha o <span className="gradient-text">Pacote Ideal</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Planos flexíveis para diferentes necessidades empresariais
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 animate-fade-in ${
                  pkg.popular 
                    ? 'border-joao-pink shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-joao-pink/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-joao-pink to-joao-purple text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Mais Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold gradient-text mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-joao-pink flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToWhatsApp}
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      pkg.popular 
                        ? 'gradient-bg hover:opacity-90 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Nossa <span className="gradient-text">Assessoria?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiência comprovada em crescimento digital e estratégias empresariais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-joao-pink/95 to-joao-purple/95">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Transformar Sua Empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende uma conversa e descubra como nossa assessoria pode acelerar o crescimento do seu negócio
            </p>
            <Button 
              onClick={scrollToWhatsApp}
              size="lg"
              className="bg-white text-joao-pink hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">João Cris</h3>
            <p className="text-gray-400">Assessoria Empresarial Estratégica</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Contato</h4>
              <p className="text-gray-400 text-sm">WhatsApp: (11) 97396-4702</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Redes Sociais</h4>
              <p className="text-gray-400 text-sm">@eujoaocris</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Audiência</h4>
              <p className="text-gray-400 text-sm">+3.4M seguidores</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 João Cris - Assessoria Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Assessoria;
