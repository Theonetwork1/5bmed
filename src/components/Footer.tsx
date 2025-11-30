import { Pill, Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  translations: {
    rights: string;
  };
}

export const Footer = ({ translations }: FooterProps) => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Pill className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              5BMed
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 5BMed. {translations.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
