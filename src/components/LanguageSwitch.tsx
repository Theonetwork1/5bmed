import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitchProps {
  currentLang: "fr" | "ht";
  onSwitch: () => void;
}

export const LanguageSwitch = ({ currentLang, onSwitch }: LanguageSwitchProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onSwitch}
      className="gap-1 sm:gap-2 border-2 hover:bg-accent px-2 sm:px-3"
    >
      <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
      <span className="font-semibold text-xs sm:text-sm">
        {currentLang === "fr" ? (
          <>
            <span className="text-primary">FR</span> | <span className="text-muted-foreground">Kreyòl</span>
          </>
        ) : (
          <>
            <span className="text-muted-foreground">FR</span> | <span className="text-primary">Kreyòl</span>
          </>
        )}
      </span>
    </Button>
  );
};
