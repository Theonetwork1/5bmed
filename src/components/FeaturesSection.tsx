import { Shield, Search, CreditCard, Truck, Clock, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface FeaturesSectionProps {
  translations: {
    title: string;
    learnMore: string;
    features: {
      title: string;
      description: string;
    }[];
  };
}

export const FeaturesSection = ({ translations }: FeaturesSectionProps) => {
  const icons = [Shield, Search, CreditCard, Truck, Clock, HeadphonesIcon];
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

  // Auto-play carousel - slower animation (8 seconds)
  useEffect(() => {
    if (!api) return;

    let interval: NodeJS.Timeout;
    let isPaused = false;
    
    const scrollNextSlide = () => {
      if (isPaused) return;
      
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    interval = setInterval(scrollNextSlide, 8000); // 8 seconds

    // Pause on hover
    const carouselElement = document.querySelector('[data-carousel="features"]');
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
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {translations.title}
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto" data-carousel="features">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {translations.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="p-4 sm:p-6 md:p-8 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border group h-full flex flex-col">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-grow">{feature.description}</p>
                      <Button 
                        variant="ghost" 
                        className="w-fit text-primary hover:text-primary/80 p-0 h-auto group/btn text-sm sm:text-base"
                      >
                        {translations.learnMore}
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {Array.from({ length: Math.ceil(translations.features.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(current / 3) === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
