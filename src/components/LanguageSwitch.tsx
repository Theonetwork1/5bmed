import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitchProps {
  currentLang: "fr" | "ht";
  onSwitch: () => void;
}

export const LanguageSwitch = ({ currentLang, onSwitch }: LanguageSwitchProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onSwitch}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{currentLang === "fr" ? "Kreyòl" : "Français"}</span>
    </Button>
  );
};
