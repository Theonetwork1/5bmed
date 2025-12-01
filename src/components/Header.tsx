import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "./LanguageSwitch";
import { Link } from "react-router-dom";

interface HeaderProps {
  lang: "fr" | "ht";
  onLangSwitch: () => void;
  translations: {
    home: string;
    services: string;
    pharmacies: string;
    about: string;
    contact: string;
    cta: string;
  };
}

export const Header = ({ lang, onLangSwitch, translations }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/5 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/fbmed-logo (300 x 100 px).png" 
              alt="5BMed Logo" 
              className="h-14 w-auto"
            />
          </div>
          
          {/* Navigation centrale */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.home}
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.services}
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.about}
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {translations.contact}
            </Link>
          </nav>
          
          {/* Actions à droite */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <LanguageSwitch currentLang={lang} onSwitch={onLangSwitch} />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              {translations.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
