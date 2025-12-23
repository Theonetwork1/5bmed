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
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Patient Portal */}
          <Card className="overflow-hidden border-0 shadow-xl flex flex-col h-full">
            {/* Header bleu */}
            <div className="bg-primary p-4 sm:p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {translations.patient.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {translations.patient.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Features sur fond blanc */}
            <div className="p-4 sm:p-6 md:p-8 bg-white flex-grow flex flex-col">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                {translations.patient.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group text-sm sm:text-base">
                {translations.patient.cta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Pharmacy POS */}
          <Card className="overflow-hidden border-0 shadow-xl flex flex-col h-full">
            {/* Header vert */}
            <div className="bg-secondary p-4 sm:p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Pill className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {translations.pharmacy.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {translations.pharmacy.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Features sur fond blanc */}
            <div className="p-4 sm:p-6 md:p-8 bg-white flex-grow flex flex-col">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                {translations.pharmacy.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full group text-sm sm:text-base">
                {translations.pharmacy.cta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
