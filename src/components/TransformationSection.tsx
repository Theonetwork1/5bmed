import { Card } from "@/components/ui/card";
import { X, Check, Search, Car, DollarSign, Clock, AlertCircle, Zap, ShoppingCart, TrendingUp, Heart, Shield } from "lucide-react";

interface TransformationSectionProps {
  translations: {
    title: string;
    before: {
      title: string;
      items: string[];
    };
    after: {
      title: string;
      items: string[];
    };
  };
}

export const TransformationSection = ({ translations }: TransformationSectionProps) => {
  const beforeIcons = [Search, Car, DollarSign, Clock, AlertCircle];
  const afterIcons = [Zap, ShoppingCart, TrendingUp, Heart, Shield];
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {translations.title}
          </h2>
        </div>
        
        {/* Banner Section - Image à gauche, Texte à droite */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {/* Image à gauche */}
          <div className="relative order-2 lg:order-1">
            {/* Formes décoratives bleues */}
            <div className="absolute -right-8 sm:-right-12 md:-right-16 -top-8 sm:-top-12 md:-top-16 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-5 sm:-bottom-8 md:-bottom-10 -left-5 sm:-left-8 md:-left-10 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-40"></div>
            <img 
              src="/medicaments5bmed.jpg" 
              alt="Médicaments 5BMed" 
              className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Texte à droite */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-5 md:p-6 bg-card border-border">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-destructive" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">{translations.before.title}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {translations.before.items.map((item, index) => {
                    const Icon = beforeIcons[index] || X;
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-destructive" />
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
              
              <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">{translations.after.title}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {translations.after.items.map((item, index) => {
                    const Icon = afterIcons[index] || Check;
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-secondary" />
                        </div>
                        <span className="text-xs sm:text-sm text-card-foreground">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
