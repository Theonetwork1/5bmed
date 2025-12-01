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
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding + Contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/fbmed-logo (300 x 100 px).png" 
                alt="5BMed Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-white/80">
              {translations.descriptionLine1}
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
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">{translations.forPatients.title}</h3>
            <nav className="flex flex-col gap-2">
              {translations.forPatients.links.map((link, index) => (
                <Link 
                  key={index}
                  to="#" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal & Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">{translations.legal.title}</h3>
            <nav className="flex flex-col gap-2">
              {translations.legal.links.map((link, index) => (
                <Link 
                  key={index}
                  to="#" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm text-white/80 text-center">
            {translations.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
