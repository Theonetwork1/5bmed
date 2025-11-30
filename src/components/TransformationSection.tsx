import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import pharmacyImage from "@/assets/pharmacy-digital.jpg";

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
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">{translations.before.title}</h3>
            </div>
            <ul className="space-y-4">
              {translations.before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">{translations.after.title}</h3>
            </div>
            <ul className="space-y-4">
              {translations.after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img 
            src={pharmacyImage} 
            alt="Pharmacie digitale" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
