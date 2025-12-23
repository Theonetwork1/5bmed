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
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/logo5bmed.png" 
              alt="5BMed Logo" 
              className="h-12 sm:h-20 md:h-28 lg:h-36 w-auto"
            />
          </div>
          
          {/* Navigation centrale */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              {translations.home}
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              {translations.services}
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              {translations.about}
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-colors"
            >
              {translations.contact}
            </Link>
          </nav>
          
          {/* Actions à droite */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <LanguageSwitch currentLang={lang} onSwitch={onLangSwitch} />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-3 sm:px-4 md:px-6 text-xs sm:text-sm">
              <span className="hidden sm:inline">{translations.cta}</span>
              <span className="sm:hidden">5BMed</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
