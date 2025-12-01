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
      className="gap-2 border-2 hover:bg-accent"
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">
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
