import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const PHONE = "(888) 290-4405";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/streaming", label: "Streaming" },
  { to: "/internet", label: "Internet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary/10 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-2 text-sm">
          <Phone className="w-3.5 h-3.5 text-primary" />
          <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="text-foreground hover:text-primary transition-colors font-medium">
            {PHONE} | Call Now
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/70 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-bold text-gradient">
            NebulaNet 360
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="hidden md:inline-flex glow-button text-sm">
            <Phone className="w-4 h-4 mr-2 inline" /> Call Now
          </a>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 pb-4">
            <ul className="flex flex-col items-center gap-4 pt-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="glow-button text-sm inline-flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
