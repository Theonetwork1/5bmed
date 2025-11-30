import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

interface HeroSectionProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              {translations.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {translations.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg group"
              >
                {translations.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Professional de santé" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
