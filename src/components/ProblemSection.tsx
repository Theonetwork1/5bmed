import { AlertCircle, MapPin, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProblemSectionProps {
  translations: {
    title: string;
    problems: {
      title: string;
      description: string;
    }[];
  };
}

export const ProblemSection = ({ translations }: ProblemSectionProps) => {
  const icons = [MapPin, Clock, DollarSign];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {translations.problems.map((problem, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="p-8 text-center bg-card hover:shadow-lg transition-shadow border-border">
                <Icon className="h-10 w-10 mx-auto mb-4 text-destructive/70" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
