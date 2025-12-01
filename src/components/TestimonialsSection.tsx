import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface TestimonialsSectionProps {
  translations: {
    title: string;
    stats: string;
    testimonials: {
      name: string;
      role: string;
      content: string;
    }[];
  };
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const TestimonialsSection = ({ translations }: TestimonialsSectionProps) => {
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

  // Auto-play carousel - slower animation (7 seconds)
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

    interval = setInterval(scrollNextSlide, 7000); // 7 seconds

    // Pause on hover
    const carouselElement = document.querySelector('[data-carousel="testimonials"]');
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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translations.title}
          </h2>
          <p className="text-lg text-primary font-semibold mb-2">
            {translations.stats}
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto" data-carousel="testimonials">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {translations.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-border relative h-full flex flex-col">
                    <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-semibold text-card-foreground truncate">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
            <div className="flex justify-center gap-2 mt-6">
              {translations.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
