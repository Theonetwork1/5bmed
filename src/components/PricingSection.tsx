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
    popular: string;
    features: string[];
    pharmacyFeatures: string[];
    cta: string;
  };
}

export const PricingSection = ({ translations }: PricingSectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            {translations.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-4">
          <Card className="p-6 sm:p-7 md:p-8 bg-card border-border hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2">
                {translations.forCustomers}
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {translations.free}
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
              {translations.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground rounded-full group mt-auto text-sm sm:text-base">
              {translations.cta}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
          
          <Card className="p-6 sm:p-7 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2">
                {translations.forPharmacies}
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {translations.free}
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
              {translations.pharmacyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground rounded-full group mt-auto text-sm sm:text-base">
              {translations.cta}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
