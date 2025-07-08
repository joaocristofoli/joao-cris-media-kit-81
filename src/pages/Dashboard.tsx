import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Users, DollarSign, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface SiteData {
  followers: {
    instagram: string;
    tiktok: string;
    youtube: string;
    kwai: string;
    facebook: string;
  };
  pricing: {
    instagram_reels: string;
    instagram_stories: string;
    tiktok_video: string;
    youtube_shorts: string;
    multiplataforma: string;
  };
  contact: {
    phone: string;
    email: string;
    cnpj: string;
  };
  bio: string;
}

const Dashboard = () => {
  const [data, setData] = useState<SiteData>({
    followers: {
      instagram: "500 mil",
      tiktok: "1,2 milhões",
      youtube: "1 milhão",
      kwai: "500 mil",
      facebook: "200 mil"
    },
    pricing: {
      instagram_reels: "R$ 3.200",
      instagram_stories: "R$ 1.400",
      tiktok_video: "R$ 3.000",
      youtube_shorts: "R$ 3.000",
      multiplataforma: "R$ 8.000+"
    },
    contact: {
      phone: "(11) 97396-4702",
      email: "contatojoaocris@gmail.com",
      cnpj: "53.323.287/0001-57"
    },
    bio: "Alcance garantido para sua marca"
  });

  const { toast } = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem('siteData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem('siteData', JSON.stringify(data));
    toast({
      title: "Sucesso!",
      description: "Dados salvos com sucesso.",
    });
  };

  const updateField = (section: keyof SiteData, field: string, value: string) => {
    setData(prev => {
      if (typeof prev[section] === 'object' && prev[section] !== null) {
        return {
          ...prev,
          [section]: {
            ...(prev[section] as any),
            [field]: value
          }
        };
      }
      return prev;
    });
  };

  const updateBio = (value: string) => {
    setData(prev => ({
      ...prev,
      bio: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-joao-pink hover:text-joao-purple transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </Link>
          <Button onClick={saveData} className="bg-joao-pink hover:bg-joao-purple">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">
            Dashboard - <span className="gradient-text">João Cris</span>
          </h1>
          <p className="text-gray-600 text-center mt-2">Controle completo do seu media kit</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Seguidores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-joao-pink" />
                Seguidores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={data.followers.instagram}
                  onChange={(e) => updateField('followers', 'instagram', e.target.value)}
                  placeholder="500 mil"
                />
              </div>
              <div>
                <Label htmlFor="tiktok">TikTok</Label>
                <Input
                  id="tiktok"
                  value={data.followers.tiktok}
                  onChange={(e) => updateField('followers', 'tiktok', e.target.value)}
                  placeholder="1,2 milhões"
                />
              </div>
              <div>
                <Label htmlFor="youtube">YouTube</Label>
                <Input
                  id="youtube"
                  value={data.followers.youtube}
                  onChange={(e) => updateField('followers', 'youtube', e.target.value)}
                  placeholder="1 milhão"
                />
              </div>
              <div>
                <Label htmlFor="kwai">Kwai</Label>
                <Input
                  id="kwai"
                  value={data.followers.kwai}
                  onChange={(e) => updateField('followers', 'kwai', e.target.value)}
                  placeholder="500 mil"
                />
              </div>
              <div>
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={data.followers.facebook}
                  onChange={(e) => updateField('followers', 'facebook', e.target.value)}
                  placeholder="200 mil"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preços */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-joao-pink" />
                Tabela de Preços
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="reels">Instagram Reels</Label>
                <Input
                  id="reels"
                  value={data.pricing.instagram_reels}
                  onChange={(e) => updateField('pricing', 'instagram_reels', e.target.value)}
                  placeholder="R$ 3.200"
                />
              </div>
              <div>
                <Label htmlFor="stories">Instagram Stories</Label>
                <Input
                  id="stories"
                  value={data.pricing.instagram_stories}
                  onChange={(e) => updateField('pricing', 'instagram_stories', e.target.value)}
                  placeholder="R$ 1.400"
                />
              </div>
              <div>
                <Label htmlFor="tiktok_video">TikTok Vídeo</Label>
                <Input
                  id="tiktok_video"
                  value={data.pricing.tiktok_video}
                  onChange={(e) => updateField('pricing', 'tiktok_video', e.target.value)}
                  placeholder="R$ 3.000"
                />
              </div>
              <div>
                <Label htmlFor="youtube_shorts">YouTube Shorts</Label>
                <Input
                  id="youtube_shorts"
                  value={data.pricing.youtube_shorts}
                  onChange={(e) => updateField('pricing', 'youtube_shorts', e.target.value)}
                  placeholder="R$ 3.000"
                />
              </div>
              <div>
                <Label htmlFor="multiplataforma">Multiplataforma</Label>
                <Input
                  id="multiplataforma"
                  value={data.pricing.multiplataforma}
                  onChange={(e) => updateField('pricing', 'multiplataforma', e.target.value)}
                  placeholder="R$ 8.000+"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-joao-pink" />
                Bio Principal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="bio">Texto de Alcance</Label>
                <Textarea
                  id="bio"
                  value={data.bio}
                  onChange={(e) => updateBio(e.target.value)}
                  placeholder="Alcance garantido para sua marca"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-joao-pink" />
                Informações de Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="phone">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  value={data.contact.phone}
                  onChange={(e) => updateField('contact', 'phone', e.target.value)}
                  placeholder="(11) 97396-4702"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  value={data.contact.email}
                  onChange={(e) => updateField('contact', 'email', e.target.value)}
                  placeholder="contatojoaocris@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input
                  id="cnpj"
                  value={data.contact.cnpj}
                  onChange={(e) => updateField('contact', 'cnpj', e.target.value)}
                  placeholder="53.323.287/0001-57"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">💡 Como usar:</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Edite os valores de seguidores conforme crescimento das redes</li>
            <li>• Ajuste os preços conforme estratégia comercial</li>
            <li>• Atualize informações de contato quando necessário</li>
            <li>• Clique em "Salvar Alterações" para aplicar no site</li>
            <li>• Os dados ficam salvos no seu navegador</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;