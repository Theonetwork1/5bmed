import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TransformationSection } from "@/components/TransformationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { translations } from "@/lib/translations";

const Index = () => {
  const [lang, setLang] = useState<"fr" | "ht">("fr");
  
  const t = translations[lang];
  
  const toggleLanguage = () => {
    setLang(lang === "fr" ? "ht" : "fr");
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header 
        lang={lang} 
        onLangSwitch={toggleLanguage}
        translations={t.header}
      />
      
      <HeroSection translations={t.hero} />
      
      <ProblemSection translations={t.problem} />
      
      <FeaturesSection translations={t.features} />
      
      <TransformationSection translations={t.transformation} />
      
      <TestimonialsSection translations={t.testimonials} />
      
      <PricingSection translations={t.pricing} />
      
      <Footer translations={t.footer} />
    </div>
  );
};

export default Index;
