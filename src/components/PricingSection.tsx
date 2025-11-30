import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  translations: {
    title: string;
    subtitle: string;
    free: string;
    forCustomers: string;
    forPharmacies: string;
    features: string[];
    pharmacyFeatures: string[];
    cta: string;
  };
}

export const PricingSection = ({ translations }: PricingSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {translations.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border hover:shadow-xl transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {translations.forCustomers}
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">
                {translations.free}
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {translations.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group">
              {translations.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
              Populaire
            </div>
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {translations.forPharmacies}
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">
                {translations.free}
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {translations.pharmacyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground rounded-full group">
              {translations.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
