import { Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "./LanguageSwitch";

interface HeaderProps {
  lang: "fr" | "ht";
  onLangSwitch: () => void;
  translations: {
    cta: string;
  };
}

export const Header = ({ lang, onLangSwitch, translations }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Pill className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              5BMed
            </span>
          </div>
          
          <div className="flex items-center gap-4">
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
