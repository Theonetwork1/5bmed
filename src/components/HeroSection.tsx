import { Button } from "@/components/ui/button";
import { Search, Pill } from "lucide-react";

interface HeroSectionProps {
  translations: {
    title: string;
    subtitle: string;
    subtitle2: string;
    cta: string;
    cta2: string;
  };
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {translations.title}{" "}
              <span className="text-primary">{translations.subtitle}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {translations.subtitle2}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 text-sm sm:text-base md:text-lg w-full sm:w-auto"
              >
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {translations.cta}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-6 sm:px-8 text-sm sm:text-base md:text-lg w-full sm:w-auto"
              >
                <Pill className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {translations.cta2}
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay mt-8 lg:mt-0">
            {/* Forme décorative bleue derrière l'image */}
            <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-40"></div>
            
            {/* Image avec ombre */}
            <div className="relative z-10">
              <img 
                src="/imagesante.png" 
                alt="Accès aux médicaments en Haïti" 
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
