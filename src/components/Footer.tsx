import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  translations: {
    descriptionLine1: string;
    descriptionLine2: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    forPatients: {
      title: string;
      links: string[];
    };
    legal: {
      title: string;
      links: string[];
    };
    copyright: string;
  };
}

export const Footer = ({ translations }: FooterProps) => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Branding + Contact */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo5bmed.png" 
                alt="5BMed Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-sm text-white/80">
              {translations.descriptionLine1.includes("médicaments") ? (
                <>
                  {translations.descriptionLine1.split("médicaments ")[0]}médicaments
                  <br />
                  {translations.descriptionLine1.split("médicaments ")[1]}
                </>
              ) : translations.descriptionLine1.includes("medikaman") ? (
                <>
                  {translations.descriptionLine1.split("medikaman ")[0]}medikaman
                  <br />
                  {translations.descriptionLine1.split("medikaman ")[1]}
                </>
              ) : (
                translations.descriptionLine1
              )}
            </p>
            <p className="text-sm text-white/80">
              {translations.descriptionLine2}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <span>{translations.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <span>{translations.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                <span>{translations.contact.address}</span>
              </div>
            </div>
          </div>

          {/* For Patients */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">{translations.forPatients.title}</h3>
            <nav className="flex flex-col gap-2">
              {translations.forPatients.links.map((link, index) => (
                <Link 
                  key={index}
                  to="#" 
                  className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Support */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">{translations.legal.title}</h3>
            <nav className="flex flex-col gap-2">
              {translations.legal.links.map((link, index) => (
                <Link 
                  key={index}
                  to="#" 
                  className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-white/80 text-center px-4">
            {translations.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
