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
    <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        {/* Banner Section - Image à gauche, Texte à droite */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Image à gauche */}
          <div className="relative order-2 lg:order-1">
            {/* Formes décoratives bleues */}
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-40"></div>
            <img 
              src="/medicaments5bmed.jpg" 
              alt="Médicaments 5BMed" 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Texte à droite */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{translations.before.title}</h3>
                </div>
                <ul className="space-y-3">
                  {translations.before.items.map((item, index) => {
                    const Icon = beforeIcons[index] || X;
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="h-3 w-3 text-destructive" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{translations.after.title}</h3>
                </div>
                <ul className="space-y-3">
                  {translations.after.items.map((item, index) => {
                    const Icon = afterIcons[index] || Check;
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="h-3 w-3 text-secondary" />
                        </div>
                        <span className="text-sm text-card-foreground">{item}</span>
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
