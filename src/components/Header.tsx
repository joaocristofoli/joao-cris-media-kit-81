
import { Button } from "@/components/ui/button";

console.log('Header component loaded'); // Debug log

const Header = () => {
  console.log('Header component rendering...'); // Debug log
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset para mostrar completamente o título
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold gradient-text">João Cris</h1>
            <span className="text-sm text-gray-500">Media Kit Digital</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-joao-pink transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('numeros')} className="text-gray-700 hover:text-joao-pink transition-colors">
              Números
            </button>
            <button onClick={() => scrollToSection('investimento')} className="text-gray-700 hover:text-joao-pink transition-colors">
              Investimento
            </button>
            <Button 
              onClick={() => scrollToSection('numeros')}
              className="gradient-bg hover:opacity-90 transition-opacity"
            >
              Alcance
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection('numeros')}
              size="sm"
              className="gradient-bg hover:opacity-90 transition-opacity text-xs px-2"
            >
              Alcance
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
