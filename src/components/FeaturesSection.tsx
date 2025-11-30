import { Shield, Search, CreditCard, Truck, Clock, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeaturesSectionProps {
  translations: {
    title: string;
    features: {
      title: string;
      description: string;
    }[];
  };
}

export const FeaturesSection = ({ translations }: FeaturesSectionProps) => {
  const icons = [Shield, Search, CreditCard, Truck, Clock, HeadphonesIcon];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border group"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
