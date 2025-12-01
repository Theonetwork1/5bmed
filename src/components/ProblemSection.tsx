import { AlertCircle, MapPin, Clock, DollarSign, ShieldX, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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
  const icons = [MapPin, Clock, DollarSign, ShieldX, Info];
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  // Auto-play carousel - slower animation (6 seconds)
  useEffect(() => {
    if (!api) return;

    let interval: NodeJS.Timeout;
    let isPaused = false;
    
    const scrollNextSlide = () => {
      if (isPaused) return;
      
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Reset to beginning if at the end
        api.scrollTo(0);
      }
    };

    interval = setInterval(scrollNextSlide, 6000); // 6 seconds

    // Pause on hover
    const carouselElement = document.querySelector('[data-carousel="problems"]');
    if (carouselElement) {
      const pauseAutoplay = () => {
        isPaused = true;
      };
      const resumeAutoplay = () => {
        isPaused = false;
      };
      
      carouselElement.addEventListener('mouseenter', pauseAutoplay);
      carouselElement.addEventListener('mouseleave', resumeAutoplay);

      return () => {
        clearInterval(interval);
        carouselElement.removeEventListener('mouseenter', pauseAutoplay);
        carouselElement.removeEventListener('mouseleave', resumeAutoplay);
      };
    }

    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto" data-carousel="problems">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {translations.problems.map((problem, index) => {
                const Icon = icons[index];
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow border-border h-full">
                      <Icon className="h-10 w-10 mx-auto mb-4 text-destructive/70" />
                      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
            <div className="flex justify-center gap-2 mt-6">
              {translations.problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
