import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  translations: {
    title: string;
    testimonials: {
      name: string;
      role: string;
      content: string;
    }[];
  };
}

export const TestimonialsSection = ({ translations }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {translations.testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-border relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
