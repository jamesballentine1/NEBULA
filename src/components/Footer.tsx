import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";

const PHONE = "(888) 341-3350";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-display text-lg font-bold text-gradient mb-4">NebulaNet 360</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Complete Connectivity. Infinite Entertainment. Premium streaming, high-speed internet, and smart bundles — all under one universe.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/streaming" className="hover:text-primary transition-colors">Streaming</Link></li>
            <li><Link to="/internet" className="hover:text-primary transition-colors">Internet</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">Bundles</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            <li><Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies Policy</Link></li>
            <li><Link to="/advertising" className="hover:text-primary transition-colors">Advertising Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="hover:text-primary transition-colors font-medium">{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>support@nebulanet360.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>24/7 Support Available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 pt-6 border-t border-border/30">
        <p className="text-xs text-muted-foreground/60 leading-relaxed mb-4">
          NebulaNet 360 operates as an independent service provider and is not directly affiliated with or endorsed by any service brands or providers mentioned on this website. We offer independent comparison, consultation, and connection services to help customers find suitable plans. Service availability, pricing, and terms vary by location and provider. All third-party trademarks and logos are the property of their respective owners.
        </p>
        <p className="text-xs text-muted-foreground/60">
          © 2026 NebulaNet 360. All rights reserved by GAHWILER DONNA GEANINE
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
