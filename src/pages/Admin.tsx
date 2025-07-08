import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Partner {
  name: string;
  logo: string;
}

const Admin = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedPartners = localStorage.getItem('partners');
    if (savedPartners) {
      setPartners(JSON.parse(savedPartners));
    } else {
      // Parceiros padrão
      setPartners([
        { name: "Burger King", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6PhXrEEszanWfEbYteDU5BS9AOjMGcz9Iy3jPPGy6Ey4HZRdUGb1Dhg&s=10" },
        { name: "Bluefit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VqhlxfnzU4DJ37EZN5t9WjJ1eUnRXa_Lnum9yaDXNnrvFmOwk5DXJRpt&s=10" },
        { name: "Filezão", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg2USjgVa5e4PsxK_QoCpR_Mgpd6j0rbPpLPorwRDtM-i07dx6IHJu9s&s=10" },
        { name: "Santo Mana", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT434W22BF8Jq1Inm081GusZz1_6BBotKxdDQ&s" }
      ]);
    }
  }, []);

  const savePartners = () => {
    localStorage.setItem('partners', JSON.stringify(partners));
    toast({
      title: "Sucesso!",
      description: "Parceiros salvos com sucesso.",
    });
  };

  const updatePartner = (index: number, field: keyof Partner, value: string) => {
    const newPartners = [...partners];
    newPartners[index] = { ...newPartners[index], [field]: value };
    setPartners(newPartners);
  };

  const addPartner = () => {
    setPartners([...partners, { name: "Novo Parceiro", logo: "🤝" }]);
  };

  const removePartner = (index: number) => {
    const newPartners = partners.filter((_, i) => i !== index);
    setPartners(newPartners);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-joao-pink hover:text-joao-purple transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Painel Admin - <span className="gradient-text">Parceiros</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Gerenciar Parceiros</h3>
              <div className="flex gap-2">
                <Button onClick={addPartner} variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
                <Button onClick={savePartners} className="bg-joao-pink hover:bg-joao-purple">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {partners.map((partner, index) => (
                <Card key={index} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                      <Label htmlFor={`name-${index}`}>Nome do Parceiro</Label>
                      <Input
                        id={`name-${index}`}
                        value={partner.name}
                        onChange={(e) => updatePartner(index, 'name', e.target.value)}
                        placeholder="Nome do parceiro"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`logo-${index}`}>Logo (URL da imagem ou emoji)</Label>
                      <Input
                        id={`logo-${index}`}
                        value={partner.logo}
                        onChange={(e) => updatePartner(index, 'logo', e.target.value)}
                        placeholder="https://exemplo.com/logo.png ou 🤝"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-joao-pink/10 to-joao-purple/10 rounded-full flex items-center justify-center border-2 border-joao-pink/20">
                        {partner.logo.startsWith('http') ? (
                          <img src={partner.logo} alt={partner.name} className="w-8 h-8 object-cover rounded-full" />
                        ) : (
                          <span className="text-lg">{partner.logo}</span>
                        )}
                      </div>
                      <Button 
                        onClick={() => removePartner(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Dicas:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Use URLs de imagens (ex: https://exemplo.com/logo.png) para logos reais</li>
                <li>• Use emojis (ex: 🤝, 🏢, 💼) como placeholders</li>
                <li>• Clique em "Salvar" para aplicar as mudanças no site</li>
                <li>• As imagens ficam salvas no seu navegador</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;