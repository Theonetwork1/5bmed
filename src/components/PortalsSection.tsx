import { Users, Pill, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortalsSectionProps {
  translations: {
    title: string;
    patient: {
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    pharmacy: {
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
  };
}

export const PortalsSection = ({ translations }: PortalsSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choisissez Votre <span className="text-primary">Portail de Santé</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Patient Portal */}
          <Card className="overflow-hidden border-0 shadow-xl flex flex-col h-full">
            {/* Header bleu */}
            <div className="bg-primary p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {translations.patient.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {translations.patient.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Features sur fond blanc */}
            <div className="p-8 bg-white flex-grow flex flex-col">
              <ul className="space-y-4 mb-8 flex-grow">
                {translations.patient.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group">
                {translations.patient.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Pharmacy POS */}
          <Card className="overflow-hidden border-0 shadow-xl flex flex-col h-full">
            {/* Header vert */}
            <div className="bg-secondary p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Pill className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {translations.pharmacy.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {translations.pharmacy.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Features sur fond blanc */}
            <div className="p-8 bg-white flex-grow flex flex-col">
              <ul className="space-y-4 mb-8 flex-grow">
                {translations.pharmacy.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full group">
                {translations.pharmacy.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

